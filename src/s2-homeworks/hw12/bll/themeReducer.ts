import {combineReducers, compose,  legacy_createStore} from "redux";
import { legacy_createStore as createStore} from 'redux'

const initState:InitStateType = {
    themeId:1,
}
export type InitStateType = {
    themeId: number
}
export type ActionType = ReturnType<typeof changeThemeIdAC>
export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state,themeId:action.id}

        default:
            return state

    }
}
const rootReducer = combineReducers({
    theme:themeReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

// непосредственно создаём store
export const store = legacy_createStore(rootReducer);


export const changeThemeIdAC = (id: number) => ({ type: 'SET_THEME_ID', id }) as const// fix any
