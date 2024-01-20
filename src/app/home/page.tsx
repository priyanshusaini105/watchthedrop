"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
import Features from "@/components/features/Features";
import Extension from "@/components/extension/Extension";
import { Faq } from "@/components/faq/Faq";
import { TypewriterEffectSmoothDemo } from "@/pages/home/TypewriterEffectSmoothDemo";
import Image from "next/image";


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
      <div className=" top-8 left-3 absolute">
      <Image
          src="/LOGO (2).png"
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
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-7xl">
              Explore our web
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              nesciunt eos facilis debitis voluptas iure consectetur odit fugit
              voluptate recusandae?
            </p>
          </div>
          <form onSubmit={handleSearch} method="POST" className="mx-auto mt-16 max-w-xl">
            <div className="flex flex-wrap  items-center sm:flex-row sm:justify-center">
              <div className="flex w-full max-w-sm items-center space-x-2 relative">
                <input
                  className="flex h-10 w-[150vw] rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="text"
                  placeholder="eg. Apple, Nike, etc."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <Link href={`/products?q=${input}`}>Search</Link>
                </button>
              </div>
              <div className="w-[40%]  absolute top-[36vh] border-2 rounded-md">
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
          <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
            <Lock className="h-4 w-4 text-gray-600" />
            <span className="ml-2 text-sm text-gray-600">
              Your data is complely secured with us. We don&apos;t share with
              anyone.
            </span>
          </div>
        </div>
      </section>
      <Features />
      <Faq />
      <TypewriterEffectSmoothDemo />
      {/* <Extension /> */}
    </div>
  );
}

export default Home;
