import React from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
//import ReactBreadcrumbNavigation from 'react-breadcrumb-navigation'
import CSS3 from '../../../imgs/CSS3.jpg'

export default function CSS(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='CSS' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  />
            </div>
            <h1>CSS</h1>
            <img src={CSS3} alt='' className='tubiao'></img>
        </div>
    )
}