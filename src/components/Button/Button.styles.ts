import styled from 'styled-components';

import appTheme from 'src/theme';
import { ButtonVariant } from 'src/interfaces/Button';

interface StyledButtonProps {
  variant: ButtonVariant;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 89px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  outline: none;
  border-radius: 14px;
  cursor: pointer;
  border: ${({ theme, variant }) =>
    variant === ButtonVariant.OUTLINED
      ? `2px solid ${theme.palette.blue}`
      : 'none'};
  background: ${({ theme, variant }) => {
    switch (variant) {
      case ButtonVariant.SECONDARY:
        return theme.palette.blue;
      case ButtonVariant.OUTLINED:
        return theme.palette.transparent;
      case ButtonVariant.PRIMARY:
      default:
        return theme.palette.gradients.rose;
    }
  }};
  box-shadow: ${({ theme, variant }) => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return `0 6px 0 0 ${theme.palette.darkRose}`;
      case ButtonVariant.SECONDARY:
        return `0 6px 0 0 ${theme.palette.darkBlue}`;
      default:
        return 'none';
    }
  }};
  transition: 0.2s linear;

  &:hover {
    background: ${({ theme, variant }) => {
      switch (variant) {
        case ButtonVariant.SECONDARY:
          return theme.palette.darkBlue;
        case ButtonVariant.OUTLINED:
          return theme.palette.blueishGrey;
        default:
          return theme.palette.gradients.rose;
      }
    }};
  }

  @media (max-width: ${appTheme.breakpoints.small}px) {
    height: 64px;
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;
