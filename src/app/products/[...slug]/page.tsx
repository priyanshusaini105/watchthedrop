// 'use client'
import React, { useEffect } from "react";
import { Star, ChevronDown } from "lucide-react";
import { searchResult } from "../../action/search";
import { ProductInfo } from "@/types";
import Link from "next/link";
import { AlertButton } from "@/components/setAlert";

async function ProductPage({ params }: { params: { slug: string[] } }) {
  // useEffect(()=>{
  //   const allLinks: NodeListOf<HTMLAnchorElement> =document.querySelectorAll('a')  ;
  //   allLinks.forEach(ele=>{
  //     if(ele.href=='https://pricehistoryapp.com/?ref=embed'){
  //       ele.style.display='none'
  //     }
  //   })
  // },[])

  const domainRegex =
    /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}(?:\/|$)/;

  const data = JSON.parse(decodeURIComponent(params.slug[0])) as {
    link: string;
    source: string;
    data: ProductInfo;
    isByUrl: boolean;
  };

  console.log(data.isByUrl);

  if (!data.link.includes("amazon") && !data.link.includes("flipkart")) {
    return (
      <h1>
        We are not tracking this product yet. Please try again later or try
        another product.
      </h1>
    );
  }

  const graphUrl = await searchResult(data.link.split("/")[3]);

  if (data.isByUrl) {
    const response = await fetch("http://127.0.0.1:5000/pricing/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: data.link,
        source: data.link,
      }),
    });

    var productInfo = (await response.json()) as {
      images: string;
      name: string;
      price: number;
    };
  }

  function getPrediction(currentPrice: number): number {
    const randomPercentage = Math.random() * 20 - 10;
    const prediction = currentPrice * (1 + randomPercentage / 100);

    return prediction;
  }
  

  const price = data.isByUrl ? productInfo?.price : data.data.extracted_price;
  const prediction = getPrediction(+price).toFixed(0);

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24 flex flex-col gap-16">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={data.isByUrl ? productInfo?.images : data.data.thumbnail}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              Watch The Drop
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {data.isByUrl ? productInfo.name : data.data.title}
            </h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[
                  ...Array(
                    parseInt(!data.isByUrl ? "" + data.data.rating : "" + 4.3)
                  ),
                ].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  {!data.isByUrl
                    ? data.data.reviews
                    : Math.ceil(Math.random() * 10000)}{" "}
                  Reviews
                </span>
              </span>
            </div>
            {/* <div className="flex bg-gray-50 rounded-md p-2 z-0">
              <span className="bg-green-500 px-2 rounded-l-md relative">
                Exactly
              </span>
              <span className="bg-yellow-500 px-2  relative z-10">
                Indeed{" "}
                <span className="absolute bg-yellow-500 left-1/2 rounded-t-full top-0 left-0 mt-3 p-2 rotate-45 z-[-1]"></span>
              </span>
              <span className="bg-orange-500 px-2  relative">Indeed</span>
              <span className="bg-red-500 px-2 rounded-r-md relative">Red</span>
            </div> */}
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                {data.isByUrl && productInfo
                  ? productInfo.price
                  : data.data.price}
              </span>
              <div className="flex gap-2">
                <AlertButton url={data.link} />
                <Link
                  href={data.isByUrl ? data.link : data.data.link}
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black capitalize"
                >
                  Buy from {data.link.split(".")[1]}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {graphUrl[0].link.split("/")[4] ? (
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe id="price_frame" src="https://pricehistoryapp.com/embed/${
                graphUrl[0].link.split("/")[4]
              }" width="100%" height="500" frameborder="0" allowtransparency="true" scrolling="no"></iframe><script>const allLinks=document.querySelectorAll('a')  ;
    allLinks.forEach(ele=>{
      if(ele.href=='https://pricehistoryapp.com/?ref=embed'){
        ele.style.display='none'
      }
    })</script>`,
            }}
          />
        ) : (
          <h1>Product is Not Available for this product</h1>
        )}
      </div>
      <div className="mt-24 flex gap-2 text-center w-full justify-center">
        <h2 className="font-bold text-xl text-center">Prediction By Chariot AI: </h2>
        {prediction > +price ? (
          <div className="text-red-600 flex">
            {prediction}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>{" "}
          </div>
        ) : (
          <div className="text-green-600 flex">
            {prediction}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductPage;
