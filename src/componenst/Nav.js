import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../img/logo.svg';
import { fadeIn } from "../animations";

//Redux and Routes
import { fetchSearch } from "../actions/gameAction"
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setItextInput] = useState('');

    const inputHandler = (e) => {
        setItextInput(e.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput))
        setItextInput("");
    }

    const clearSearch = () => {
        dispatch({ type: "CLEAR_SEARCH" })
    }
    return (
        <StyledNav variants={fadeIn} initial='hidden' animate="show">
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo" />
                <h1>Ignite!</h1>
            </Logo>
            <StyledSearch>
                <input
                    type="text"
                    onChange={inputHandler}
                    value={textInput}
                />
                <button onClick={submitSearch} type="submit">Search</button>
            </StyledSearch>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        outline: none;
        background-color: #f5f5f5;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: .5rem 2rem;
        cursor: pointer;
        background-color: #ff7676;
        color: white;
        transition: .5s;
    }
    button:hover{
        color: #ff7676;
        background: black;
        transition: .5s;
    }
`

const StyledSearch = styled(motion.form)`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 1rem;
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    color: #ffffff;
    img{
        height: 2rem;
        width: 2rem;
        fill: #ff7676;
    }
`

export default Nav;