import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="mx-auto max-w-7xl px-2 mt-24 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {Array.from({ length: 1 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleToggle(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                How does the our website prediction future Prices ?
                </span>
                {openIndex === i ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                  Our price prediction feature utilizes a state-of-the-art Recurrent Neural Network (RNN) model. This model analyzes historical price data and patterns to make accurate predictions about the future prices of various products. The RNN's advanced learning capabilities enable it to adapt to changing market conditions, providing users with valuable insights into potential price trends.
                  </p>
                </div>
              )}
            </div>
          ))}
          {Array.from({ length: 1 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleToggle(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                Can users compare prices across different websites and categories on our platform?
                </span>
                {openIndex === i ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                  Absolutely! Our platform empowers users to compare prices seamlessly across various e-commerce websites and different product categories. Whether you're looking for electronics, clothing, or any other product, our intuitive interface allows for efficient and comprehensive price comparison, ensuring you get the best deals across the board.
                  </p>
                </div>
              )}
            </div>
          ))}
          {Array.from({ length: 1 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleToggle(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                How does the product filtering functionality work based on prices and e-commerce websites?</span>
                {openIndex === i ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                  Our platform's product filtering feature enables users to refine their search based on specific price ranges and preferred e-commerce websites. Users can easily set filters to narrow down their choices, helping them find products that meet their budgetary constraints and preferences. This feature enhances the overall shopping experience by providing a personalized and efficient way to discover the best options available.
                  </p>
                </div>
              )}
            </div>
          ))}
          {Array.from({ length: 1 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => handleToggle(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                Can users track and receive alerts when a particular product's price hits a specified threshold?
                </span>
                {openIndex === i ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                  Yes, our platform includes a powerful price tracking and alert system. Users can track the prices of their favorite products, view historical pricing data, and set custom alerts for specific price points. Once the product's price reaches or falls below the defined threshold, users will receive timely alerts, ensuring they never miss out on the best deals.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="font-semibold text-blue-500 hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};
