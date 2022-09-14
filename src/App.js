import React, { useReducer } from "react";
import DisplayContainer from "./Components/Container/DisplayContainer";
import ControlContainer from "./Components/Container/ControlContainer";
import Calculator from "./Components/ContainerPresent";
import { Store } from "./Store";
import { calculatorReducer } from "./Reducer/Reducer";

const App = () => {
  const initialState = {
    currentNum: [],
    resultNum: 0,
  };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <Store.Provider value={{ state: state, dispatch }}>
      <Calculator>
        <DisplayContainer />
        <ControlContainer />
      </Calculator>
    </Store.Provider>
  );
};

export default App;
