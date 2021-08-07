import React from 'react';

export interface InputProps {
  value?: string;
  label?: React.ReactNode;
  onChange: (value: string) => void;
}
