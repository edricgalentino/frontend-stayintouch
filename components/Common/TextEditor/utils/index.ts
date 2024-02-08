import fileService from "@/components/File/services/service";
import { SnackbarData } from "@/lib/global/Snackbar/useSnackbar";
import { getErrorMessage } from "@/lib/helpers/request";
import { MutableRefObject } from "react";

export type TextEditorPropsType = {
  value: string;
  callbackSetValue: (value: string) => void;
};

export const modulesUtil = {
  container: [
    [{ header: "1" }, { header: "2" }],
    [{ size: [] }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
  ],
};

export const formatsUtil = [
  "header",
  "align",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "color",
  "background",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

export function imageHandler(editorRef: MutableRefObject<null>, callback: (data: SnackbarData) => void) {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = () => {
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    // file type is only image.
    if (/^image\//.test(file.type)) {
      saveToServer(file, editorRef, callback);
    } else {
      callback({
        message: "You could only upload images.",
        type: "error",
      });
    }
  };
}

function saveToServer(file: File, editorRef: MutableRefObject<null>, callback: (data: SnackbarData) => void) {
  const formData = new FormData();
  formData.append("upload", file);
  formData.append("type", "image");

  fileService
    .uploadFile<{
      url: string;
    }>(formData)
    .then((res) => {
      insertToEditor(res.url, editorRef);
    })
    .catch((err) => {
      console.log(err);
      let errorMsg = getErrorMessage(err);
      callback({
        message: `${errorMsg === "Unauthorized" ? "You need to login to upload image" : errorMsg}`,
        type: "error",
      });
    });
}

function insertToEditor(url: string, editorRef: MutableRefObject<null>) {
  (editorRef.current as any).getEditor().insertEmbed(null, "image", url);
}
