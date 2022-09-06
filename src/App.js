import React, { useState } from "react";
import { evaluate } from "mathjs";
import DisplayContainer from "./Components/Container/DisplayContainer";
import ControlContainer from "./Components/Container/ControlContainer";
import Calculator from "./Components/ContainerPresent";

const App = () => {
  const [number, setNumber] = useState({
    currentNum: [],
    resultNum: 0,
  });

  const { currentNum, resultNum } = number;

  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case "C":
        setNumber({ currentNum: [], resultNum: 0 });
        break;

      case "=":
        if (currentNum.length === 0) {
          setNumber({ currentNum: [], resultNum: 0 });
        } else {
          setNumber(() => {
            const tempResult = evaluate(currentNum.join(""));
            return {
              currentNum: [],
              resultNum: tempResult,
            };
          });
        }
        break;

      case "+/-":
        setNumber({
          currentNum: [currentNum.join("") * -1],
          resultNum: resultNum,
        });
        break;

      case "%":
        setNumber(() => {
          const tempResult = [currentNum.join("") * 0.01];
          return {
            currentNum: [],
            resultNum: tempResult,
          };
        });
        break;

      case "←":
        setNumber({
          currentNum: currentNum.slice(0, currentNum.length - 1),
          resultNum: resultNum,
        });
        break;

      default:
        setNumber({
          currentNum: currentNum.concat(value),
          resultNum: resultNum,
        });
        break;
    }
  };
  return (
    <Calculator>
      <DisplayContainer currentNum={currentNum} resultNum={resultNum} />
      <ControlContainer onClick={handleClick} />
    </Calculator>
  );
};

export default App;
