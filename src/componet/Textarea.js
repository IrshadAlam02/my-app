import React,{useState} from 'react'
export default function Textarea(props) 
{
    function convertup(){
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    function convertlo(){
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    function ERASE(){
        let newtext=" ";
        setText(newtext);
    }
    const change=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState(" ");
    return(
        <>
        <div>
        <div className="ml-96 ">
            <h1 className=" mar text-white text-2xl mt-8">ENTER THE DETAIL</h1>
        <textarea className=" input form-control border-inherit" id="mybox"value={text} onChange={change}></textarea>
        </div >
        <button className=" button1  hover2 bg-white text-black rounded-lg transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ..." onClick={convertup} >CONVET INTO UPPERCASE </button>
        <button className=" button1  hover2 bg-white text-black rounded-lg transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ..." onClick={convertlo} >CONVET INTO LOWERCASE </button>
        <button className=" button1  hover2 bg-white text-black rounded-lg transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 ... " onClick={ERASE} >ĒRASE </button>
        </div>
        <div>
              <h1 className=" button1 text-Stone-300 text-xl">PREVIEW</h1>
              <p className=" button1 ml-96 text-zinc-200">{text}</p>

        </div>
        </>
    )
}