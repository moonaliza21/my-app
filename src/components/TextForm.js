import React ,{useState} from 'react'


export default function TextForm(props) {
  const hadleUpClick = ()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert("uppercase is change ","success")
  }
  const hadleloClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert("lowercase is change ","success")
  }
  const hadleonClear = ()=>{
    let newtext = "";
    setText(newtext)
    props.showalert("clear  ","success")
  }
  const handleONCopy =()=>{
    var text =document.getElementById("myBox")
    text.select()
  navigator.clipboard.writeText(text.value)
  }
  const handleextraspace=()=>{
    let newtext=text.split(/[  ]+/)
    setText(newtext.join(" "))
  }
  
  const handleonChange= (event)=>{
   
    setText(event.target.value)
  }
  
  const [text,setText] = useState('this is text here');
  // setText("hello maria")
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'? 'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">

    
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode ==='dark'? 'white':'black'}} id="myBox" rows="9"></textarea>
  </div>
  <button className="btn btn-primary mx-4" onClick={hadleUpClick}>Conver to uppercase</button>
  <button className="btn btn-success" onClick={hadleloClick}>Conver to Lower case</button>
  <button className="btn btn-danger mx-4" onClick={hadleonClear}>Clear Text</button>
  <button className="btn btn-info mx-4" onClick={handleONCopy}>Copy Text</button>
  <button className="btn btn-info mx-4" onClick={handleextraspace}>clear extra space</button>
    </div>
    <div className="container my-5"  style={{color:props.mode==="light"?"black":"white"}}>
    <h1>YOur Summary</h1>
    <p>word is {text.split(" ").length-1} and total character length{text.length} </p>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>
    </>
  )
}
