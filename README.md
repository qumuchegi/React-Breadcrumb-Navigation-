# React-Breadcrumb-Navigation

React-Breadcrumb-Navigation 是一个面包屑导航（BreadcrumbNavigation）组件.用于展示用户浏览历史，组件为用户提供页面快照，便于用户一步回退到之前的页面，不用再按原来的路径到达想退回的页面。 在 React 项目中需要与 [react-router](https://www.npmjs.com/package/react-router) 、 [history](https://www.npmjs.com/package/history) 一起使用。

实例：[demo](https://github.com/qumuchegi/React-Breadcrumb-Navigation-/tree/master/test)  

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
                visibleItemsCount = {3}
                title = '页面 1' 
                history = {props.history} 
                bgColor = 'rgb(92,194,248)'
                hoverBgColor = 'white'
                titleColor = 'white'
                titleSize = '1.2rem'
                hoverTitleColor = 'rgb(234,123,123)'
                 
            />
        </div>
    )
}

export function page2(props){
    return(
        <div>
            <h1> 页面 2 </h1>

            <ReactBreadcrumbNavigation 
                visibleItemsCount = {3}
                title = '页面 2' 
                history = {props.history} 
                bgColor = 'rgb(92,194,248)'
                hoverBgColor = 'white'
                titleColor = 'white'
                titleSize = '1.2rem'
                hoverTitleColor = 'rgb(234,123,123)'
                 
            />
        </div>
    )
}


```

```js
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

function App(){
    return (
         <Router history={history} id='app-body'>
           <Switch>
               <Route path = '/page1' component = {page1}/>
               <Route path = '/page2' component = {page2}/>
           </Switch>
         </Router>
    )
 
  }
  
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

```
当然，如果为了方便在多个页面中多次使用相同样式的面包屑组件，可以一次性配置组件，再导出到需要使用该面包屑导航组件的页面。

## 配置参数

参数 | 描述
:-: | :-:
visibleItemsCount | 必须，面包屑导航栏目分页展示，一页展示的数目为 visibleItemsCount
title | 必须，页面标题
history | 必须，使用 [history](https://www.npmjs.com/package/history)管理历史，从中获取页面跳转信息,
bgColor | 面包屑组件背景色
hoverBgColor | 鼠标悬停时的背景色
titleColor | 面包屑导航组件上页面标题的字体颜色
height | 必须，面包屑导航组件上在页面所占高度
hoverTitleColor | 鼠标悬停再面包屑导航组件上页面标题上时字体颜色
blocksWidth | 将面包屑导航组件全部历史显示出来时组件的宽度

