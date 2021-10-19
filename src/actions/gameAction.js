import axios from "axios";
import { popularGamesURL, upcomintGamesURL, newGamesURL, searchedGameURL } from "../api";
//Action Creator

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomintGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedGames = await axios.get(searchedGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGames.data.results,
        }
    })
}