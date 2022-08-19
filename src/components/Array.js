import react from 'react';
import './Array.css';
import { useState } from 'react';

var arr = [];

function Textbox() {
  const [input, setInput] = useState();
  const [error, setError] = useState();
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringText2, setIsHoveringText2] = useState(false);
  const [arrLab1, setArrLab1] = useState();
  const [arrLab2, setArrLab2] = useState();
  const [column, setColumn] = useState('hide-text');
  const [array, setArray] = useState('hide-text');
  const [liveSize, setLiveSize] = useState(0);

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
  const handleMouseOver3 = () => {
    setIsHoveringText2(true);
  };
  const handleMouseOut3 = () => {
    setIsHoveringText2(false);
  };

  const inputText = (val) => {
    setInput(val.target.value);
  };

  var size = 0;

  const handleInput = () => {
    if (
      input.includes('const') == true &&
      input.includes('=') == true &&
      input.includes('[') == true &&
      input.includes(']') == true &&
      input.includes(';') == true
    ) {
      size = 0; //resets array size everytime compile is clicked
      arr = []; //resets array everytime compile is clicked
      setError(null);
      setArrLab1('/images/array-label-1.png');
      setArrLab2('/images/array-label-2.png');
      setColumn('column');
      setArray('index');

      for (var i = 15; i < input.length - 2; i++) {
        if (input[i] !== ',') {
          arr.push(input[i]);
          size = size + 1;
        }
      }
      setLiveSize(size);
      console.log(arr);
      console.log(input);
    } else {
      setLiveSize(0);
      console.log('NOOOO');
      setError(
        'Please use the JavaScript syntax of declaring an array "const array = [ ];"'
      );
      setArrLab1(null);
      setArrLab2(null);
      setColumn('hide-text');
      setArray('hide-text');
    }
  };

  //need to find a way to take the input between the brackets (parse)

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
              for an application.{' '}
            </p>
          )}
        </div>
        <button
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => {
            handleInput();
            console.log(size);
          }}
          className="compile"
        >
          Compile
          {isHovering && (
            <p className="compile-description">
              {' '}
              *This button is acting as a compiler. A Compiler essentially
              converts the Source Code (the human readable language, in this
              case JavaScript) into Machine Code (the computer readable
              language).
            </p>
          )}
        </button>
        <h1 className="error">{error}</h1>

        <h1
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
          className="arr-size"
        >
          Array Size = {liveSize}
          {isHoveringText2 && (
            <p className="arr-size-description">
              *Array size represents the number of elements in the array.
            </p>
          )}
        </h1>

        <div className={array}>
          {arr.map((currElement, index) => {
            return (
              <>
                <div>{currElement}</div>
              </>
            );
          })}
        </div>
        <div className={column}>
          {arr.map((currElement, index) => {
            return (
              <>
                <div>{index}</div>
              </>
            );
          })}
        </div>
        <div className="lab-wrapper">
          <img className="arr-lab-1" src={arrLab1} />
          <img className="arr-lab-2" src={arrLab2} />
        </div>
      </div>
    </>
  );
}

export default Textbox;
