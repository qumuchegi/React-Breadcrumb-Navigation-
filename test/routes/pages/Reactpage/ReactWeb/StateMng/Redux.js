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
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  /> 
            </div>
            <h1>Redux</h1>
            <img src={reduximg} alt='' className='tubiao'></img>
        </div>
    )
}