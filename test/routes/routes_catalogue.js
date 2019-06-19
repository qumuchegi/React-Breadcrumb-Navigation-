/*

1. 路由目录
2. 为每一个路由封装 react-router 的<Rouet>

*/
import React,{useState,useEffect} from 'react'
// WebBasicpage
import WebBasicHome from './pages/WebBasicpage/webbasicHome'
import JS from './pages/WebBasicpage/JS'
import CSS from './pages/WebBasicpage/CSS'
import HTML from './pages/WebBasicpage/HTML'

// Reactpage
import ReactHome from './pages/Reactpage/ReactHome'
import ReactNative from './pages/Reactpage/ReactNative'
import Next from './pages/Reactpage/NextJS'
// Reactpage/ReactWeb
import ReactwebHome from './pages/Reactpage/ReactWeb/reactwebHome'
import Reactpage from './pages/Reactpage/ReactWeb/React'
// Reactpage/ReactWeb/RouteMng
import ReactRouter from './pages/Reactpage/ReactWeb/RouteMng/ReactRouter'
import Router5 from './pages/Reactpage/ReactWeb/RouteMng/Router5'
import RoutermngHome from './pages/Reactpage/ReactWeb/RouteMng/routemngHome'
// Reactpage/ReactWeb/StateMng
import Mobx from './pages/Reactpage/ReactWeb/StateMng/Mobx'
import Redux from './pages/Reactpage/ReactWeb/StateMng/Redux'
import StatemngHome from './pages/Reactpage/ReactWeb/StateMng/statemngHome'


import { Route } from 'react-router'

import uuid from 'uuid'

const routeCatloague = [
    {
        component:WebBasicHome,
        exact:true,
        path:'/'
    },
    {
        component:JS,
        path:'/JSpage'
    },
    {
        component:CSS,
        path:'/csspage'
    },
    {
        component:HTML,
        path:'/HTML'
    },
    {
        component:ReactNative,
        path:'/ReactNative'
    },
    {
        component:Next,
        path:'/Next'
    },
    {
        component:ReactwebHome,
        path:'/ReactwebHome'
    },
    {
        component:Reactpage,
        path:'/Reactpage'
    },
    {
        component:ReactRouter,
        path:'/ReactRouter'
    },
    {
        component:Router5,
        path:'/Router5'
    },
    {
        component:RoutermngHome,
        path:'/RoutermngHome'
    },
    {
        component:Mobx,
        path:'/Mobx'
    },
    {
        component:Redux,
        path:'/Redux'
    },
    {
        component:StatemngHome,
        path:'/StatemngHome'
    },
    {
        component:ReactHome,
        path:'/reacthome'
    }
]

export default function Routescatalogue(){

    const [Routes, setRoutes] = useState([])

    useEffect(() => {
        let Routes = routeCatloague.map(page => {
            if(page.exact){
                return <Route exact path={page.path} component={page.component} key={uuid()}></Route>
            }else{
                return <Route path={page.path} component={page.component} key={uuid()}></Route>
            }
        })
        setRoutes(Routes)
    }, [routeCatloague])

    return Routes
}

