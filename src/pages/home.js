import React, { createRef, Suspense, useEffect, useState } from 'react'
import BestSellers from '../components/BestSellers/BestSellers';

import Hero from '../components/Hero';
// import OtherProducts from '../components/OtherProducts/OtherProducts';
// import Contact from '../components/Contact';


const OtherProducts = React.lazy(() => import('../components/OtherProducts/OtherProducts'));
const Contact = React.lazy(() => import('../components/Contact'));

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
        // eslint-disable-next-line
    }, [val])

    return (
        <div>
            <Hero sendRef={setVal} />
            <Suspense>
                <BestSellers ref={best} fallback={<div><h1>Loading.......</h1></div>} />
                <OtherProducts ref={arrival} />
                <Contact />
            </Suspense>
        </div>
    )
}

export default Home