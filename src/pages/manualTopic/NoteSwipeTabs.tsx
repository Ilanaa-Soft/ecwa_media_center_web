import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";

import Notes from "./Notes";
import Note from "./Note";
import NoteEditor from "./NoteEditor";
import TabPanel from "../../components/TabPanel";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { TopicNote } from "../../types";
import a11yProps from "../../utils/getTabA11yProps";

type NoteSwipeTabsProps = {
  notes: TopicNote[];
  tabValue: number;
  loading: boolean;
  hasError: boolean;
  editNote: TopicNote | null;
  readNote: TopicNote | null;
  onTryAgain: () => void;
  onSave: (note: string) => void;
  onEdit: (note: TopicNote) => void;
  onRead: (note: TopicNote) => void;
  onTabChange: (newValue: number) => void;
};

const NoteSwipeTabs = (props: NoteSwipeTabsProps) => {
  const {
    notes,
    tabValue,
    editNote,
    readNote,
    loading,
    hasError,
    onRead,
    onEdit,
    onSave,
    onTabChange,
    onTryAgain,
  } = props;

  const isOnline = navigator.onLine;

  const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
    onTabChange(newValue);
  };

  return (
    <Box width="100%" height="100%">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="New Note" {...a11yProps("note", 0)} />
          <Tab label="Notes" {...a11yProps("note", 1)} />
          <Tab label="Note" {...a11yProps("note", 2)} />
        </Tabs>
      </Box>
      <TabPanel name="note" value={tabValue} index={0}>
        <NoteEditor note={editNote} onSave={onSave} />
      </TabPanel>
      <TabPanel name="note" value={tabValue} index={1}>
        {loading ? (
          <Loading text="Please wait while we load your notes" />
        ) : (
          <>
            {hasError && isOnline ? (
              <Error onTryAgain={onTryAgain} />
            ) : (
              <Notes onRead={onRead} notes={notes} />
            )}
          </>
        )}
      </TabPanel>
      <TabPanel name="note" value={tabValue} index={2}>
        <Note note={readNote} onEdit={onEdit} />
      </TabPanel>
    </Box>
  );
};

export default NoteSwipeTabs;
