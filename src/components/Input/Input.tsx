import React from 'react';

import preventNonNumericalInput from 'src/utils/preventNonNumericalInput';

import { InputWrapper, StyledInput, LabelWrapper } from './Input.styles';

export interface InputProps {
  name: string;
  label?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => (
  <InputWrapper>
    {label ? (
      <LabelWrapper data-testid="input-label-test">{label}</LabelWrapper>
    ) : null}
    <StyledInput
      id={name}
      name={name}
      onKeyPress={preventNonNumericalInput}
      data-testid="input-test"
      {...props}
    />
  </InputWrapper>
);

export default Input;
