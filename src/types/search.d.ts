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