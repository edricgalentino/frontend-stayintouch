"use client";
import dynamic from "next/dynamic";
import { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import { TextEditorPropsType, formatsUtil, imageHandler, modulesUtil } from "./utils";
import ReactQuill from "react-quill";
import useSnackbar from "@/lib/global/Snackbar/useSnackbar";

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }: ReactQuill.ReactQuillProps & { forwardedRef: any }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  }
);

const TextEditor = ({ value, callbackSetValue }: TextEditorPropsType) => {
  const { setSnackbar } = useSnackbar();
  const editorRef = useRef(null);
  const modules = useMemo(
    () => ({
      toolbar: {
        ...modulesUtil,
        handlers: {
          image: async function () {
            imageHandler(editorRef, setSnackbar);
          },
        },
      },
    }),
    []
  );

  return (
    <div data-text-editor="name">
      <QuillNoSSRWrapper
        modules={modules}
        forwardedRef={editorRef}
        placeholder="Type your message here..."
        formats={formatsUtil}
        value={value}
        onChange={(value) => callbackSetValue(value)}
        style={{
          position: "relative",
          zIndex: 40,
          height: "400px",
          overflow: "visible",
        }}
        bounds={`[data-text-editor="name"]`}
      />
    </div>
  );
};

export default TextEditor;
