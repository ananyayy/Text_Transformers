import React from "react";
import { useState } from "react";

export default function Textspace(props){
  const toUppercase = () =>{
    let nt = text.toUpperCase();
    setText(nt)
    props.showAlert('Succesfully converted to Uppercase!',"success")

  }

  const handleOnchange = (event) =>{
    setText(event.target.value)
  }
  const toLowercase = () =>{
    let nt = text.toLowerCase();
    props.showAlert('Succesfully converted to lowercase!',"success")
    setText(nt)
  }
  const clearText = () =>
  {
    setText('');
    props.showAlert('Succesfully cleared console!',"success")


  }
  const copyText=()=>
  {
    navigator.clipboard.writeText(text)
    props.showAlert('Succesfully copied text!',"success")


  }
 

const [text,setText] = useState('');
const [msg, setMsg] = useState('');
  return(
        <> 
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myapp" className="form-label"></label>
  <textarea className="form-control" id="myapp" rows="3" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==="dark"?"black":"white", color:props.mode==="dark"?"white":"black"}} ></textarea>
</div>
<button type="button" class="btn btn-warning mx-1 my-1" onClick={toUppercase}>UpperCase</button>
<button type="button" class="btn btn-warning mx-1 my-1" onClick={toLowercase}>LowerCase</button>
<button type="button" class="btn btn-warning mx-1 my-1" onClick={clearText}>Clear Text</button>
<button type="button" class ="btn btn-warning mx-1 my-1" onClick={copyText}>Copy Text</button>
</div>
<div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
  <p>
    <h3 >Character Count </h3> {text.length}<br/>
   <h3>Word Count</h3> {text.split(' ').length}
  </p>
  <h3>Preview</h3>
  {text}
  </div>
 
</>
    );

}