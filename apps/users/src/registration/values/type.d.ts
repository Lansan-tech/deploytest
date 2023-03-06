export interface Field {
  type: InputType;
  label: string;
  placeholder?: string;
  id: string;
  name: string;
  className?: string;
  options?: Option;
}

export type Option = {
  tableName: string;
  fields: string[];
  values: [];
};

export type Select = {
  tableName: string;
};
export type InputType =
  | 'text'
  | 'email'
  | 'radio'
  | 'checkbox'
  | 'radio'
  | 'number'
  | 'date'
  | 'select'
  | 'file';

export type Step = {
  title: string;
  tableName: string;
  populate?: boolean;
  isMultiple?: boolean;
  fields: Field[];
  definations: Defination[];
};

export interface Flow {
  steps: Step[];
}
