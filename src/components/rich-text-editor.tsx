/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import RichTextEditor from "reactjs-tiptap-editor";
import "reactjs-tiptap-editor/style.css";

interface CustomTextEditorProps {
  extensions: any[];
}

function CustomTextEditor({ extensions }: CustomTextEditorProps) {
  const [content, setContent] = React.useState<string>("");

  const onChangeContent = (value: any) => {
    setContent(value);
  };

  return (
    <RichTextEditor
      output="html"
      content={content}
      onChangeContent={onChangeContent}
      extensions={extensions}
      dark={false}
    />
  );
}

export default CustomTextEditor;
