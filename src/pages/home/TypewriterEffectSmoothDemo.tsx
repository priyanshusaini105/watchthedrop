"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Track",
      className: "text-black dark:text-black",
    },
    {
      text: "Prices",
      className: "text-black dark:text-black",
    },
    {
      text: "With",
      className: "text-black dark:text-black",
    },
    {
      text: "Our",
      className: "text-black dark:text-black",
    },
    {
      text: "Extension.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-gray-700 dark:text-gray-700 text-xs sm:text-base  ">
        The road to Ease starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col mt-6 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-blue-500 border dark:border-white border-transparent text-white text-sm">
          Activate Extension
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
        Get Extension
        </button>
      </div>
    </div>
  );
}
