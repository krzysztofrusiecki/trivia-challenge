export enum FontWeight {
  MEDIUM = 'medium',
  BOLD = 'bold',
}

export enum FontColor {
  WHITE = 'white',
  BLUE = 'blue',
  ROSE = 'rose',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export interface TypographyProps {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: FontWeight;
  color?: FontColor;
  letterSpacing?: number;
  lineHeight?: string | number;
  textAlign?: TextAlign;
}
