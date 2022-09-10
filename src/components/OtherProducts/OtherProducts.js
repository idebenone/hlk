import React from 'react'
import OtherProductsCard from './OtherProductsCard'

import prod1 from '../../assets/prod (1).jpg'
import prod2 from '../../assets/prod (2).jpg'
import prod3 from '../../assets/prod (3).jpg'
import prod4 from '../../assets/prod (4).jpg'

const OtherProducts = () => {

    const prods = [
        { name: 'PRODUCT NAME', image: prod1, subName: 'PRODUCT NAME' },
        { name: 'PRODUCT NAME', image: prod2, subName: 'PRODUCT NAME' },
        { name: 'PRODUCT NAME', image: prod3, subName: 'PRODUCT NAME' },
        { name: 'PRODUCT NAME', image: prod4, subName: 'PRODUCT NAME' }
    ]


    return (
        <div className='otherProductsSec'>
            <h1>OTHER PRODUCTS</h1>
            <div className='otherProducts row'>
                <div className='col otherProductsCont'>
                    {
                        prods.map((val, i) => (

                            <OtherProductsCard name={val.name} subName={val.subName} image={val.image} />
                        ))
                    }
                </div>
                <div className='otherProdDesc col'>
                    <h1>Product Name</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make
                        a type specimen book.Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.Lorem Ipsum
                        has been the industrys standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make.</p>
                </div>
            </div>
        </div>
    )
}

export default OtherProducts