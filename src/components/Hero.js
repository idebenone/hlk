import React from 'react'
import Header from './Header'

const Hero = () => {
    return (
        <div className='topSection'>
            <div className='navSection'>
                <Header />
            </div>
            <div className='heroSection'>
                <div className='hero row'>
                    <div>
                        <p className='wel'>Welcome</p>
                        <h3>HL&nbsp;Kendhuli</h3>
                        <h1>SILK <br /> HOUSE</h1>
                    </div>
                    <div className='dividerV'></div>
                    <p className='desc center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero