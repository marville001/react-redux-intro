import { ADD_TODO } from "../types"


const initialState={
    count: 9
}
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COUNT":
            return { ...state, count: state.count+5 }
        default:
            return { ...state }
    }
}

export default countReducer;