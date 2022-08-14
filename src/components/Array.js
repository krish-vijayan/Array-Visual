import react from "react";
import "./Array.css";
import { useState } from "react";
function Textbox() {
  const [input, setInput] = useState();
  const [error, setError] = useState();
  const [compDesc, setCompDesc] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [arrLab, setArrLab ] = useState();
  const [row, setRow] = useState();
  const [column, setColumn] = useState();
  const [index1, setIndex1] = useState();
  const [index2, setIndex2] = useState();

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOver2 = () => {
    setIsHoveringText(true);
  };
  const handleMouseOut2 = () => {
    setIsHoveringText(false);
  };

  const inputText = (val) => {
    setInput(val.target.value);
  };

  const handleInput = () => {
    console.log(input);

    if (input == "const array = [1];") {
      console.log("YESSSS");
      setError(null);
      setArrLab('/images/array-lables.png');
      setRow('0')
      setColumn('0')
      setIndex1('index-1');
      setIndex2(null);
    } 
    else if (input == 'const array = [2];'){
      setError(null);
      setArrLab('/images/array-lables.png');
      setRow('0')
      setColumn('0')
      setIndex1('index-1');
      setIndex2('index-2');
    }

      else {
      console.log("NOOOO");
      setError('Please Enter enter "const array = [1];"');
      setArrLab(null);
    }
  };

  return (
    <>
      <div>
        <input
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
          onChange={inputText}
          className="textbox"
          placeholder="TYPE HERE"
        ></input>
        <div>
          {isHoveringText && (
            <p className="textbox-description">
              *This textbox is acting as a source-code editor. A source-code
              editor is a program that captures and integrates the software code
              for an application{" "}
            </p>
          )}
        </div>


        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleInput}
          className="compile"
        >
          Compile
          {isHovering && (
            <p className="compile-description">
              {" "}
              *This button is acting as a compiler. A Compiler essentially
              converts the Source Code (the human readable language, in this
              case JavaScript) into Machine Code (the computer readable
              language). This is how humans and computers generally communicate!
            </p>
          )}
        </button>


        <h1 className="error">{error}</h1>


       
        <h1 className='arr-column'>{column}</h1>
        <h1 className='arr-row'>{row}</h1>
        <div className={index1}></div>
        <div className={index2}></div>
        <img className='arr-lab' src={arrLab} />

      


        
      </div>
    </>
  );
}

export default Textbox;
