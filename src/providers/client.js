import React from 'react'
import { Provider } from 'react-redux'
import App from 'containers/App'
import { BrowserRouter as Router } from 'react-router-dom'
import createStore from 'store'
import Routes from 'routes'

const isDevelop = /develop/.test(process.env.NODE_ENV)

const composer = (() => {
    if(isDevelop) return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

    return null
})()

const store = createStore(composer)

const Client = (props) => (
    <Provider store={store}>
        <Router>
            <App>{(values) => (<Routes />)}
            </App>
        </Router>
    </Provider>
)

export default Client
