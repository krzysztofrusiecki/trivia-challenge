import _map from 'lodash/map';
import _isString from 'lodash/isString';

const SPACING_BASE = 8;

const spacing = (...args: number[]): string => {
  const spacingArray = _map(args, (size) =>
    _isString(size) ? size : `${size * SPACING_BASE}px`,
  );

  return spacingArray.join(' ');
};

const theme = {
  palette: {
    blueishGrey: 'hsl(235, 47%, 85%)',
    lightGrey: 'hsl(12, 100%, 99%)',
    white: 'hsl(0, 0%, 100%)',
    lightRed: 'hsl(0, 100%, 74%)',
    lightRose: 'hsl(0, 100%, 93%)',
    rose: 'hsl(11, 86%, 77%)',
    lightBlue: 'hsl(235, 100%, 93%)',
    blue: 'hsl(235, 49%, 51%)',
    darkBlue: 'hsl(235, 41%, 44%)',
    gradients: {
      rose: 'linear-gradient(90deg, #FFA67A 0%, #FF6065 100%)',
    },
  },
  fontSize: {
    tiny: '12px',
    small: '15px',
    medium: '18px',
    regular: '21px',
    large: '28px',
    great: '31px',
    huge: '46px',
    massive: '81px',
  },
  fontWeight: {
    medium: '500',
    bold: '700',
  },
  fontFamily: {
    main: 'Quicksand',
  },
  spacing,
} as const;

export default theme;
