import React from 'react'

const Overlay = (children) => (
    <React.Fragment>
        <div className="overlay">{children}</div>
        {children}
    </React.Fragment>
)


export default Overlay
