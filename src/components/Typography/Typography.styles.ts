import styled from 'styled-components';

import {
  FontColor,
  FontWeight,
  TypographyProps,
} from 'src/interfaces/Typography';

export const StyledText = styled.p<TypographyProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ theme, fontWeight }) => {
    switch (fontWeight) {
      case FontWeight.BOLD:
        return theme.fontWeight.bold;
      case FontWeight.MEDIUM:
      default:
        return theme.fontWeight.medium;
    }
  }};
  color: ${({ theme, color }) => {
    switch (color) {
      case FontColor.WHITE:
        return theme.palette.white;
      case FontColor.ROSE:
        return theme.palette.rose;
      case FontColor.BLUE:
      default:
        return theme.palette.blue;
    }
  }};
`;
