export type ArticleSectionData = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ArticleData = {
  slug: string;
  title: string;
  date: string;
  imgUrl: string;
  sidebar: string[];
  sections: ArticleSectionData[];
};
