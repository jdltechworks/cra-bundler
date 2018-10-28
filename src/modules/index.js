import { combineReducers } from 'redux'
import { createModules } from '@jdltechworks/redux-utils'
import { reducer as form } from 'redux-form'

import * as ui from 'modules/ui'

const modules = {
    ui
}

/**
 * You can add reducers from external npm modules
 * @type {Object}
 */
const initialReducers = {
    form
}

const initialState = {}

/**
 *
 * @type {object}
 */
const bundled = createModules(modules, {
    initialInitialState: initialState,
    initialReducers
})

const reducers = combineReducers(bundled.reducers)

/**
 * Function to activate the generated bundle
 * @return {object} reducers, actions, inititalState
 */

const created_modules = () => {
    const { initialState } = bundled
    return {
        reducers,
        initialState
    }
}

export default created_modules()
