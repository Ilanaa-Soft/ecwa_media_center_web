import { Box, IconButton } from "@mui/material";
import { EditRounded } from "@mui/icons-material";

import HTMLContent from "../../components/HTMLContent";
import { TopicNote } from "../../types";

type NoteProps = {
  note: TopicNote | null;
  onEdit: (note: TopicNote) => void;
};

const Note = ({ note, onEdit }: NoteProps) => {

  return (
    <>
      {!note ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          No note selected! Click on "Notes" above and choose a note you will
          like to read
        </Box>
      ) : (
        <Box position="relative" pt={2}>
          <Box>
            <HTMLContent html={note.note} />
          </Box>
          <Box>
            <IconButton
              sx={{
                height: "48px",
                width: "48px",
                position: "absolute",
                top: "-24px",
                right: "-18px",
              }}
              onClick={() => onEdit(note)}
            >
              <EditRounded sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Note;
