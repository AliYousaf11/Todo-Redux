import {createStore} from "redux"
import {rootReducer} from "./Reducers/Combine"

export const store = createStore(rootReducer);