import React from 'react'

const Navbar = (props) => (
    <React.Fragment>
        <nav className="wrapper">
            <div className={props.className}>Navbar</div>
        </nav>
        <div className="navbar-menu"></div>
    </React.Fragment>
)

export default Navbar
