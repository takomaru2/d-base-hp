export type InitialInput = {
  name: string;
  katakana: string;
  mail: string;
  phone: string;
  period: string;
  material: string;
  postContent: string;
};

export const initialInput = {
  name: '',
  katakana: '',
  mail: '',
  phone: '',
  period: '1',
  material: '',
  postContent: '',
};

export type ErrorState = Partial<Record<keyof InitialInput, string>>;
