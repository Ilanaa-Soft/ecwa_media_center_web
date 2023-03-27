export type Manual = {
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

export type ManualTopic = {
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

export type UserManual = {
  id: number;
  user_id: number;
  manual_id: number;
  copy: number;
  created_at: string;
  updated_at: string;
};

export type ManualPayInfo = {
  reference: string;
  amount: number;
  copy: number;
  manual_id: number;
};

export type SponsorManual = {
  emails: string[];
};

export type Sponsors = {
  assigned_to: string;
  claimed: number;
  created_at: string;
  from_user_id: number;
  id: number;
  reference: string;
  reference_id: number;
  updated_at: string;
};

export type TopicNote = {
  id: number;
  note: string;
  sunday_school_topic_id: number;
  user_id: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

export type TopicNoteUpdate = {
  sunday_school_topic_id: number;
  note: string;
};
