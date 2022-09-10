import React from 'react'
import BestSellers from '../components/BestSellers/BestSellers';

import Hero from '../components/Hero';
import OtherProducts from '../components/OtherProducts/OtherProducts';
import Contact from '../components/Contact';
// import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <BestSellers />
            <OtherProducts />
            <Contact />
            {/* <Footer /> */}
        </div>
    )
}

export default Home