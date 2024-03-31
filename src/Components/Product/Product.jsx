import React, { Fragment } from 'react'
import ZindexCard from './ZindexCard'
import ProductImg from "../../assets/files/product.png";

const Product = () => {
    let data = [
        {
            image:ProductImg,
            title:"Access Floors"
        },
        {
            image:ProductImg,
            title:"Access Floors"
        },
        {
            image:ProductImg,
            title:"Access Floors"
        },
        {
            image:ProductImg,
            title:"Access Floors"
        },
        {
            image:ProductImg,
            title:"Access Floors"
        },
        {
            image:ProductImg,
            title:"Access Floors"
        },
    ]
  return (
    <Fragment>
        <div className='py-10'>
        <div className='sathoshibold text-[52px] text-[#101010] flex items-center justify-center w-[100%]'>Our Products</div>
        <ZindexCard data={data}/>
        </div>
    </Fragment>
  )
}

export default Product