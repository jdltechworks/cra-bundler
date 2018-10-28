import createActionTypes, { createReducer } from '@jdltechworks/redux-utils'

export const initialState = {
    pussy: ''
}

export const types = new createActionTypes(
    'TOGGLE'
)
.prefix('ui')
.all(true)


export const reducer = createReducer({
    [types.TOGGLE](state, action) {
        return {
            ...state
        }
    }
}, initialState)
