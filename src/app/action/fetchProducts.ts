'use server'
import { ProductInfo } from "@/types";

export async function fetchProducts(query: string) {
  const res = await fetch(
    `https://dropmytest.onrender.com/search?q=${query}`
  );

  const data = (await res.json()) as { item: ProductInfo[] };
  return data.item;
}
