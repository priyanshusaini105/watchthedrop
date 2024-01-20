import React from 'react'
import { DollarSign, Zap, Moon, Filter } from 'lucide-react'

function Features() {
    return (
        <div className="mx-auto max-w-7xl px-4 mt-44 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-black">
                Price Tracker
              </p>
            </div>
            <h2 className="mt-12 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Watch The Drop  helps you to track Prices
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
            Navigate the ever-changing landscape of digital products with ease as PriceGraph empowers you to track and analyze the price history 
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
          className="h-9 w-9 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          ></path>
        </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Secured Authentication</h3>
              <p className="mt-4 text-sm text-gray-600">
              Secured Authentication using next auth in which user register and login through 
credential and OAuth
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
          class="h-9 w-9 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
              <p className="mt-4 text-sm text-gray-600">
                very fast and responsive because we made it using latest Next js 14 and nodejs and future price prediction using RNN
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
          className="h-9 w-9 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Price Comparison</h3>
              <p className="mt-4 text-sm text-gray-600">
                user can compare the prices of similar products across different websites and in different categories
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
          className="h-9 w-9 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          ></path>
        </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Filter By Prices</h3>
              <p className="mt-4 text-sm text-gray-600">
                User can Filter the Product using prices in different e-commerce website
              </p>
            </div>
          </div>
        </div>
      )
}

export default Features




