import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../../src/index'
import reduximg from '../../../../../imgs/Redux.png'

export default function Redux(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='Redux' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  /> 
            </div>
            <h1>Redux</h1>
            <img src={reduximg} alt='' className='tubiao'></img>
        </div>
    )
}