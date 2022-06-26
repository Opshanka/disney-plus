import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Nav>
        <Logo src='/images/logo.svg'></Logo>
        <NavMenu>
            <a>
                <img src='/images/home-icon.svg'/>
                <span>HOME</span>
            </a>
            <a>
                <img src='/images/search-icon.svg'/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg'/>
                <span>WATCH LIST</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg'/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src='/images/series-icon.svg'/>
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80'/>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
display:flex;
align-items: center;
height:70px;
padding: 0 36px;
background:#090b13;
`

const Logo = styled.img`
width:80px;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:20px;
    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        align-items:center;
        img{
            height:20px;
        }
        span{
            position:relative;
            font-size:13px;
            letter-spacing:1.42px;
            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s ;
                tranform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                    transform:scaleX(1);
                    opacity:1;
                }
            
        }
    }
`

const UserImg = styled.img`
    width:40px;
    height:40px;
    border-radius:50%
`