"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import Features from "@/components/features/Features";
import Extension from "@/components/extension/Extension";
import { Faq } from "@/components/faq/Faq";
import { TypewriterEffectSmoothDemo } from "@/pages/home/TypewriterEffectSmoothDemo";
import Image from "next/image";
import Footer from "@/components/footer/Footer";


function Home() {
  const [input, setInput] = useState("");
  const [isLink, setIsLink] = useState(false);

  

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const isInputLink = urlRegex.test(input);

    // Set the flag based on whether a link is detected
    setIsLink(isInputLink);
    // Redirect to the search page when the form is submitted
    window.location.href = `/products?q=${input}`;
  };


  useEffect(() => {
    const fetchSuggestions = async () => {
      try {

        const url = `/api/autocomplete?q=${input}`;

        const response = await fetch(url);
        const data = await response.json();
        setSuggestions(data[1]);
      } catch (err) {
        console.log(err)
      }
    };

    fetchSuggestions();
  }, [input]);

  return (
    <div className="home flex flex-col  mt-[-30px] ">
      <div className=" top-2 left-3 absolute">
      <Image
          src="/whitelogo.png"
          alt="Description of your image"
          width="100"
          height="500"
        />
        </div>
      <section className="pb-10">
        <Image
          src="/backgroundimg.png"
          alt="Description of your image"
          width="1600"
          height="500"
        />

        <div className="mx-auto absolute top-60 ml-[26rem]  max-w-7xl z-30 px-8 sm:px-6 lg:px-8">
          <div className="mx-auto w-full text-center md:max-w-2xl">
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Introducing Watch the drop
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white leading-relaxed text-gray-600">
              Your go-to destination for unraveling the digital marketplace. Navigate the ever-changing landscape of digital products with ease as PriceGraph empowers you to track and analyze the price history of your favorite items
            </p>
          </div>
          <form onSubmit={handleSearch} method="POST" className="mx-auto mt-16 max-w-xl">
            <div className="flex flex-wrap  items-center sm:flex-row sm:justify-center">
              <div className="flex  w-[1000px] items-center space-x-2 relative">
                <input
                  className="flex h-12 w-[350px] sm:w-[750px] mt-16 rounded-3xl  bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 border border-gray-500 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="text"
                  placeholder="eg. Apple, Nike, etc."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  />
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-3 mt-16 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                  <Link href={`/products?q=${input}`}>Search</Link>
                </button>
              </div>
              <div className="w-[75%]  absolute top-[36vh] rounded-md">
                {
                  suggestions.map((suggestion, i) => {
                    return (
                      <div key={i} className="z-10 flex  w-full bg-white   ">
                        <Link href={`/products?q=${suggestion}`}>
                          <div className="py-3  w-full ml-12 hover:bg-gray-100 cursor-pointer">
                            {suggestion}
                          </div>
                        </Link>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </form>
                </div>
          <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
            <Lock className="h-4 w-4 text-gray-600" />
            <span className="ml-2 text-sm text-gray-600">
              Your data is complely secured with us. We don&apos;t share with
              anyone.
            </span>
          </div>
      </section>
      <Features />
      <Faq />
      <TypewriterEffectSmoothDemo />
      {/* <Extension /> */}
      <Footer/>
    </div>
  );
}

export default Home;
