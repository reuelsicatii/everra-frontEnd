import React from 'react'
import Header from './Components/Header';
import Banner from './Components/Banner';
import FeaturedListing from './Components/FeaturedListing';
import Services from './Components/Services';
import PrincipalBroker from './Components/PrincipalBroker';
import Footer from './Components/Footer';


function Home() {

    return (
        <div>
            <Header />
            <Banner />
            <FeaturedListing />
            <Services />
            <PrincipalBroker />
            <Footer />
        </div>
    )
}

export default Home
