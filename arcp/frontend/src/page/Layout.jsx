import React from 'react'
import Footer from '../components/Footer';
import Address from '../router/Router';
import Header from '../components/Header';


const Layout = ( { switchTheme, isNavShow, setIsNavShow } ) => {

  return (
    <div>
        <Header switchTheme={switchTheme} isNavShow={isNavShow} setIsNavShow={setIsNavShow} />
        <Address />
        <Footer />
    </div>
  )
}

export default Layout