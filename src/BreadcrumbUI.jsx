import uuid from 'uuid'
import React from 'react'
 
import {
    Breadcrumb,
    BreadcrumbItem,
    Title,
    Arrow,
    ItemContainer,
    //HideBlocksMode
} from './BreadcrumbStyle'

 
export const BreadcrumbUI=(
    {
        history,
        visibleItemsCount,
        historyPages,
        theme,
        blocksWidth,
        height,
        itemWidth,

        to,
        showPageSnapshot,
        changeShowMode
    }

) =><div> 
        <Breadcrumb id='breadcrumbs' height={ height } >
            <ItemContainer   
                blocksWidth={blocksWidth} >
            {
                historyPages
                    
                .map((page,index) => 
                <div key={uuid()}>  { !page.isHome && <Arrow>&gt;</Arrow>}
                <BreadcrumbItem 
                    key={uuid()} 
                    titleColor={theme}
                    onClick = {(e)=>showPageSnapshot(e,page.pageSnapshot,index)}
                    onMouseOver={(e)=>showPageSnapshot(e,page.pageSnapshot,index)}
                    onTouchStart={(e)=>showPageSnapshot(e,page.pageSnapshot,index)}
                    height={ height}
                    >
                    <Title 
                        onMouseOver={e=>e.stopPropagation()}
                        onClick={(e)=>to(e,index, historyPages.length)}
                    >{page.title}
                    </Title>
                    <div className='page-snapshot'>  
                        <img src='' alt='加载中 。。。' className={`appended-snapshot-img-${index}`}></img>
                    </div>
                </BreadcrumbItem>
                </div>
                )
            }
            </ItemContainer>
        </Breadcrumb>
    </div>

