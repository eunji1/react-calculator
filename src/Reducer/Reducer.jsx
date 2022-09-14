import { evaluate } from "mathjs";
import {
  RESET_CAL,
  POSNEG_CAL,
  EQUAL_CAL,
  PERCENT_CAL,
  DELETE_CAL,
  INPUT_CAL,
} from './Action';
// const handleClick = (e) => {
//   // if (evaluate(currentNum) === undefined) {
//   //   alert("완성되지 않은 수식입니다");
//   //   setNumber({ currentNum: [], resultNum: 0 });
//   // }
// };

export const calculatorReducer = (state, action) => {
  const cxtCurrentNum = state.currentNum;
  const cxtResultNum = state.resultNum;

  switch (action.type) {
    case RESET_CAL:
      if (cxtCurrentNum.length === 0 && cxtResultNum === 0) return state; 
      return { currentNum: [], resultNum: 0 };

    case EQUAL_CAL:
      if (cxtCurrentNum.length === 0) return state;
      return { currentNum: [], resultNum: evaluate(cxtCurrentNum.join("")),};

    case POSNEG_CAL:
      return {
        currentNum: [cxtCurrentNum.join('')* -1],
        resultNum: cxtResultNum,
      };


    case PERCENT_CAL:
      return {
          currentNum: [cxtCurrentNum.join("") * 0.01],
          resultNum: cxtResultNum,
        };

    case DELETE_CAL:
      return {
        currentNum: cxtCurrentNum.slice(0, cxtCurrentNum.length -1),
        resultNum: cxtResultNum,
      };

    case INPUT_CAL:
      return {
        currentNum: cxtCurrentNum.concat(action.value),
        resultNum: cxtResultNum,
      }
    default:
      return state;
  }
};

export default calculatorReducer;
