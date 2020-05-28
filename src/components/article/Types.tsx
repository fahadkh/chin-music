export interface Article {
  id: string;
  title: string;
  subTitle?: string;
  artist?: ArticleArtist;
  type: string;
  author: ArticleAuthor;
  caption?: string;
  content: string;
  created: number;
  image?: string;
}

export interface BrowseArticle {
  id: string;
  title: string;
  artist?: ArticleArtist;
  type: string;
  author: ArticleAuthor;
  caption?: string;
  created: number;
  image?: string;
}

export interface FeaturedArticle {
  id: string;
  title: string;
  type: string;
  author: string;
  caption: string;
  created: number;
  image?: string;
}

export interface ArticleArtist {
  id: string;
  name: string;
}

export interface ArticleAuthor {
  id: string;
  name: string;
}
