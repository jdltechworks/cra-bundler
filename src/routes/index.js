import React from 'react'
import Sample from 'containers/Sample'
import { Route, Switch } from 'react-router-dom'
import AnotherSample from 'containers/AnotherSample'

const routes = (props) => (
    <Switch>
        <Route exact path="/" component={Sample} />
        <Route exact path="/another" component={AnotherSample} />
    </Switch>
)

export default routes
