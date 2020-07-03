import axios from 'axios'
import { GET_UPCOMING, MOVIES_LOADING, NOW_PLAYING, TOP_RATED } from './types'

const API_KEY = "28bedf0a3895de76d057107becfb1c9b"
const baseURL = "https://api.themoviedb.org/3/"

export const getUpcoming = () => dispatch => {
    dispatch(setMoviesLoading());
    let url = "".concat(baseURL, 'movie/upcoming?api_key=', API_KEY, '&language=en-US&page=1');
    axios.get(url)
        .then(res =>
            dispatch({
                type: GET_UPCOMING,
                payload: res.data.results
            }))
}

export const getNowPlaying = () => dispatch => {
    let url = "".concat(baseURL, 'movie/now_playing?api_key=', API_KEY, '&language=en-US&page=1');
    axios.get(url)
        .then(res =>
            dispatch({
                type: NOW_PLAYING,
                payload: res.data.results
            }))
}

export const getTopRated = () => dispatch => {
    let url = "".concat(baseURL, 'movie/top_rated?api_key=', API_KEY, '&language=en-US&page=1');
    axios.get(url)
        .then(res =>
            dispatch({
                type: TOP_RATED,
                payload: res.data.results
            }))
}


export const setMoviesLoading = () => {
    return {
        type: MOVIES_LOADING
    }
}
