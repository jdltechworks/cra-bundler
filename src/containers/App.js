import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
const App = ({ children }) => (
    <React.Fragment>
        <Navbar className="container" />
            {children({ admin: 'admin'})}
        <Footer />
    </React.Fragment>
)

export default App
