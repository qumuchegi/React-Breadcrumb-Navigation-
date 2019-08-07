import React,{Component} from 'react'
import ReactBreadcrumbNavigation from '../../../../src/index'
//import ReactBreadcrumbNavigation from 'react-breadcrumb-navigation'
import {Link} from 'react-router-dom'
 

export default class WebbasicHome extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div>
            <div width='5rem'>
                <ReactBreadcrumbNavigation
                  visibleItemsCount = {3}
                  title='web 基础' 
                  history={this.props.history} 
                  theme='rgb(92,194,248)'
                  blocksWidth='10rem'
                  height = '1.2rem'
                  itemWidth = '3rem'
                  isHome = {true}
                  />
            </div>
            <h1>web 基础</h1>
            <div id='links'>
                <Link to='/HTML'>HTML</Link>
                <Link to='/csspage'>CSS</Link>
                <Link to='/JSpage'>JS</Link>
                <Link to='/reacthome'>React</Link>
            </div>
            
        </div>
    )
    }
}