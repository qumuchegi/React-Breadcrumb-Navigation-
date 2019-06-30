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
        bgColor,
        hoverBgColor,
        titleColor,
        hoverTitleColor,
        blocksWidth,
        height,
        itemWidth,
    } ) {

    var documentLoadTimer
    const {
            add_history,
            deleteAHistory,
            find_history,
            dropDB
        } = UseHistoryDB()

    const [historyPages, setHistoryPages] = useState([])
    const [showMode,setShowMode] = useState('multi-page')// multi-page / 'blocks'

    const [visibleHistoryState, dispatch] = useReducer(visibleHistoryReducer,{pageNum:0})
    
   useEffect(() => {
        let {scriptDom, headDom} = addIconScript()

       return () => {
           removeIconScript(scriptDom, headDom)
       };
       
   }, [])
    
    useEffect(() => {
        
        refreshHistory()
        documentLoadTimer = null
        //页面加载完成之后再拍照，以免缺少一些需要异步动态渲染的部分    
        documentLoadTimer =  setTimeout(
            ()=>{
                 
                html2Canvas(
                    document.body
                ).then( canvas => {
                    let path = history.location.pathname
                    
                    canvas2Image(canvas,title,path)
             
                    
                }, err => {
                    //console.log(err)
                })
                
            },
            2000
        )
         return ()=>{
             //dropDB()
             clearTimeout(documentLoadTimer)
         }
    }, [])
 
    function addIconScript(){

        let scriptDom = document.createElement('script')
        let headDom = document.getElementsByTagName('head')[0]
        
        scriptDom.src = 'https://kit.fontawesome.com/e1dd5dc490.js'
        headDom.appendChild(scriptDom)

        return {scriptDom, headDom}
    }
    
    function removeIconScript(dom_removed, parentDom){
     
        parentDom.removeChild(dom_removed)
    }
    async function refreshHistory(){
      
        let historyPages = await find_history()
        setHistoryPages(historyPages)
    }

    async function addHistory(title, path, pageSnapshot){
        let res = await add_history(title, path, pageSnapshot)
    
        return res
    }

    function showPageSnapshot(e,snapshot,index){


        let BlobReader = new FileReader()
        BlobReader.readAsDataURL(snapshot)
        let imgContainer = document.getElementsByClassName(`appended-snapshot-img-${index}`)[0]
        if( !imgContainer.src.match(/data/))
        BlobReader.onload = function(){
            console.log('图片阅读完成')
            imgContainer.src = this.result   
        } 
    }

    function canvas2Image(canvas,title,path) {
        
        canvas.toBlob(imgBlob=>
            onBlob(imgBlob,title,path)
            ,'image/jpeg',0.95);

    }

    async function onBlob(imgBlob,title,path){
        let hadAdded = await addHistory(title, path, imgBlob)
   
        hadAdded && refreshHistory()
    }

    function showLast(){
        dispatch({type:'LAST_PAGE'})
        //console.log(visibleHistoryState.pageNum)
    }

    function showNext(){
        dispatch({type:'NEXT_PAGE'})
        //console.log(visibleHistoryState.pageNum)
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

    function toPage(e,path){ 
        e.stopPropagation()
        history.push({
            pathname:path
        })
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
                to = {toPage}
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

