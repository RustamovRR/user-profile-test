export interface ISelectOption {
  label: string;
  value: string | number | readonly string[] | undefined;
  selected?: boolean;
}

export interface ICountry {
  name: string;
  id: number;
}
