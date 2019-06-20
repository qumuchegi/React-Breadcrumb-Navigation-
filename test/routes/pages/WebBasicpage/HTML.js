import React from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
//import ReactBreadcrumbNavigation from 'react-breadcrumb-navigation'
import HTML5 from '../../../imgs/HTML5.jpg'

export default function HTML(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='HTML' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  />
            </div>
            <h1>HTML</h1>
            <img src={HTML5} alt='' className='tubiao'></img>
        </div>
    )
}