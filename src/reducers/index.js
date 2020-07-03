import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import currentReducer from './currentReducer'
import topRatedReducer from './topRatedReducer'

export default combineReducers({
    movie: movieReducer,
    current: currentReducer,
    topRated: topRatedReducer
})