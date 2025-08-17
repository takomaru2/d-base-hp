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

export type ErrorState = Partial<Record<keyof UserInput, string>>;
