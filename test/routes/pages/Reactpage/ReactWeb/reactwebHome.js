import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../src/index'
import {Link} from 'react-router-dom'

export default function ReactWebHome(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='react web 首页' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  />
            </div>
            <h1>react web 首页</h1>
            <div id='links'>
                <Link to='/Reactpage'>React</Link>
                <Link to='/StatemngHome'>状态管理</Link>
                <Link to='/RoutermngHome'>前端路由</Link>
            </div>
        </div>
    )
}