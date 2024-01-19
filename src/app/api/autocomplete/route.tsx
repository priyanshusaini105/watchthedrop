import { ProductSearchResult, SearchResult } from "@/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get("q");
    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=chrome&q=${q}`
    );
    const data = (await response.json()) as string[][];
    return Response.json(data);
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to fetch search results");
  }
}
