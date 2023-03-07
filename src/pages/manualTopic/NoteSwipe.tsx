import * as React from "react";
import { Box, SwipeableDrawer } from "@mui/material";

import NoteSwipeTabs from "./NoteSwipeTabs";
import NoteSwipeOpenButton from "./NoteSwipeOpenButton";
import NoteSwipeCloseButton from "./NoteSwipeCloseButton";
import { TopicNote } from "../../types";
import toastExpectedError from "../../utils/toastExpectedError";
import { saveNote, updateNote } from "../../services/manualsService";
import useNotesApi from "../../hooks/useNotesApi";

type NoteSwipeProps = {
  topicId: number;
};

const NoteSwipe = ({ topicId }: NoteSwipeProps) => {
  const [open, setIsOpen] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [editNote, setEditNote] = React.useState<TopicNote | null>(null);
  const [readNote, setReadNote] = React.useState<TopicNote | null>(null);
  const { notes, error, loading, request } = useNotesApi(topicId);

  const handleTryAgain = () => request();

  const handleToggle = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    if (open === false) setEditNote(null);

    setIsOpen(open);
  };

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
    if (newValue === 1) request();
  };

  const handleSave = async (newNote: string) => {
    const request = { note: newNote, sunday_school_topic_id: topicId };
    try {
      if (!editNote) await saveNote(request);
      else {
        await updateNote(request, editNote.id);
        setEditNote(null);
      }

      handleTabChange(1);
    } catch (ex) {
      toastExpectedError(ex);
    }
  };

  const handleReadNote = (note: TopicNote) => {
    setReadNote(note);
    handleTabChange(2);
  };

  const handleEditNote = (note: TopicNote) => {
    setEditNote(note);
    handleTabChange(0);
  };

  return (
    <Box>
      <NoteSwipeOpenButton onToggle={handleToggle} />
      <SwipeableDrawer
        open={open}
        anchor="bottom"
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
      >
        <Box height={450} role="presentation">
          <NoteSwipeTabs
            notes={notes}
            tabValue={tabValue}
            loading={loading}
            hasError={error}
            editNote={editNote}
            readNote={readNote}
            onTabChange={handleTabChange}
            onSave={handleSave}
            onRead={handleReadNote}
            onEdit={handleEditNote}
            onTryAgain={handleTryAgain}
          />
          <NoteSwipeCloseButton onToggle={handleToggle} />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default NoteSwipe;
