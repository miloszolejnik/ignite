import axios from "axios";
import { popularGamesURL, upcomintGamesURL, newGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomintGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    console.log(upcomingGamesData.data.results)
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
        }
    })
}