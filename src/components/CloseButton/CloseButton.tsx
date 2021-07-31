import React from 'react';

import {
  CloseButtonProps,
  CloseButtonVariant,
} from 'src/interfaces/CloseButton';

import { IconContainer, StyledIcon } from './CloseButton.styles';

const CloseButton: React.FC<CloseButtonProps> = ({
  variant = CloseButtonVariant.PRIMARY,
  onButtonClick,
}) => (
  <IconContainer data-testid="close-button" onClick={onButtonClick}>
    <StyledIcon variant={variant} />
  </IconContainer>
);

export default CloseButton;
