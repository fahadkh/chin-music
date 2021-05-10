export interface Article {
  artist?: ArticleArtist;
  author: ArticleAuthor;
  caption?: string;
  content: string;
  created: number;
  id: string;
  image?: string;
  subTitle?: string;
  title: string;
  type: string;
}

export interface BrowseArticle {
  artist?: ArticleArtist;
  author: ArticleAuthor;
  caption?: string;
  created: number;
  id: string;
  image?: string;
  title: string;
  type: string;
}

export interface FeaturedArticle {
  author: string;
  caption: string;
  created: number;
  id: string;
  image?: string;
  title: string;
  type: string;
}

export interface ArticleArtist {
  id: string;
  name: string;
}

export interface ArticleAuthor {
  id: string;
  name: string;
}
