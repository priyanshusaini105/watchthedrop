"use client";
import { fetchProducts, sendChat, startBot } from "@/app/action/fetchProducts";
import ProductCard from "@/components/productcard/ProductCard";
import { ProductInfo } from "@/types";
import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

//import { sendMsgToOpenAI } from '../openaiApi';

const App = ({ params }) => {
  const msgEnd = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<ProductInfo>([]);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am Chariot AI, developed by WatchTheDrop.",
      isBot: true,
    },
  ]);

  useEffect(() => {
    if (!msgEnd.current) return;
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);

    const botMsg = await sendChat(text);

    setMessages([...messages, { text: botMsg, isBot: true }]);
  };

  useEffect(() => {
    // const products = fetchProducts(params.slug);
    // console.log(products);
    async function getProducts() {
      const product = await fetchProducts(params.slug);
      setProducts(product);
      const startMessage = await startBot(product);
      setMessages([...messages, { text: startMessage, isBot: true }]);
    }

    getProducts();
  }, []);

  // const handleClick = async ()=>{
  //     const res = await sendMsgToOpenAI(input);
  //     console.log(res);
  // }

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = async (
    e
  ) => {
    if (e.key === "Enter") await handleSend();
  };

  return (
    <div className="w-full  h-screen items-center justify-center flex bg-[#0C1525] text-white">
      <div className="right flex flex-col items-center w-[70%] justify-between bg-[#0C1525]">
        <div className="chats overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-[70rem] flex flex-col  items-start h-[calc(100vh-8rem)]">
          {messages.map((messages, i) => (
            <div
              key={i}
              className={
                messages.isBot
                  ? "generator ml-24 w-[90%] rounded-md m-3"
                  : "generator1 w-[90%] rounded-md m-3"
              }
            >
              <p className=" bg-[#1A2232] rounded-md p-3">{messages.text}</p>
            </div>
          ))}
          <div ref={msgEnd} />
          {/* <div className="generator1 w-[90%] rounded-md m-3">
            <p className='bg-[#1A2232] rounded-md p-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias eius culpa est ipsam neque, architecto rerum illo maxime
            </p>
          </div> */}
        </div>
        <div className="inputChat w-full ">
          <div className="inp flex w-[90%] border-[1px] overflow-hidden  rounded-xl ml-12 m-6 ">
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
            <button className="w-[6%] bg-blue-800" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {products.map((product: ProductInfo, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </div>
    </div>
  );
};

export default App;
