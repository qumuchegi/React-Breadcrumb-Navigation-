import styled from 'styled-components'

const Breadcrumb = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    position:relative;
    box-sizing:border-box;
    margin:1rem;
    height:${props=>props.height};
`
const BreadcrumbItem = styled.div`
    display:inline-block;
    box-sizing: content-box;
    position: relative;
    margin:0.3rem;
    padding:0.3rem;
    height: ${props=>props.height};
    color:${props=>props.titleColor};
    border-radius:0.2rem;
    border: solid 0.1rem white;
    &:hover{
        cursor: pointer;
        color:${props=>props.bgColor};
        position: relative;
        border:solid 0.1rem ${props=>props.bgColor};
        
    }

    >.page-snapshot{
        display:none
    }

    &:hover .page-snapshot{
        margin: 0;
        display:block;
        transition: opacity 0.7s;
        position: absolute;
        z-index: 1;
        top:110%;
        left:0;
        box-shadow: -2px 7px 15px #bbb;
        border-radius: 0 2px 2px 2px;
    }

    [alt='加载中 。。。']{
        width:20rem;
    }
    &:hover img[class='remove-botton']{
        display:block;
    }
`
const Title = styled.div`
    white-space:nowrap;
    &:hover{
        color:${props=>props.hoverTitleColor};
        
    }
     
`

const ItemContainer  = styled.div`

    display:flex;
    justify-content:flex-start;
    &.multi-page-mode{
         
    }
    &.blocks-mode{
        position:absolute;
        z-index:10000000;
        top:120%;
        left:0;
        width:${props=>props.blocksWidth};
        flex-wrap:wrap;
        border:solid 1px ${props=>props.borderColor};
        border-radius:3px;
        background-color:white;
    }


`
const Arrow = styled.span`
    color: red
`

export  {
    Breadcrumb,
    BreadcrumbItem,
    Title,
    Arrow,
    ItemContainer 
    
}