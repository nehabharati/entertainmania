import { NOW_PLAYING } from '../actions/types'

const initialState = {
    current: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case NOW_PLAYING:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state
    }
}