import { ProductSearchResult, SearchResult } from "@/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const url = new URL('https://www.googleapis.com/customsearch/v1');

    // url.searchParams.append('key', 'AIzaSyCArdW91vTSFTn_VY9kGWB33MAclJ2D1wk');
    // url.searchParams.append('cx', 'f0d9d837eefde47e9');
    // url.searchParams.append('q', 'Iphone 15');

    // const response = await fetch(url.toString());
    // const result = await response.json();

    const searchParams = req.nextUrl.searchParams;

    const query = searchParams.get("q");

    if (!query) {
      return new Response("Missing query", { status: 400 });
    }

    const url = new URL('https://www.googleapis.com/customsearch/v1');

    url.searchParams.append('key', 'AIzaSyCArdW91vTSFTn_VY9kGWB33MAclJ2D1wk');
    url.searchParams.append('cx', 'f0d9d837eefde47e9');
    url.searchParams.append('q', query);

    const response = await fetch(url.toString());
    const result = await response.json();

    const qItems = result.items as SearchResult[];

    const products:ProductSearchResult[]  = qItems.map((item) => {
        return {
            title: item.title,
            link: item.link,
            snippet: item.snippet,
            image: item.
        }
    })

    const productResult =  {
        items: products,
        query
    }



    return Response.json(productResult);
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch search results");
  }
}