import React, { useRef, useState } from "react";
import { useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import VideoPlayerContext from "../contexts/VideoPlayerContext";
import ReactToPdf from "react-to-pdf";
import { pdfFromReact } from "generate-pdf-from-react-html";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SaveIcon from "@mui/icons-material/Save";

function TextEditor() {
  const textRef = useRef();

  const [value, setValue] = useState("");
  const playerSetting = useContext(VideoPlayerContext);

  const setVideo = (e) => {
    playerSetting.setVideoPause(true);
  };
  const setText = (e) => {
    console.log(textRef);
    setValue(e);
    console.log(e);
  };

  return (
    <div
      style={{ width: "50%", display: "flex", flexDirection: "column" }}
      onClick={setVideo}
    >
      <div
        style={{
          width: "100%",
          marginBottom: "2%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <SaveIcon sx={{ color: "#E29FF6", alignSelf: "flex-end", mr: "5%" }} />

        <PictureAsPdfIcon
          onClick={() => pdfFromReact(".ql-editor", "Notes", "p", true, false)}
          sx={{ color: "#E29FF6", alignSelf: "flex-end" }}
        />
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setText}
        placeholder="Write here"
        modules={toolbar}
        formats={formats}
        className="ql-editor"
        ref={textRef}
      />
    </div>
  );
}

let toolbar = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6, false] }],
    [{ size: [10, 12, 14, 16, 17, 18] }][
      ("bold", "italic", "underline", "strike", "blockquote")
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
    ["code-block"],
  ],
};
let formats = {
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
    "code-block",
  ],
};

export default TextEditor;
