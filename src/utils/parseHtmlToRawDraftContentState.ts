import { convertToRaw, convertFromHTML, ContentState } from "draft-js";

const parseHtmlToRawDraftContentState = (htmlString: string | undefined) => {
  if (!htmlString) return "";

  const contentHTML = convertFromHTML(htmlString);
  const { contentBlocks, entityMap } = contentHTML;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );

  return JSON.stringify(convertToRaw(contentState));
};

export default parseHtmlToRawDraftContentState;
