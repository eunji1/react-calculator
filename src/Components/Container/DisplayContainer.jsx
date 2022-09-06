import React from 'react';
import { Display, CurrentNum, ResultNum } from '../Presenter/DisplayPresenter';

const DisplayContainer = ({ currentNum, resultNum }) => (
  <Display>
    <CurrentNum>{currentNum}</CurrentNum>
    <ResultNum>{resultNum}</ResultNum>
  </Display>
);
export default DisplayContainer;
