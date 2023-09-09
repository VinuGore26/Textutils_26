import React, {useState} from "react";
import PropTypes from "prop-types";


export default function TextForm(props) {

  const handelUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !", "success");
  }

  const handelLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !", "success");
  }

  const handelClearclick = () => {
    let newText = ' ';
    setText(newText);
    props.showAlert("Text Cleared !", "success");
  }

  const handelOnChange = (event) => {
    setText(event.target.value);
  }

  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard !", "success");
  }

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Removed Extra-Spaces !", "success");
  }

  const [text, setText] = useState('');
  // setText("Vinu");
  return (
    <>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className="container mb-2">{props.heading}</h1>
        <div className="mybox">
          <div className="container">
            <textarea className="form-control" id="mybox" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042b3b' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} rows="8" placeholder="Enter the text here"></textarea>
          </div>
          <div className="container my-2 d-flex">
            <button type="button" disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelUpclick}>To Uppercase</button>
            <button type="button" disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handelLoclick}>To Lowercase</button>
            <button type="button" disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handelCopy}>Copy Text</button>
            <button type="button" disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handelClearclick}>Clear Text</button>
            <button type="button" disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handelExtraSpaces}>Remove Extra-space</button>
            <input className="form-control my-1 mx-1" disabled={text.length === 0} style={{width: '10rem', height: '2.5rem'}} type="search" placeholder="Search Word" aria-label="Search"/>
            <button type="button" disabled={text.length === 0} className="btn btn-secondary my-1 mx-1">Search</button>
          </div>
        </div>
        <div className="container summary-box my-3" style={{color: props.mode === 'dark' ? 'light' : 'dark'}}>
          <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words & {text.length} characters</p>
          <p>{0.008*text.split(" ").filter((element) => {return element.length!==0}).length} mins to read</p>
          <h4>Preview text : </h4>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}


TextForm.propTypes = {
  text: PropTypes.string
}

TextForm.defaultProps = {
  text: 'About Text here'
}

