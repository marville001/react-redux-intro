import { ADD_VALUE, MINUS_VALUE, TIMES_VALUE,RESET_VALUE } from '../types'

export const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ADD_VALUE:
            return { ...state, count: state.count + action.count };
        case TIMES_VALUE:
            return { ...state, count: state.count * action.count };
        case MINUS_VALUE:
            return { ...state, count: state.count - action.count };
        case RESET_VALUE:
            return { ...state, count: state.count * action.count };
        default:
            return state;
    }
}