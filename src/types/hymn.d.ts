type HymnVerses = {
  id: number;
  number: number;
  content: string;
  hymn_id: number;
};

type Hymn = {
  id: number;
  title: string;
  number: number;
  extra: string;
  chorus: string;
  language: string;
  verses: HymnVerses[];
};
