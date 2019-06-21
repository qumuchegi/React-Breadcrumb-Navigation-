import React from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
import {Link} from 'react-router-dom'

export default function ReactHome(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='React 首页' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  itemWidth = '3rem'
                  />
            </div>
            <h1>React 首页</h1>
            <div id='links'>
                <Link to='/ReactwebHome'>React web</Link>
                <Link to='/ReactNative'>React Native</Link>
                <Link to='/Next'>NextJS</Link>
            </div>
        </div>
    )
}