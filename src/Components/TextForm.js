import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
        // console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleLowclick = () => {
        // console.log("uppercase was clicked");
        let newtext = text.toLowerCase
            ();
        settext(newtext);
    }
    const handleClearclick = () => {
        // console.log("uppercase was clicked");
        let newtext = ' ';
        settext(newtext);
    }
    const handleOnchange = (event) => {
        // console.log("on change");
        settext(event.target.value);
    }

    const handleCopy = (event) => {
        var text = document.getElementById("Textarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraspaces = (event) => {
        let newText = text.split(/[  ]+/);
        settext(newText.join("  "));
    }

    const [text, settext] = useState("Enter text here")
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="Textarea1" rows={8} defaultValue={""} />
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary" onClick={handleLowclick}>Convert to Lowercase</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleClearclick}>Clear Text</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-outline-primary mx-2" onClick={handleExtraspaces}>Remove Extra Spaces</button>



            </div>
            <div className="container">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
