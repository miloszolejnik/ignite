import React from "react";
import { Link } from "react-router-dom";
import { smallImage } from "../util"

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction"

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image, id }) => {
    //Load Details Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id))
    }
    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    )
}


const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 5px 10px 20px #000000d6;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    background-color: #000000;
    border-bottom: #ff7676 solid 10px;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`
export default Game;