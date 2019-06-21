import React,{useState,useEffect,useReducer} from 'react'
//import rasterizeHTML from 'rasterizehtml'
import html2Canvas from 'html2canvas'
import UseHistoryDB from './historyDB/store'
import {BreadcrumbUI} from './BreadcrumbUI'

const visibleHistoryReducer=(state, action) => { // 管理面包屑翻页页数
    switch(action.type){
        case'NEXT_PAGE':return {pageNum:state.pageNum+1 };break;
        case'LAST_PAGE':return {pageNum:state.pageNum-1 } ;break;
        default: return pageNum
    }
}

 
export default function ReactBreadcrumbNavigation(
    {
        visibleItemsCount,// 一次显示多少条历史
        history,
        title,
        bgColor,
        hoverBgColor,
        titleColor,
        hoverTitleColor,
        blocksWidth,
        height,
        itemWidth,
    } ) {

    const {
            add_history,
            deleteAHistory,
            find_history,
            dropDB
        } = UseHistoryDB()

    const [historyPages, setHistoryPages] = useState([])
    const [showMode,setShowMode] = useState('horizontal')// 'horizontal' / 'blocks'

    const [visibleHistoryState, dispatch] = useReducer(visibleHistoryReducer,{pageNum:0})

    useEffect(() => {
        
        //console.log(window.document)
       

        html2Canvas(
            document.body
        ).then(async canvas => {
            let path = history.location.pathname
            console.log(history)
            //if(history.action === ('PUSH' || 'POP')){
            canvas2Image(canvas,title,path)
            //}
            //refreshHistory()
        }, err => {
            console.log(err)
        })

     
    }, [title,historyPages.length])

    async function refreshHistory(){
        let historyPages = await find_history()
        setHistoryPages(historyPages)
    }

    function addHistory(title, path, pageSnapshot){
        add_history(title, path, pageSnapshot)
    }

    function showPageSnapshot(snapshot,index){
        let BlobReader = new FileReader()
        BlobReader.readAsDataURL(snapshot)
        BlobReader.onload = function(){
              let imgContainer = document.getElementsByClassName(`appended-snapshot-img-${index}`)[0]
              imgContainer.src = this.result   
        } 
    }

    function canvas2Image(canvas,title,path) {
        
        canvas.toBlob(imgBlob=>
            onBlob(imgBlob,title,path)
            ,'image/jpeg',0.95);
    }

    function onBlob(imgBlob,title,path){
        addHistory(title, path, imgBlob)
        refreshHistory()// 更新历史
    }

    function showLast(){
        dispatch({type:'LAST_PAGE'})
        console.log(visibleHistoryState.pageNum)
    }

    function showNext(){
        dispatch({type:'NEXT_PAGE'})
        console.log(visibleHistoryState.pageNum)
    }
    
    function deleteAhistory(title,path){
        deleteAHistory(title,path)
        refreshHistory()// 更新历史
    }

    function clearHistory(){
        deleteAHistory()
        refreshHistory()// 更新历史
    }

    function changeShowMode(prevMode){
        if(prevMode === 'horizontal') setShowMode('blocks')
        else setShowMode('horizontal')
    }

    return(
        historyPages.length > 0 &&
            <BreadcrumbUI
                history = {history}
                visibleItemsCount = {visibleItemsCount}
                historyPages = {historyPages}
                bgColor = {bgColor}
                hoverBgColor = {hoverBgColor}
                hoverTitleColor = {hoverTitleColor}
                titleColor = {titleColor}
                showPageSnapshot = {showPageSnapshot}
                blocksWidth = {blocksWidth}
                showLast = {showLast}
                showNext = {showNext}
                pageNum = {visibleHistoryState.pageNum}
                deleteAhistory = {deleteAhistory}
                clearHistory = {clearHistory}
                showMode = {showMode}
                changeShowMode = {changeShowMode}
                height = { height}
                itemWidth = {itemWidth}
            ></BreadcrumbUI>
    )
}

