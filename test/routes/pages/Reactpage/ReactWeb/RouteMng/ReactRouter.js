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
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='30rem'
                  height = '1.2rem'
                  />            </div>
            <h1>React Router</h1>
            <img src={Reactrouterimg} alt = '' className='tubiao'></img>
        </div>
    )
}