import {createStore,applyMiddleware } from "redux"
import { contactReducer } from "./contactReducer"
import thunk from "redux-thunk"
export const store=createStore(contactReducer,applyMiddleware(thunk))