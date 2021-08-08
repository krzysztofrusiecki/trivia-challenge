import React, { useState, useEffect } from 'react';

import theme from 'src/theme';
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
  type = 'button',
  variant = ButtonVariant.PRIMARY,
  onButtonClick,
  children,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <StyledButton type={type} variant={variant} onClick={onButtonClick}>
      <Typography
        fontSize={
          theme.fontSize[
            width && width > theme.breakpoints.small ? 'regular' : 'small'
          ]
        }
        fontWeight={FontWeight.BOLD}
        color={buttonColorMap[variant]}
      >
        {children}
      </Typography>
    </StyledButton>
  );
};

export default Button;
