export enum CloseButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface CloseButtonProps {
  variant?: CloseButtonVariant;
  onButtonClick: () => void;
}
