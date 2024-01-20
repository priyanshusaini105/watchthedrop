"use client"
import Footer from "@/components/footer/Footer";
import React, { useEffect, useRef, useState } from "react";
import { ProductInfo } from "@/types";
import ProductList from "@/components/productlist/ProductList";



 function App() {

async function api() {
  const res = await fetch(`http://localhost:3002/search?q=iphone`);
  const data = await res.json();
  return data as { item: ProductInfo[] };
}

  const msgEnd = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text:
        "Hi, I am Chariot, a state-of-the-art language model developed by OpenAI. I'm des",
      isBot: true,
    },
  ]);

  const [productData, setProductData] = useState<{ item: ProductInfo[] }>({
    item: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await api();
      setProductData(data);
      console.log(data)
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  useEffect(() => {
    if (!msgEnd.current) return;
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
  };

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (e.key === "Enter") await handleSend();
  };

  return (
    <div className="w-full h-screen items-center justify-center flex bg-[#0C1525] text-white">
      <div className="right flex flex-col items-center w-[70%] justify-between bg-[#0C1525]">
        <div className="chats pt-24 overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-[70rem] flex flex-col items-start h-[calc(100vh-8rem)]">
          {messages.map((message, i) => (
            <div
              key={i}
              className={
                message.isBot
                  ? "generator ml-24 w-[90%] rounded-md m-3"
                  : "generator1 w-[90%] rounded-md m-3"
              }
            >
              <p className="bg-[#1A2232] rounded-md p-3">{message.text}</p>
            </div>
          ))}
          <div ref={msgEnd} />
        </div>
        <div className="inputChat w-full ">
          <div className="inp flex w-[90%] border-[1px] overflow-hidden rounded-xl ml-12 m-6 ">
            <input
              className="w-[88%] p-[10px] bg-transparent outline-none"
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Send messages"
              type="text"
            />
            <button className="w-[12%] bg-blue-500" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="product-list h-full w-1/3">
        <h1 className="mt-24 text-4xl font-medium ml-4">Products List</h1>
        {productData.item.map((data,i)=><ProductList product={data} key={i}/>)}
      </div>
    </div>
  );
}

export default App;
