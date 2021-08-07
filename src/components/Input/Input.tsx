import React from 'react';

import { InputProps } from 'src/interfaces/Input';
import preventNonNumericalInput from 'src/utils/preventNonNumericalInput';

import { InputWrapper, StyledInput, LabelWrapper } from './Input.styles';

const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <InputWrapper>
    {label ? (
      <LabelWrapper data-testid="input-label-test">{label}</LabelWrapper>
    ) : null}
    <StyledInput
      data-testid="input-test"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyPress={preventNonNumericalInput}
    />
  </InputWrapper>
);

export default Input;
