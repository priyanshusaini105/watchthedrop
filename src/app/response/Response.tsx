"use client"
import { ProductInfo } from "@/types";
import ProductList from "@/components/productlist/ProductList";
import React from 'react';

async function response() {
  const res = await fetch(`https://dropmytest.onrender.com/search?q=iphone`);
  const data = await res.json() as {item: ProductInfo[]};

  return (
    <div>
      {data.item.map((item) => (
        <div className="post" key={item.product_id}>
          <ProductList product={item} />
        </div>
      ))}
    </div>
  );
}

export default response;
