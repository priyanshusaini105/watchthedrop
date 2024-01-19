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
};