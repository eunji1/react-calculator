/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '../Presenter/ButtonPresenter';


const ButtonContainer = ({ color, content, onClick }) => {

  return (
  <Button color={color} onClick={onClick} value={content}>{content}</Button>
);
  }
export default React.memo(ButtonContainer);
