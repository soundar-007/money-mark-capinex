import React from "react";
import { Editor } from "primereact/editor";
import "quill/dist/quill.snow.css"; // Import Quill's CSS

const CustomEditor = () => {
  return (
    <div className="relative">
      <Editor
        style={{ height: "50px",borderRadius:"5px" }}
        headerTemplate={
          <span className="ql-formats " style={{ border: "none", background: "transparent" }} >
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <select className="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="false"></option>
            </select>
            <button className="ql-link"></button>
            <button className="ql-image"></button>
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span>
        }
      />
    </div>
  );
};

export default CustomEditor;