export type SearchResult = {
  title: string;
  link: string;
  snippet: string;
  image: string;
};

export type ProductSearch = {
    title: string;
    price: string;
    link: string;
    image: string;
    snippet: string;
};

export type ProductSearchResult = {
    query: string;
    result: ProductSearch[];
}

export type ProductInfo = {
  position: number;
  title: string;
  link: string;
  product_link: string;
  product_id: string;
  serpapi_product_api: string;
  source: string;
  price: string;
  extracted_price: number;
  old_price: string;
  extracted_old_price: number;
  extensions: string[];
  thumbnail: string;
  tag: string;
  delivery: string;
  comparison_link:string,
  reviews: number;
  rating: number;
};

export type SearchResult = {
  kind: 'customsearch#result';
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: {
      src: string;
      width: string;
      height: string;
    }[];
    metatags: {
      "al:android:url": string;
      "og:image": string;
      "theme-color": string;
      viewport: string;
      "og:title": string;
      "al:ios:url": string;
      "og:url": string;
    }[];
    cse_image: {
      src: string;
    }[];
  };
};
