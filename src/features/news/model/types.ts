export type News = {
  imgUrl: string;
  date: string;
  title: string;
  description: string;
  summary?: string;
  href: string;
  btnLabel: string;
  slug: string;
};

export type Article = {
  title: string;
  imgUrl: string;
  date: string;
  description: string;
  children: React.ReactNode;
};
