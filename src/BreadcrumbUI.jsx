import uuid from 'uuid'
import React from 'react'
 
import {
    Breadcrumb,
    BreadcrumbItem,
    Title,
    LeftArrow,
    RightArrow,
    RemoveButton,
    ClearHistoryBtn,
    ShowHistoryMode,
    ItemContainer,
    //HideBlocksMode
} from './BreadcrumbStyle'

 
export const BreadcrumbUI=(
    {
        history,
        visibleItemsCount,
        historyPages,
        bgColor,
        hoverBgColor,
        hoverTitleColor,
        titleColor,
        blocksWidth,
        height,
        itemWidth,

        to,
        showPageSnapshot,
        showLast,
        showNext,
        pageNum,
        deleteAhistory,
        clearHistory,
        showMode,
        changeShowMode
    }

) =><div> 
                <Breadcrumb id='breadcrumbs' height={ height } >
                    <ClearHistoryBtn height={ height} color={bgColor}>
                        <i className="fas fa-eraser" onClick={()=>clearHistory()} ></i>
                        {/*<img src={clear} alt=' ' onClick={()=>clearHistory()}></img>*/}
                    </ClearHistoryBtn>
                    <ShowHistoryMode height={ height} className={showMode!=='blocks'?'center':'top'} color={bgColor}>
                        <i className={showMode==='blocks'? "fas fa-th":"fas fa-th-large"} onClick={()=>changeShowMode(showMode)}></i>
                        {/*<img src={showMode==='blocks' ? blocks:list} alt = '' onClick={()=>changeShowMode(showMode)}></img>*/}
                    </ShowHistoryMode>
                    <LeftArrow  height={ height}  color={bgColor} className={showMode === 'blocks' ? 'null':'show'}>


                        {
                            pageNum===0 ?
                            <i className="far fa-arrow-alt-circle-left noPage"></i>
                            :
                            <i className="far fa-arrow-alt-circle-left yesPage" onClick={()=>showLast()}></i>
        
                        }
                    </LeftArrow>
                    <ItemContainer   className = {showMode === 'blocks'? 'blocks-mode':'multi-page-mode'} blocksWidth={blocksWidth} borderColor={bgColor}>
                    {
                         (showMode === 'blocks' ?
                            historyPages
                            :
                            (
                            historyPages
                            .slice(pageNum*visibleItemsCount,(pageNum+1)*visibleItemsCount)
                         ))
                         .map((page,index) => 

                            <BreadcrumbItem key={uuid()} 
                                bgColor={bgColor}
                                titleColor={titleColor}
                                hoverBgColor={hoverBgColor}
                                onClick = {(e)=>showPageSnapshot(e,page.pageSnapshot,index)}
                                onMouseOver={(e)=>showPageSnapshot(e,page.pageSnapshot,index)}
                                onTouchStart={(e)=>showPageSnapshot(e,page.pageSnapshot,index)}
                                height={ height}
                               >
                                <Title hoverTitleColor={hoverTitleColor} 
                                       itemWidth={ showMode !== 'blocks' ? itemWidth:null}
                                       onMouseOver={e=>e.stopPropagation()}
                                       onClick={(e)=>to(e,page.path)}
                                >{page.title}
                                </Title>
                                <div className='page-snapshot'>  
                                    <img src='' alt='加载中 。。。' className={`appended-snapshot-img-${index}`}></img>
                                </div>
                                <RemoveButton>
                                    <i className="fas fa-times-circle" onClick={()=>deleteAhistory(page.title, page.path)}></i>
                                </RemoveButton>
                            </BreadcrumbItem>
                        )
                    }
                    </ItemContainer>
                    <RightArrow  height={ height}  color={bgColor} color={bgColor} className={showMode === 'blocks' ? 'null':'show'}> 
                        {
                            (pageNum+1)*visibleItemsCount >=  historyPages.length ?
                            <i className="far fa-arrow-alt-circle-left noPage"></i>
                            :
                            <i className="far fa-arrow-alt-circle-left yesPage" onClick={()=>showNext()}></i>
                           
                        }
                    </RightArrow>
                </Breadcrumb>
    </div>

