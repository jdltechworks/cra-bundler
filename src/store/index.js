import { createStore, compose, applyMiddleware } from 'redux'

let middlewares = [
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
    //const history = setHistoryType(historyType, request)

    composeStore = create(
        applyMiddleware(...middlewares),
    )(createStore)

    const store = composeStore(reducers, initialState)

    return store
}
