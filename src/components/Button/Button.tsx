import React from 'react';

import Typography from 'src/components/Typography';
import { ButtonProps, ButtonVariant } from 'src/interfaces/Button';
import { FontColor, FontWeight } from 'src/interfaces/Typography';

import { StyledButton } from './Button.styles';

const buttonColorMap = {
  [ButtonVariant.PRIMARY]: FontColor.WHITE,
  [ButtonVariant.SECONDARY]: FontColor.WHITE,
  [ButtonVariant.OUTLINED]: FontColor.BLUE,
};

const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  onButtonClick,
  children,
}) => (
  <StyledButton variant={variant} onClick={onButtonClick}>
    <Typography fontWeight={FontWeight.BOLD} color={buttonColorMap[variant]}>
      {children}
    </Typography>
  </StyledButton>
);

export default Button;
