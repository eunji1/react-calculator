import React from 'react';
import { darken } from 'polished';
import { Button } from '../Presenter/ButtonPresenter';

const ButtonContainer = ({ color, content }) => (
  <Button color={color}>{content}</Button>
);

Button.defaultProps = {
  color: 'lightGrey',
};

export default ButtonContainer;
