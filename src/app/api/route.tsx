export async function GET(req: Request) {
    try {
        const url = new URL('https://www.googleapis.com/customsearch/v1');
        url.searchParams.append('key', 'AIzaSyCArdW91vTSFTn_VY9kGWB33MAclJ2D1wk');
        url.searchParams.append('cx', 'f0d9d837eefde47e9');
        url.searchParams.append('q', 'Iphone 15');

        const response = await fetch(url.toString());
        const result = await response.json(); 

        console.log(result)

        return Response.json(result);
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch search results');
    }
}
