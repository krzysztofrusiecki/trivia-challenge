import styled from 'styled-components';

import { CloseButtonVariant } from 'src/interfaces/CloseButton';
import { ReactComponent as XIcon } from 'src/assets/icons/x.svg';

interface IconProps {
  variant: CloseButtonVariant;
}

export const IconContainer = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledIcon = styled(XIcon)<IconProps>`
  height: 100%;
  width: auto;

  path {
    fill: ${({ theme, variant }) =>
      variant === CloseButtonVariant.PRIMARY
        ? theme.palette.white
        : theme.palette.blue};
  }
`;
