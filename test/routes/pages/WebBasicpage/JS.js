import React,{useEffect} from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
//import ReactBreadcrumbNavigation from 'react-breadcrumb-navigation'
import JSimg from '../../../imgs/js.jpg'

export default function JS(props){
    useEffect(() => {
        
        setTimeout(()=>document.getElementById('34').innerHTML='1秒后渲染',1000)
         
    }, [])
    return(
        <div>
            <div>
                <ReactBreadcrumbNavigation 
                  visibleItemsCount = {3}
                  title='JS' 
                  history={props.history} 
                  theme='rgb(92,194,248)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  itemWidth = '3rem'
                  />
            </div>
            <h1> JS </h1>
            <img src={JSimg} alt='' className='tubiao'></img>
            <div id='34'></div>
           
        </div>
    )
}