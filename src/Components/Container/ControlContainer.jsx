/* eslint-disable react/prop-types */
import React, {useContext, useCallback} from 'react';
import { Store } from '../../Store';
import { Control } from '../Presenter/ControlPresenter';
import ButtonContainer from './ButtonContainer';
import {
  RESET_CAL,
  POSNEG_CAL,
  EQUAL_CAL,
  PERCENT_CAL,
  DELETE_CAL,
  INPUT_CAL,
} from '../../Reducer/Action';

const ControlContainer = () => {
  const {state, dispatch } = useContext(Store);
  const onClick = useCallback((e) => {
    const value = e.target.value;
    switch (value) {
      case "C":
        dispatch({ type: RESET_CAL });
        break;
      case "=":
        dispatch({ type: EQUAL_CAL });
        break;
      case "+/-":
        dispatch({ type: POSNEG_CAL });
        break;
      case "%":
        dispatch({ type: PERCENT_CAL });
        break;
      case "←":
        dispatch({ type: DELETE_CAL });
        break;
      default:
        dispatch({ type: INPUT_CAL, value: value });
        break;
    }
  }, []);

  return (
  <Control>
    <ButtonContainer onClick={onClick} color="mediumGrey" content="C" />
    <ButtonContainer onClick={onClick} color="mediumGrey" content="+/-" />
    <ButtonContainer onClick={onClick} color="mediumGrey" content="%" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="/" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="7" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="8" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="9" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="*" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="4" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="5" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="6" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="-" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="1" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="2" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="3" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="+" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="0" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="." />
    <ButtonContainer onClick={onClick} color="lightGrey" content="&#8592;" />
    <ButtonContainer onClick={onClick} color="mediumOrange" content="=" />
  </Control>
);
  }
export default ControlContainer;
