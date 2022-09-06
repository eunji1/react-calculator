/* eslint-disable react/prop-types */
import React from 'react';
import { Control } from '../Presenter/ControlPresenter';
import ButtonContainer from './ButtonContainer';


const ControlContainer = ({ onClick }) => (
  <Control>
    <ButtonContainer onClick={onClick} color="mediumGrey" content="C" />
    <ButtonContainer onClick={onClick} color="mediumGrey" content="+/-" />
    <ButtonContainer onClick={onClick} color="mediumGrey" content="%" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="/" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="7" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="8" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="9" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="X" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="4" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="5" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="6" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="-" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="3" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="2" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="1" />
    <ButtonContainer onClick={onClick} color="lightOrange" content="+" />

    <ButtonContainer onClick={onClick} color="lightGrey" content="0" />
    <ButtonContainer onClick={onClick} color="lightGrey" content="." />
    <ButtonContainer onClick={onClick} color="lightGrey" content="&#8592;" />
    <ButtonContainer onClick={onClick} color="mediumOrange" content="=" />
  </Control>
);

export default ControlContainer;
