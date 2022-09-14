import React, { useContext } from 'react';
import { Display, CurrentNum, ResultNum } from '../Presenter/DisplayPresenter';
import { Store } from '../../Store';

const DisplayContainer = () => {
  const value = useContext(Store);
  
  return(
  <Display>
    <CurrentNum>{value.state.currentNum}</CurrentNum>
    <ResultNum>{value.state.resultNum}</ResultNum>
  </Display>
);
  }
export default DisplayContainer;
