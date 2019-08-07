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

const pageSnapshot = index => (
    <div className='page-snapshot'>  
        <img src='' alt='加载中 。。。' className={`appended-snapshot-img-${index}`}></img>
    </div>
)
export const BreadcrumbUI=(
    {
        historyPages,
        theme,
        blocksWidth,
        height,

        to,
        showPageSnapshot,
        isShowPageSnapshot
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
                    onClick = {(e)=> isShowPageSnapshot ? showPageSnapshot(e,page.pageSnapshot,index) : null}
                    onMouseOver={(e)=>isShowPageSnapshot ? showPageSnapshot(e,page.pageSnapshot,index) : null}
                    onTouchStart={(e)=>isShowPageSnapshot ? showPageSnapshot(e,page.pageSnapshot,index) : null}
                    height={ height}
                    >
                    <Title 
                        onMouseOver={e=>e.stopPropagation()}
                        onClick={(e)=>to(e,index, historyPages.length)}
                    >{page.title}
                    </Title>
                    {isShowPageSnapshot ? pageSnapshot(index): null}
                    
                </BreadcrumbItem>
                </div>
                )
            }
            </ItemContainer>
        </Breadcrumb>
    </div>

