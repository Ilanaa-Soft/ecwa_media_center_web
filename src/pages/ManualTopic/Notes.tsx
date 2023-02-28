import { Box } from "@mui/material";

import HTMLContent from "../../components/HTMLContent";
import { TopicNote } from "../../types";

type NotesProps = {
  notes: TopicNote[];
  onRead: (note: TopicNote) => void;
};

const Notes = ({ notes: unSortNotes, onRead }: NotesProps) => {
  const notes = unSortNotes.sort((a, b) => b.id - a.id);

  return (
    <Box>
      {!notes.length ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          You currently do not have any note! Click on "New Note" above to
          create one
        </Box>
      ) : (
        <>
          {notes.map((note, i) => (
            <Box
              py={1}
              key={note.id}
              sx={{ cursor: "pointer" }}
              borderTop="1px solid rgba(0, 0, 0, .15)"
              onClick={() => onRead(note)}
              borderBottom={
                notes.length - 1 === i ? "1px solid rgba(0, 0, 0, .15)" : ""
              }
            >
              <HTMLContent html={note.note} truncate={true} />
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default Notes;
