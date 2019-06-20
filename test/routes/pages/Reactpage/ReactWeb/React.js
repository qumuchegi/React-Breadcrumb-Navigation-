import React from 'react'
import ReactBreadcrumbNavigation from '../../../../../src/index'
import ReactImg from '../../../../imgs/React.jpg'

export default function ReactPage(props){

    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='React' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  />
                    
            </div>
            <h1>React</h1>
            <img src={ReactImg} alt='' className='tubiao'></img>
        </div>
    )
}