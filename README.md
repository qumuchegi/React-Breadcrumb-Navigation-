# React-Breadcrumb-Navigation

React-Breadcrumb-Navigation 是一个面包屑导航（BreadcrumbNavigation）组件.用于展示用户浏览历史，组件为用户提供页面快照，便于用户一步回退到之前的页面，不用再按原来的路径到达想退回的页面。 在 React 项目中需要与 [react-router](https://www.npmjs.com/package/react-router) 一起使用。

实例：[demo in SandBox](https://codesandbox.io/s/react-breadcfumb-navigation-demo-hp062)  

[gh-pages](https://qumuchegi.github.io/React-Breadcrumb-Navigation-/)

[npm](https://www.npmjs.com/package/react-breadcrumb-navigation)

[github](https://github.com/qumuchegi/React-Breadcrumb-Navigation-)

## 下载

Using npm:
> $ npm i --save react-breadcrumb-navigation 

## 使用

为每一个需要面包屑导航的页面引入 React-Breadcrumb-Navigation 组件，并配置页面标题等参数即可：

```js
// 页面1、2:
import ReactBreadcrumbNavigation from 'react-breadcrumb-navigation'

export function page1(props){
    return(
        <div>
            <h1> 页面 1 </h1>

            <ReactBreadcrumbNavigation 
                title = '页面 1' 
                history = {props.history}
                titleSize = '1.2rem'
                itemWidth = '3rem'
            />
        </div>
    )
}

export function page2(props){
    return(
        <div>
            <h1> 页面 2 </h1>

            <ReactBreadcrumbNavigation 
                title = '页面 2' 
                history = {props.history} 
                titleSize = '1.2rem'
                itemWidth = '3rem'
                isShowPageSnapshot = {false}
            />
        </div>
    )
}


```

```js
// 配置 history 方法 1 :
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

function App(){
    return (
         <Router history={history}>
           <Switch>
               <Route path = '/page1' component = {page1}/>
               <Route path = '/page2' component = {page2}/>
           </Switch>
         </Router>
    )
 
  }

// 配置 history 方法 2 :
/*

import { BrowserRouter as Router } from "react-router-dom";
function App(){
    return (
         <Router>
           <Switch>
               <Route path = '/page1' component = {page1}/>
               <Route path = '/page2' component = {page2}/>
           </Switch>
         </Router>
    )
 
  }

*/
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

```
当然，如果为了方便在多个页面中使用相同样式的面包屑组件，可以一次性配置组件，再导出到需要使用该面包屑导航组件的页面。

## 配置参数

参数 | 描述
:-: | :-:
title | string, 必须，页面标题
history | 必须，获取浏览器的历史。可以使用 [history](https://www.npmjs.com/package/history) 管理历史，从中获取页面跳转信息。也可以直接使用react-router 的 `BrowserRouter`。两种方法已经在上述示例代码给出。
height | 必须，面包屑导航组件上在页面所占高度
blocksWidth | 将面包屑导航组件全部历史显示出来时组件的宽度
theme | 面包屑组件主题色
isShowPageSnapshot | boolean, 当鼠标悬停在面包屑组件上时是否显示对应的页面快照, 默认为 true
