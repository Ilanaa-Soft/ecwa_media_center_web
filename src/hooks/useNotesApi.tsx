import * as React from "react";

import { getNotes } from "../services/manualsService";
import { TopicNote } from "../types";

const useNotesApi = (id: number) => {
  const [notes, setNotes] = React.useState<TopicNote[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const request = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await getNotes(id);
      setNotes(data);
    } catch (ex) {
      setError(true);
    }
    setLoading(false);
  };

  return { notes, loading, error, request };
};

export default useNotesApi;
