import styled from 'styled-components';

import { StarVariant } from 'src/interfaces/Stars';
import { ReactComponent as StarIcon } from 'src/assets/icons/star.svg';

interface IconProps {
  variant: StarVariant;
}

export const StarsWrapper = styled.div`
  height: 35px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const StyledStarIcon = styled(StarIcon)<IconProps>`
  height: 35px;
  width: 35px;
  margin-right: ${({ theme }) => theme.spacing(0.5)};

  path {
    fill: ${({ theme, variant }) => {
      switch (variant) {
        case StarVariant.FILLED:
          return theme.palette.rose;
        case StarVariant.UNFILLED:
        default:
          return theme.palette.blueishGrey;
      }
    }};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
