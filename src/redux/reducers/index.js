import { combineReducers } from "redux";
import countReducer from './countReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    counter: countReducer
})

export default rootReducer;