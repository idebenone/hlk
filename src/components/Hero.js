import React from 'react'

import ig from '../assets/ig.png';
import tw from '../assets/tw.png';
import lkd from '../assets/lkd.png';


const Hero = (props) => {

    return (
        <div className='topSection'>
            <div className='navSection'>
                <div className='nav row center'>
                    <span className='logo'>HLK</span>
                    <div className='navItems row'>
                        <span >HOME</span>
                        <span onClick={() => props.sendRef('arrivals')} >NEW ARRIVALS</span>
                        <span >ABOUT</span>
                    </div>
                </div>
            </div>
            <div className='heroSection'>
                <div className='hero col'>
                    <div className='row'>
                        <div>
                            <p className='wel'>Welcome</p>
                            <h3>HL&nbsp;Kendhuli</h3>
                            <h1>SILK <br /> HOUSE</h1>
                        </div>
                        <div className='dividerV'></div>
                        <div className='col center prodBut'>
                            <p className='desc center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                                <br />
                                <br />
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                            <button onClick={() => props.sendRef('best')} >PRODUCTS</button>
                        </div>
                    </div>
                    <div className='row iconCont center'>
                        <img src={ig} alt='' />
                        <img src={tw} alt='' />
                        <img src={lkd} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero