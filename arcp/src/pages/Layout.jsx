import React from 'react'
import Footer from '../components/main/Footer';
import Address from '../address/Address';
import Header from '../components/main//Header';


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