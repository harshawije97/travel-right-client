"use client";

import React from "react";
import { OrderedList } from "reactjs-tiptap-editor/orderedlist";
import { BulletList } from "reactjs-tiptap-editor/bulletlist";
import { Heading } from "reactjs-tiptap-editor/heading";
import { BaseKit } from "reactjs-tiptap-editor";
import { Bold } from "reactjs-tiptap-editor/bold";
import { Italic } from "reactjs-tiptap-editor/italic";
import { TextUnderline } from "reactjs-tiptap-editor/textunderline";
import dynamic from "next/dynamic";

// dynamic component
const CustomRichTextEditor = dynamic(
  () => import("@/components/rich-text-editor"),
  {
    ssr: false,
  }
);

// Description extensions
const extensions = [
  BaseKit.configure({
    placeholder: {
      showOnlyCurrent: true,
    },
    characterCount: {
      limit: 50_000,
    },
  }),
  Heading,
  Bold,
  Italic,
  TextUnderline,
  OrderedList,
  BulletList,
];

function BusinessMainServices() {
  return (
    <div className="w-full">
      <CustomRichTextEditor extensions={extensions} />
    </div>
  );
}

export default BusinessMainServices;
