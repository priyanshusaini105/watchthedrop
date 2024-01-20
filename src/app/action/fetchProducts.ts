"use server";
import { ProductInfo } from "@/types";

export async function fetchProducts(query: string) {
  const res = await fetch(`http://localhost:3002/search?q=${query}`);

  const data = (await res.json()) as { item: ProductInfo[] };
  return data.item;
}

export const startBot = async (data: ProductInfo[]) => {
  const res = await fetch(`http://127.0.0.1:5000/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

export const sendChat = async (chat: string) => {
  const res = await fetch("http://127.0.0.1:5000/chat/" + chat, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json();

    return result;
};
