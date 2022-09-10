import React from 'react'
import BestSellersCard from './BestSellersCard'
import best from '../../assets/best.jpg'

const BestSellers = () => {

    const data = [
        {
            name: 'PRODUCT NAME', subName: 'PRODUCT NAME', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.', img: best
        },
        {
            name: 'PRODUCT NAME', subName: 'PRODUCT NAME', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.', img: best
        }
    ]


    return (
        <div className='bestSellers'>
            <h1>Best Sellers</h1>
            <div className='cardCont col'>
                {
                    data.map((val, i) => (

                        <BestSellersCard name={val.name} subName={val.subName} desc={val.desc} image={val.img} />

                    ))
                }
            </div>
        </div>
    )
}

export default BestSellers