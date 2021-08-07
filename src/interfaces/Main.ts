export interface MainFormValues {
  difficulty: 'easy' | 'hard' | '';
  amount: string;
}

export interface MainProps {
  onSubmit: (values: MainFormValues) => void;
}
