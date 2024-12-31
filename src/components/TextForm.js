import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick= ()=>{
    // console.log("Upper Case was clicked",+ text); just to not make my console messsy
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success")
  }
  const handleLoClick= ()=>{
    // console.log("Lower Case was clicked",+ text); just to not make my console messsy
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success")
  }
  const handleClearClick= ()=>{
    // console.log("Clear Case was clicked",+ text); just to not make my console messsy
    let newText= '';
    setText(newText);
    props.showAlert("Text has been Cleared!","success")
  }
  const handleCopy= ()=>{
    // console.log("Upper Case was clicked",+ text); just to not make my console messsy
    var text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success")

  }
  const handleExtraSpaces= ()=>{
    // console.log("Remove Extra Spaces was clicked",+ text); just to not make my console messsy
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed!","success")
  }
  const handleOnChange= (event)=>{
    setText(event.target.value)
    
  }
  const [text,setText]=useState('');
  
  return (
    <>
    <div className = 'container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
      
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id='myBox'rows='8'></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to upper case</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to lower case</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear text</button>
  <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy text</button>
  <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
  

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1> Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text to preview here"} </p>
    </div>
    </>
  )
}
