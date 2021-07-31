import React from 'react';

import theme from 'src/theme';
import {
  FontColor,
  FontWeight,
  TextAlign,
  TypographyProps,
} from 'src/interfaces/Typography';

import { StyledText } from './Typography.styles';

const Typography: React.FC<TypographyProps> = ({
  fontFamily = theme.fontFamily.main,
  fontSize = theme.fontSize.regular,
  fontWeight = FontWeight.MEDIUM,
  color = FontColor.BLUE,
  textAlign = TextAlign.LEFT,
  lineHeight = '100%',
  letterSpacing = 0,
  children,
}) => (
  <StyledText
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    textAlign={textAlign}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
  >
    {children}
  </StyledText>
);

export default Typography;
