import React, { forwardRef } from 'react'
import BestSellersCard from './BestSellersCard'
import best from '../../assets/best.jpg'

const data = [
    {
        name: 'PRODUCT NAME', subName: 'PRODUCT NAME', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.', img: best
    },
    {
        name: 'PRODUCT NAME', subName: 'PRODUCT NAME', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.', img: best
    },
    {
        name: 'PRODUCT NAME', subName: 'PRODUCT NAME', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.', img: best
    }
]
const BestSellers = forwardRef((props, ref) => (

    <div ref={ref} className='bestSellers center col'>
        <h1>BEST SELLERS.</h1>
        <div className='cardCont row'>
            {
                data.map((val, i) => (

                    <BestSellersCard name={val.name} subName={val.subName} desc={val.desc} image={val.img} />

                ))
            }
        </div>
    </div>
))

export default BestSellers