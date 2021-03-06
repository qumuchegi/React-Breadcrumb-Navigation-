import React,{useState,useEffect,useReducer} from 'react'
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
        theme,
        blocksWidth,
        height,
        itemWidth,
        isHome,
        isShowPageSnapshot = true
    } ) {
 
    var documentLoadTimer
    const {
            add_history,
            deleteAHistory,
            deleteLastHistory,
            find_history,
            dropDB
        } = UseHistoryDB()

    const [historyPages, setHistoryPages] = useState([])
    const [showMode,setShowMode] = useState('multi-page')// multi-page / 'blocks'

    const [visibleHistoryState, dispatch] = useReducer(visibleHistoryReducer,{pageNum:0})
    
    useEffect(() => {
        documentLoadTimer = null
        console.log(history.location.pathname)
      
        refreshHistory()
    
        documentLoadTimer =  setTimeout(
            ()=>{
                html2Canvas(
                    document.body
                ).then( canvas => {
                    let path = history.location.pathname
                    canvas2Image(canvas,title,path,isHome)
                }, err => {
                    console.log(err)
                })
            },
            10
        )
      
        return ()=>{
            //dropDB()
            clearTimeout(documentLoadTimer)
        }
        //页面加载完成之后再拍照，以免缺少一些需要异步动态渲染的部分  
        
    }, [])
 
    async function refreshHistory(){
        let HistoryPages = await find_history()
        setHistoryPages(HistoryPages)
    }

    async function addHistory(title, path, pageSnapshot, isHome){
        let res = await add_history(title, path, pageSnapshot, isHome)
        
        return res
    }

    function showPageSnapshot(e,snapshot,index){
        let BlobReader = new FileReader()
        BlobReader.readAsDataURL(snapshot)
        let imgContainer = document.getElementsByClassName(`appended-snapshot-img-${index}`)[0]
        if( !imgContainer.src.match(/data/))
        BlobReader.onload = function(){
            imgContainer.src = this.result   
        } 
    }

    function canvas2Image(canvas,title,path, isHome=false) {
        canvas.toBlob(imgBlob=>
            onBlob(imgBlob,title,path,isHome)
            ,'image/jpeg',0.95);

    }

    async function onBlob(imgBlob,title,path,isHome){
        let hadAdded = await addHistory(title, path, imgBlob,isHome)
        if (hadAdded) {
            refreshHistory()
            
        }
    }

    function showLast(){
        dispatch({type:'LAST_PAGE'})
    }

    function showNext(){
        dispatch({type:'NEXT_PAGE'})
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
        if(prevMode === 'multi-page') setShowMode('blocks')
        else setShowMode('multi-page')
    }

    function toPage(e,index,long, path){ 
        e.stopPropagation()
        deleteLastHistory({curPath: path}).then(newHistoryPages=>{
            history.push(path)
            //history.go(1+index-long)
        })
        
    }

    return(
        historyPages.length > 0 &&
            <BreadcrumbUI
                history = {history}
                visibleItemsCount = {visibleItemsCount}
                historyPages = {historyPages}
                theme = {theme}
                to = {toPage}
                showPageSnapshot = {showPageSnapshot}
                blocksWidth = {blocksWidth}
                showLast = {showLast}
                showNext = {showNext}
                pageNum = {visibleHistoryState.pageNum}
                clearHistory = {clearHistory}
                showMode = {showMode}
                changeShowMode = {changeShowMode}
                height = { height}
                itemWidth = {itemWidth}
                isShowPageSnapshot = {isShowPageSnapshot}
            ></BreadcrumbUI>
    )
}

