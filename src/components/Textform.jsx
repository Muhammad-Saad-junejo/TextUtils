import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("");
  const handleup = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Your text has been change to uppercase", "success");
  };
  const handlelo = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Your text has been change to lowercase", "success");
  };
  const clear = () => {
    let newtext = "";
    settext(newtext);
    props.showalert("Text Clear!", "success");
  };
  const handlechange = (event) => {
    settext(event.target.value);
  };

  const copytext = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("Text Copied!", "success");
  };
  const remspace = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("Extra Spacs has been removed!", "success");
  };
  return (
    <>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>
          Try TextUtils - Word-Counter , Character-Counter, Remove extra Spaces
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handlechange}
          ></textarea>
        </div>
        <button
          disabled={text.length == 0}
          className="btn btn-success mx-1 my-1"
          onClick={handlelo}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleup}
        >
          Convert To upperCase
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-success mx-1 my-1"
          onClick={clear}
        >
          Clear
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-success mx-1 my-1"
          onClick={copytext}
        >
          copy Text
        </button>
        <button
          disabled={text.length == 0}
          className="btn btn-success mx-1 my-1"
          onClick={remspace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          Your Text Have {text.length} Letters. and{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words.
        </p>
        <p>Your text read in {0.008 * text.split(" ").length} minutes</p>
      </div>
    </>
  );
}
