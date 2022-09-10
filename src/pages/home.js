import React, { createRef, useEffect, useState } from 'react'
import BestSellers from '../components/BestSellers/BestSellers';

import Hero from '../components/Hero';
import OtherProducts from '../components/OtherProducts/OtherProducts';
import Contact from '../components/Contact';



const Home = () => {
    const [val, setVal] = useState('');

    const arrival = createRef(null)
    const best = createRef(null)

    useEffect(() => {
        if (val === 'arrivals') {
            arrival.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (val === 'best') {
            best.current?.scrollIntoView({ behavior: 'smooth' });
        }
        setVal('')
    })

    return (
        <div>
            <Hero sendRef={setVal} />
            <BestSellers ref={best} />
            <OtherProducts ref={arrival} />
            <Contact />
        </div>
    )
}

export default Home