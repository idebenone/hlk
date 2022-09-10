import React from 'react'

const BestSellersCard = (props) => {
    return (
        <div className='bestSellerCard row'>
            <img className='bestImage' src={props.image} alt='' />
            <div className='cardInfo col'>
                <h2>{props.name}</h2>
                <p className='cardSub'>{props.subName}</p>
                <p className='cardDesc'>{props.desc}</p>
            </div>
        </div>
    )
}

export default BestSellersCard