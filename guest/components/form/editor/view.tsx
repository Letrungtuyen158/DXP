import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill from "react-quill";

export default function Editor({ content, className }: { content: string; className?: string }) {
  return (
    <div>
      <ReactQuill theme="snow" value={content} readOnly className={`hide-toolbar ${className}`} />
    </div>
  );
}
