import uuid from 'uuid'
import React from 'react'
import leftArrowSrc from './imgs/arrow.png'
import arrow2 from './imgs/arrow2.png'
import loadingSrc from './imgs/loading.png'
import removeSrc from './imgs/jiaochacross78.png'
import clear from './imgs/clear.png'
import blocks from './imgs/icons_blocks.png'
import list from './imgs/list.png'

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
        titleSize,
        blocksWidth,
         
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
                <Breadcrumb id='breadcrumbs'>
                    <ClearHistoryBtn height={titleSize}>
                        <img src={clear} alt=' ' onClick={()=>clearHistory()}></img>
                    </ClearHistoryBtn>
                    <ShowHistoryMode height={titleSize}>
                        <img src={showMode==='blocks' ? blocks:list} alt = '' onClick={()=>changeShowMode(showMode)}></img>
                    </ShowHistoryMode>
                    <LeftArrow height={titleSize} className={showMode === 'blocks' ? 'hide':null}>
                        {
                            pageNum===0 ?
                            <img src={arrow2} alt='' ></img>
                            :
                            <img src={leftArrowSrc} alt='上n条' onClick={()=>showLast()}></img>
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
                                titleSize={titleSize}
                                bgColor={bgColor}
                                titleColor={titleColor}
                                hoverBgColor={hoverBgColor}
                                onMouseOver={()=>showPageSnapshot(page.pageSnapshot,index)}
                              
                               >
                                <Title hoverTitleColor={hoverTitleColor} 
                                       titleSize={titleSize}
                                       onClick={()=>history.push({
                                           pathname:page.path
                                       })}
                                >{page.title}
                                </Title>
                                <div className='page-snapshot'>  
                                    <img src={loadingSrc} alt='appended-snapshot-img' className={`appended-snapshot-img-${index}`}></img>
                                </div>
                                <RemoveButton>
                                    <img src={removeSrc} className='remove-botton' onClick={()=>deleteAhistory(page.title, page.path)} alt=''></img>
                                </RemoveButton>
                            </BreadcrumbItem>
                        )
                    }
                    </ItemContainer>
                    <RightArrow height={titleSize} className={showMode === 'blocks' ? 'hide':null}> 
                        {
                            (pageNum+1)*visibleItemsCount >=  historyPages.length ?
                            <img src={arrow2} alt='' ></img>
                            :
                            <img src={leftArrowSrc} alt='下n条' onClick={()=>showNext()}></img>
                        }
                    </RightArrow>
                </Breadcrumb>
    </div>

