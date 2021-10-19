import React from "react";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useSelector } from "react-redux";

//IMGAES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg"
import gamepad from "../img/gamepad.svg"

//STAR IMAGES
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png"

const GameDetail = ({ pathID }) => {
    //Exit Detail
    const history = useHistory();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    };

    //GET STARS

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull}></img>)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

    //GET PLATFORM IMAGES
    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }

    //DATA
    const { screen, game, isLoading } = useSelector((state) => state.detail);

    return (
        <>
            {!isLoading && (
                <CardShadow onClick={exitDetailHandler} className="shadow">
                    <Detail>
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                                {getStars(game.rating)}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatform(data.platform.name)}
                                            alt={data.platform.name}
                                        />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={smallImage(game.background_image, 1280)} alt={game.background_image} />
                        </Media>
                        <Description>
                            <p>{game.description}</p>
                        </Description>
                        <div className="gallery">
                            {screen.data.results.map(screen => (
                                <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow: scroll;
    background-color: rgba(0,0,0, 0.5);
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }
`
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background-color: white;
    position: absolute;
    left: 10%;
    z-index: 10;
    color: black;
    img{
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`

const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`
export default GameDetail