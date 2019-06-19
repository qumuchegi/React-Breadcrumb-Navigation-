import styled from 'styled-components'

const Breadcrumb = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    position:relative;
`
const BreadcrumbItem = styled.div`
    display:inline-block;
    box-sizing: border-box;
    position: relative;
    margin:0.3rem;
    padding:0.3rem;
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
const Title = styled.span`
   
    font-size:${props=>props.titleSize};
   
    &:hover{
        color:${props=>props.hoverTitleColor};
        
    }
`

const LeftArrow = styled.div`
     
    >img{
        transform:rotate(180deg);
        height:${props=>props.height};
        
    }
`

const RightArrow = styled.div`
 
    >img{
        height:${props=>props.height};
        
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

const HideBlocksMode = styled.div`
    &#hide-blocks{
        transition:top 1s,opacity 1s;
        top:-100%;
        /*transform:translateY(-100%);*/
        position:absolute;
        z-index:-9999;
        opacity:0;
        left:0;
        width:${props=>props.blocksWidth};
    }
    &#show-blocks{
        display:flex;
        position:absolute;
        z-index:0;
        left:0;
        width:${props=>props.blocksWidth};
        background-color:white;
        transition:top 1s,opacity 1s;
        top:100%;
        opacity:1;
        /*transform:translateY(0%);*/
        flex-wrap:wrap;
        justify-content:flex-start;
        border:solid 0.6px ${props=>props.borderColor};
        border-radius:0 3px 3px 3px;
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
    HideBlocksMode
}