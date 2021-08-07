export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINED = 'outlined',
}

export interface ButtonProps {
  variant?: ButtonVariant;
  type?: 'button' | 'submit';
  onButtonClick: () => void;
}
