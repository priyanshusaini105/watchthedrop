'use client';
import React, { useEffect, useRef, useState } from 'react'

//import { sendMsgToOpenAI } from '../openaiApi';

const App = () => {

  const msgEnd = useRef<HTMLDivElement>(null)


  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
    text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI. I'm des",
    isBot: true,
    }
    ]);

    useEffect(()=>{
      if(!msgEnd.current) return;
      msgEnd.current.scrollIntoView();
    },[messages])

    const handleSend = async () => {
      if(input.trim() === '') return;
      const text = input;
      setInput('');
      setMessages([
        ...messages,
        {text,isBot:false}
      ])
  }

  // const handleClick = async ()=>{
  //     const res = await sendMsgToOpenAI(input);
  //     console.log(res);
  // }

  const handleEnter = async (e:KeyboardEvent) => {
    if (e.key == 'Enter') await handleSend();
    }

  return (
    <div className="w-full  h-screen items-center justify-center flex bg-[#0C1525] text-white">

      <div className="right flex flex-col items-center w-[70%] justify-between bg-[#0C1525]">
        <div className="chats overflow-hidden overflow-y-scroll scroll-smooth w-full max-w-[70rem] flex flex-col  items-start h-[calc(100vh-8rem)]">
          {messages.map((messages,i)=>
            <div key={i} className={messages.isBot?"generator ml-24 w-[90%] rounded-md m-3":"generator1 w-[90%] rounded-md m-3"}>
              <p className=" bg-[#1A2232] rounded-md p-3">
                {messages.text}
              </p>
            </div>
          )}
          <div ref={msgEnd}/>
          {/* <div className="generator1 w-[90%] rounded-md m-3">
            <p className='bg-[#1A2232] rounded-md p-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias eius culpa est ipsam neque, architecto rerum illo maxime
            </p>
          </div> */}
        </div>
        <div className="inputChat w-full ">
          <div className="inp flex w-[90%] border-[1px] overflow-hidden  rounded-xl ml-12 m-6 ">
            <input className='w-[88%] p-[10px] bg-transparent outline-none' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}} placeholder='Send messages' type="text" />
            <button className='w-[6%] bg-blue-800' onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App