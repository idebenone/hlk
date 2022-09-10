import React from 'react'

const OtherProductsCard = (props) => {
    return (
        <div className='otherProductsCard row'>
            <img className='prodImg' src={props.image} alt='' />
            <div className='col prodInfo'>
                <h2>{props.name}</h2>
                <span>{props.subName}</span>
            </div>
        </div>
    )
}

export default OtherProductsCard