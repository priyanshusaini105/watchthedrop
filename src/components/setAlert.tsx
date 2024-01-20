"use client";
import React, { useEffect } from "react";

export function AlertButton({ url }: { url: string }) {
  const setAlert = async () => {
    // const res = await fetch("http://127.0.0.1:5000/tracker/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     url,
    //   }),
    // });

    alert("Alert set successfully")
  };



  return (
    <button
      type="button"
      onClick={setAlert}
      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Set Alert
    </button>
  );
}
