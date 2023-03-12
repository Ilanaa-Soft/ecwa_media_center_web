import * as React from "react";
import MUIRichTextEditor from "mui-rte";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

import { TopicNote } from "../../types";
import parseHtmlToRawDraftContentState from "../../utils/parseHtmlToRawDraftContentState";

type NotesEditorprops = {
  note: TopicNote | null;
  onSave: (note: string) => void;
};

const NotesEditor = ({ onSave, note }: NotesEditorprops) => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const defaultValue = React.useMemo(
    () => parseHtmlToRawDraftContentState(note?.note),
    [note]
  );

  const handleSave = () => {
    const currentContent = editorState.getCurrentContent();
    const hasText = currentContent.hasText();

    if (!hasText) return;

    const htmlString = stateToHTML(currentContent);
    onSave(htmlString);
  };

  return (
    <MUIRichTextEditor
      label="Type your note here and click on the save icon when done"
      onSave={handleSave}
      onChange={(value) => setEditorState(value)}
      inlineToolbar={true}
      defaultValue={defaultValue}
      controls={[
        "title",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "highlight",
        "undo",
        "redo",
        "numberList",
        "bulletList",
        "quote",
        "clear",
        "save",
      ]}
    />
  );
};

export default NotesEditor;
