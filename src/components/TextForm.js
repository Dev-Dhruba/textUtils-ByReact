import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('UpperCase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
        
    }

    const handleLoClick = () => {
        let newText = text;
        setText(newText.toLowerCase());
        props.showAlert("Converted to lower case", "success");
    }

    const handleOnChange = (event) => {
        // console.log('Handle on change');
        setText(event.target.value);
    }

    const caseCounter = () => {
        let smallCaseCount = 0;
        let capitalCaseCount = 0;
        for(let i = 0; i < text.length; i++){
            if(text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90){
                capitalCaseCount++;
            }
            else if(text[i].charCodeAt(0) >= 97 && text[i].charCodeAt(0) <= 122){
                smallCaseCount++;
            }
        }

        return [capitalCaseCount, smallCaseCount];
    }

    const clearText = () => {
        setText("")
        props.showAlert("Text cleared", "success");
    }

    const wordCounter = (word) => {
        let wordArr = word.split(" ");
        let count = wordArr.length;
        if(wordArr[(wordArr.length - 1)] === " " || wordArr[(wordArr.length - 1)] === "") count--;
        return count;
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container ' style= {props.textFormStyle}>
                <div className="mb-3 p-3">
                    <h1>{props.heading}</h1>
                    <textarea className ="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={props.textAreaStyle} > </textarea>
                </div>
                <button className = "btn btn-primary mx-1 my-2" onClick= {handleUpClick} style={props.buttonStyle} >Convert to upper Case </button>
                <button className = "btn btn-primary mx-1 my-2" onClick= {handleLoClick} style={props.buttonStyle}>Convert to Lower case </button>
                <button className = "btn btn-primary mx-1 my-2" onClick= {clearText} style={props.buttonStyle}>Clear Text</button>
            </div>
            <div className="container p-1" style={props.textFormStyle}>
                <h2>Your text summary</h2>
                <p>{wordCounter(text)} words and {text.length} charecters. and {0.008 * text.split(' ').length} minutes to read it</p>
                <h2>Case counter</h2>
                <p> The number of UpperCase letters are {caseCounter()[0]} and the number of LowerCase is {caseCounter()[1]}  </p>
                <h2>Text summary</h2>
                <p> {text.length === 0 ? "Enter something in the preview box to see here" : text} </p>
            </div>
        </>
  )
}

