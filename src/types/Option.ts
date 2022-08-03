export interface Option {
  value: string;
  label: string;
}

export interface OptionConstraint {
  id: number;
  label?: string;
  value?: string | number;
}
