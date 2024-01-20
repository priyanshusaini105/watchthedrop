"use client"
import React, { FC } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ProductInfo } from '@/types'

type Props ={
  product:ProductInfo
}

const ProductList:FC<Props>=({product})=> {

  const urlFeild=product.link.split('/');

  const data ={
    data:product,
    source:urlFeild[3],
    link:product.link
  }
  

    return (
        <div className="w-[300px] rounded-md border">
          <div className="product flex border">
      <div className="img border w-1/3"><img
            src={product.thumbnail}
            alt="Laptop"
            className="h-full w-full rounded-t-md object-cover"
          /></div>
      <div className="text border w-2/3"><h1 className="inline-flex items-center text-lg font-semibold">
              {product.title} 
            </h1></div>
     </div>
        </div>
      )
}

export default ProductList
