import React ,{useState} from "react";


export default function Textform(props) {
  
  const Setcolorofbuttons= ()=>{
    
  }
    const [text, settext] =useState("")
    const HandleOnChange =(event)=>{
        settext(event.target.value);
    }
    const HandleUpperCase = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const HandleLowerCase= ()=>{
        let newtext = text.toLowerCase();
        settext(newtext)
    }
    const HandleClearText = ()=>{
        settext("")
    }
    const HandleCopyText =async()=>{
        
     await navigator.clipboard.writeText(text);

    }
  return (
    <div>
      <div className="mb-3 container my-3">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label  text-${props.mode === 'dark'? 'light':'dark'}`} >
          <h2>Enter your text here:</h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value= {text}
          style={props.mode === 'dark'?{backgroundColor:'#162954', color:'white'}: {backgroundColor:'white'} }
          onChange={HandleOnChange}
          rows="8"
        ></textarea>
      </div>
      <div className="container">
        <button className={`btn btn-primary mx-1 my-2 `} onClick={HandleUpperCase}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-2"onClick={HandleLowerCase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={HandleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-2"onClick={HandleClearText}>Clear text</button>

      </div>
      <div className={`container  text-${props.mode === 'dark'? 'light':'dark'}`}>
        <h2>Summary of your text is:
           
        </h2>
        <p>
           {text.length=== 0? '0': text.split(" ").length} words and {text.length} characters.

        </p>
        <p>It will take you approximately {text.length === 0? "0": 0.008 * text.split(" ").length} minutes to read this text.</p>
        <h2>
            Preview of your text:
        </h2>
        <p>{text.length === 0? `Enter your text in the above box to preview here.`: text}</p>
      </div>
      
    </div>
  );
}
