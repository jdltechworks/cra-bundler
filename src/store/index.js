import createSagaMiddleware from 'redux-saga'
import { createStore, compose, applyMiddleware } from 'redux'

import modules from 'modules'
import rootSaga from 'modules/ui/sagas'

const { reducers, initialState } = modules

const sagaMiddleware = createSagaMiddleware()


let middlewares = [
  sagaMiddleware
]

const setComposer = (composer) => {

  if(composer) return composer

  return compose

}

/*
const setHistoryType = (historyType, request) => {

  if(request) return historyType(request.url)

  return historyType

}
*/

export default (composer, request) => {

    const create = setComposer(composer)

    const composeStore = create(
        applyMiddleware(...middlewares),
    )(createStore)

    const store = composeStore(reducers, initialState)
    sagaMiddleware.run(rootSaga)
    return store
}
