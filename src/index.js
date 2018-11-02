import 'flexboxgrid'
import 'assets/index.scss'
import React from 'react'
import { render } from 'react-dom'

import ClientContainer from 'providers/client'

import * as serviceWorker from './serviceWorker'

const app = document.getElementById('app')

let props = {}

const initialProps = () => {
    for(var i in app.dataset) {
        props[i] = app.dataset[i]
        //clear dataset
        delete app.dataset[i]
    }
}

initialProps()


render(<ClientContainer />, app)

export default () => console.log('pota')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
