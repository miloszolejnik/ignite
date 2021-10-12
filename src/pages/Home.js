import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gameAction';

//Compotnents
import Game from "../componenst/Game";
import GameDetail from "../componenst/GameDetail"

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {

    //Get the current location
    const location = useLocation();
    const pathID = location.pathname.split("/")[2];

    //Exit Detail
    const history = useHistory();
    useEffect(() => {
        if (history.location.pathname === "/") {
            return (document.body.style.overflow = "auto");
        }
    }, pathID);

    //Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    //Get that data back
    const { popular, newGames, upcoming } = useSelector(state => state.games);

    return (
        <GameList>
            {pathID && <GameDetail />}
            <h2>Upcoming Game</h2>
            <Games>
                {upcoming.map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                        id={game.id}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>Popular Game</h2>
            <Games>
                {popular.map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                        id={game.id}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>New Game</h2>
            <Games>
                {newGames.map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                        id={game.id}
                        key={game.id}
                    />
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`
export default Home;