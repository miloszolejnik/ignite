import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0%.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track{
            background-color: white;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        overflow-x: hidden;
        background-color: #241f1f;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #ff7676;
        text-shadow: 2px 2px #00000086;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
        color: #ff7676;
        text-shadow: 2px 2px #00000086;

    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #e7e7e7;
        text-shadow: 2px 2px #00000086;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyle;