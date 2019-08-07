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
                  theme='rgb(92,194,248)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  itemWidth = '3rem'
                  />            </div>
            <h1>Router 5</h1>
            <img src={router5img} alt = '' className='tubiao'></img>
        </div>
    )
}