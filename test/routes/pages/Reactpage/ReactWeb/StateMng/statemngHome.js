import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../../src/index'
import {Link} from 'react-router-dom'

export default function StateMngHome(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='状态管理 首页' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  />
            </div>
            <h1>状态管理 首页</h1>
            <div id='links'>
                <Link to='/Redux'>Redux</Link>
                <Link to='/Mobx'>Mobx</Link>
            </div>
        </div>
    )
}