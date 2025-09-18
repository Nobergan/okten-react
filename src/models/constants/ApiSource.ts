export const ApiSource = {
  Dummy: 'dummy',
  JsonPh: 'jsonph'
};

export type ApiSource = (typeof ApiSource)[keyof typeof ApiSource];
