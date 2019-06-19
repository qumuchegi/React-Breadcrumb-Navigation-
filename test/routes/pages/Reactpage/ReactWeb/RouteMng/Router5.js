import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../../src/index'
import router5img from '../../../../../imgs/router5.png'

export default function Router5(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='Router 5' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  />            </div>
            <h1>Router 5</h1>
            <img src={router5img} alt = '' className='tubiao'></img>
        </div>
    )
}