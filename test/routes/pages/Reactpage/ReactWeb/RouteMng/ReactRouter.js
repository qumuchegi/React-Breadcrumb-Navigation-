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
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  />            </div>
            <h1>React Router</h1>
            <img src={Reactrouterimg} alt = '' className='tubiao'></img>
        </div>
    )
}