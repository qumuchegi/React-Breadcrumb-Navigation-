import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../../src/index'
import {Link} from 'react-router-dom'

export default function RouterMngHome(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='路由管理 首页' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidthh='10rem'
                  height = '1.2rem'
                  itemWidth = '3rem'
                  />            </div>
            <h1>路由管理 首页</h1>
            <div id='links'>
                <Link to='/ReactRouter'>React Router</Link>
                <Link to='/Router5'>router5</Link>
            </div>
        </div>
    )
}