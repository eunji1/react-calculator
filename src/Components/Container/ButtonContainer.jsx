/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '../Presenter/ButtonPresenter';

const ButtonContainer = ({ color, content, onClick }) => (
  <Button color={color} onClick={onClick} value={content}>{content}</Button>
);

export default ButtonContainer;
