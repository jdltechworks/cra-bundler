import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'modules/ui/Toggler/actions'

const Toggler = ({
    toggler,
    clickHandler,
    children
}) => children({...toggler, clickHandler})

export default connect(({ ui }) => ({
    toggler
}), {...actions})
