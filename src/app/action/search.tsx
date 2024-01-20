"use server";

import { SearchResult } from "@/types";

export const searchResult = async (q: string) => {
  try {
    const url = new URL("https://www.googleapis.com/customsearch/v1");
    url.searchParams.append("key", "AIzaSyCArdW91vTSFTn_VY9kGWB33MAclJ2D1wk");
    url.searchParams.append("cx", "07ef0d9b7e3454b6b");
    url.searchParams.append("q", q ?? "");

    const response = await fetch(url.toString());
    const result = await response.json() as {items:SearchResult[]};

    // console.log(result)

    return result.items;
  } catch (error) {
    return [];
  }
};
