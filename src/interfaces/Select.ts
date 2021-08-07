export interface Option {
  id: string;
  label: string;
}

export interface SelectProps {
  value?: string;
  label?: React.ReactNode;
  options: Option[];
  onChange: (value: string) => void;
}
