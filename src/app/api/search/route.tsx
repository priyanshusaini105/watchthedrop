import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const q = req.nextUrl.searchParams.get('q');
        const url = new URL('https://www.googleapis.com/customsearch/v1');
        url.searchParams.append('key', 'AIzaSyCArdW91vTSFTn_VY9kGWB33MAclJ2D1wk');
        url.searchParams.append('cx', '07ef0d9b7e3454b6b');
        url.searchParams.append('q', q??'');

        const response = await fetch(url.toString());
        const result = await response.json(); 

        // console.log(result)

        return Response.json(result.items);
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch search results');
    }
}
