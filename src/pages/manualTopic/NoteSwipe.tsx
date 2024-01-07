import * as React from "react";
import { Box, SwipeableDrawer } from "@mui/material";

import NoteSwipeTabs from "./NoteSwipeTabs";
import NoteSwipeOpenButton from "./NoteSwipeOpenButton";
import NoteSwipeCloseButton from "./NoteSwipeCloseButton";
import useNotesApi from "../../hooks/useNotesApi";
import useNetworkInfo from "../../hooks/useNetworkInfo";
import { saveNote, updateNote } from "../../services/manualsService";
import toastExpectedError from "../../utils/toastExpectedError";
import toastOfflineInfo from "../../utils/toastOfflineInfo";
import { TopicNote } from "../../types";

type NoteSwipeProps = {
  topicId: number;
};

const NoteSwipe = ({ topicId }: NoteSwipeProps) => {
  const isOnline = useNetworkInfo();
  const [open, setIsOpen] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [editNote, setEditNote] = React.useState<TopicNote | null>(null);
  const [readNote, setReadNote] = React.useState<TopicNote | null>(null);
  const { notes, error, loading, request } = useNotesApi(topicId);

  const handleToggle = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    )
      return;

    if (open === false) setEditNote(null);

    setIsOpen(open);
  };

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
    if (newValue === 1 && isOnline) request();
  };

  const handleSave = async (note: string) => {
    if (!isOnline) return toastOfflineInfo();

    try {
      const request = { note, sunday_school_topic_id: topicId };
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

  const handleTryAgain = () => request();

  return (
    <Box>
      <NoteSwipeOpenButton onToggle={handleToggle} />
      <SwipeableDrawer
        open={open}
        anchor="bottom"
        onClose={handleToggle(false)}
        onOpen={handleToggle(true)}
      >
        <Box role="presentation" sx={{ height: { xs: 350, md: 450 } }}>
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
