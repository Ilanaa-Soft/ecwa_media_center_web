type Manual = {
  id: number;
  name: string;
  language: string;
  year: number;
  sponsored: boolean;
  is_free: number;
  summary: string;
  paid: boolean;
  topics: ManualTopic[];
};

type ManualTopic = {
  id: number;
  category: string;
  topic: string;
  number: number;
  bible_text: string;
  aim: string;
  introduction: string;
  content: string;
  type: string;
  manual_id: number;
};

type ManualPayInfo = {
  reference: string;
  amount: number;
  copy: number;
  manual_id: number;
} | null;
