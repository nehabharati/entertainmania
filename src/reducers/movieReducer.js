import { GET_UPCOMING, MOVIES_LOADING } from '../actions/types'

const initialState = {
    movies: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_UPCOMING:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case MOVIES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}