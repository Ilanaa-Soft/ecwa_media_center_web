export type HymnVerses = {
  id: number;
  number: number;
  content: string;
  hymn_id: number;
};

export type Hymn = {
  id: number;
  title: string;
  number: number;
  extra: string;
  chorus: string;
  language: string;
  verses: HymnVerses[];
};
