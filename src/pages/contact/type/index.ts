export type UserInput = {
  name: string;
  katakana: string;
  mail: string;
  phone: string;
  size: string[];
  period: string;
  material: string;
  postContent: string;
};

export const initialInput = {
  name: '',
  katakana: '',
  mail: '',
  phone: '',
  size: [],
  period: '1',
  material: '1',
  postContent: '',
};

export type ErrorState = Partial<Record<keyof UserInput, string>>;
