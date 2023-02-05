// import { Editor } from "react-draft-wysiwyg";
// import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const TextEditor = () => {
//   return (
//     <Editor
//       toolbarClassName="toolbarClassName"
//       wrapperClassName="wrapperClassName"
//       editorClassName="editorClassName"
//       onEditorStateChange={(e) => {
//         console.log(e);
//       }}
//     />
//   );
// };
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import App from "../App";

function TextEditor() {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="Write something.."
    />
  );
}

let editor = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],

  formats: [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ],
};

export default TextEditor;
