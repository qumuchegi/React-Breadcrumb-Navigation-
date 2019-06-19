import React from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
import RNimg from '../../../imgs/RN.png'

export default function RN(props){
    return(
        <div>
            <div>
            <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='React Native' 
                  history={props.history} 
                  bgColor='rgb(92,194,248)'
                  hoverBgColor='white'
                  titleColor='white'
                  titleSize='1.2rem'
                  hoverTitleColor='rgb(234,123,123)'
                  blocksWidth='10rem'
                  />
            </div>
            <h1>React Native</h1>
            <img src={RNimg} alt='' className='tubiao'></img>
        </div>
    )
}