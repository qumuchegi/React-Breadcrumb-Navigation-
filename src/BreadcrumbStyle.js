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
    background-color:${props=>props.bgColor};
    color:${props=>props.titleColor};
    border-radius:0.2rem;
    border: solid 0.1rem white;
    &:hover{
        cursor: pointer;
        color:${props=>props.bgColor};
        position: relative;
        border:solid 0.1rem ${props=>props.bgColor};
        background-color: ${props=>props.hoverBgColor};
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

    [alt='appended-snapshot-img']{
        width:20rem;
    }
    &:hover img[class='remove-botton']{
        display:block;
    }
`
const Title = styled.div`
    width:${props=>props.itemWidth};
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    
    &:hover{
        color:${props=>props.hoverTitleColor};
        
    }
     
`

const LeftArrow = styled.div`
     
    >img{
        transform:rotate(180deg);

        height:${props=>props.height};
        
    }
    &.hide{
        display:none;
    }
`

const RightArrow = styled.div`
 
    >img{
        height:${props=>props.height};
        
    }
    &.hide{
        display:none;
    }
`
const RemoveButton = styled.div`
   >img{
    position:absolute;
    width:1rem;
    top:-0.5rem;
    right:-0.5rem;
    display:none;
   }

    
`

const ClearHistoryBtn = styled.div`
  >img{
    width:${props=>props.height};
    height: ${props=>props.height};
    border-radius:${props=>props.height};
  }
  >img:hover{
      background-color:#eee
  }
   
`

const  ShowHistoryMode = styled.div`
>img{
    width:${props=>props.height};
    margin-left:0.7rem;
    height: ${props=>props.height};
  }
  >img:hover{
      background-color:#eee
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
        top:100%;
        left:0;
        width:${props=>props.blocksWidth};
        flex-wrap:wrap;
        border:solid 1px ${props=>props.borderColor};
        border-radius:3px;
        background-color:white;
    }


`

export  {
    Breadcrumb,
    BreadcrumbItem,
    Title,
    LeftArrow,
    RightArrow,
    RemoveButton,
    ClearHistoryBtn,
    ShowHistoryMode,
    ItemContainer 
    
}