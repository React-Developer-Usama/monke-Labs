import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const Index = ({ children }) => {
    return (
        <>
            <Header />
            <NavBar />
            <div className='' >{children}</div>
            <Footer />
        </>
    )
}

export default Index