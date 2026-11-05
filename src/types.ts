export interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: 'ok' | 'error';
    sources: NewsSource[];
}

export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsResponse {
    status: 'ok' | 'error';
    totalResults: number;
    articles: Article[];
}

export interface RequestOptions {
    [key: string]: string;
}
