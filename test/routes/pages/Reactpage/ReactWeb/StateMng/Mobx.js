import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../../src/index'
import mobximg from '../../../../../imgs/Mobx.png'

export default function Mobx(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='Mobx' 
                  history={props.history} 
                  theme='rgb(92,194,248)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  itemWidth = '3rem'
                  />            
            </div>
            <h1>Mobx</h1>
            <img src={mobximg} alt = '' className='tubiao'></img>
        </div>
    )
}