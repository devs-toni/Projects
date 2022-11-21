import React from 'react'
import Footer from '../components/Footer';
import Address from '../router/Router';
import Header from '../components/Header';


const Layout = ({switchTheme}) => {

  return (
    <div>
        <Header switchTheme={switchTheme} />
        <Address />
        <Footer />
    </div>
  )
}

export default Layout