import React, { FC } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ProductInfo } from '@/types'

type Props ={
  product:ProductInfo
}

const ProductCard:FC<Props>=({product})=> {

  const urlFeild=product.link.split('/');

  const data ={
    data:product,
    source:urlFeild[3],
    link:product.link
  }
  

    return (
        <div className="w-[300px] rounded-md border">
          <img
            src={product.thumbnail}
            alt="Laptop"
            className="h-full w-full rounded-t-md object-cover"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {product.title} 
            </h1>
            {/* <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p> */}
            <h1>{product.price}</h1>
            <div className="mt-4 ">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              <Link href={product.link}>{product.source}</Link>
              </span>
              <span className="mb-2 ml-12 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                <Link href={product.comparison_link}>Compare</Link>
              </span>
            </div>
            <Link href={`/products/${encodeURIComponent(JSON.stringify(data))}`}>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" >
                Track Prices
            </button>
            </Link>
          </div>
        </div>
      )
}

export default ProductCard
