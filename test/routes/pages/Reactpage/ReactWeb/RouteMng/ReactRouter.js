import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../../src/index'
import Reactrouterimg from '../../../../../imgs/react-router.jpg'

export default function reactRouter(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='React Router' 
                  history={props.history} 
                  theme='rgb(92,194,248)'
                  blocksWidth='30rem'
                  height = '1.2rem'
                  itemWidth = '3rem'
                  />            </div>
            <h1>React Router</h1>
            <img src={Reactrouterimg} alt = '' className='tubiao'></img>
        </div>
    )
}