type ImageUrls = {
  "32x32": string;
  "74x74": string;
  "100x100": string;
};

type IncomeStream = {
  id: number;
  name: string;
};

export type Industry = {
  id: number;
  name: string;
};

export type Item = {
  uuid: string;
  images: ImageUrls;
  income_streams: IncomeStream[];
  industries: Industry[];
  name: string;
  tagline: string;
  total_jobs_available: number;
};

export type Data = {
  items: Item[];
  total: number;
};
