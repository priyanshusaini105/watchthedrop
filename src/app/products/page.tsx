"use client"
import React from 'react'
import { ProductInfo } from '@/types';
import ProductCard from '@/components/productcard/ProductCard';
 //import { useSearchParams } from 'next/navigation'

async function Products({searchParams}:{searchParams:{q:string}}) {
// const searchParams = useSearchParams();

const res = await fetch(`https://dropmytest.onrender.com/search?q=${searchParams.q}`);

const data = await res.json() as {item: ProductInfo[]};


  return (
    <div className='container mt-24 w-full items-center justify-center flex flex-wrap gap-24 '>
        {
            data.item.map((item) => {
                return (
                    <div className="post" key={item.product_id}>
                        <ProductCard product={item}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products
