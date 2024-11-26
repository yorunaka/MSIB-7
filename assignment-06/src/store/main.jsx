import { createStore } from "redux";
import { moviesReducer } from "./reducers/reducers"

const store = createStore(moviesReducer)

export default store
