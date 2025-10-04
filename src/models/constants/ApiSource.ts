export const ApiSource = {
  Posts: 'posts',
  Comments: 'comments'
};

export type ApiSource = (typeof ApiSource)[keyof typeof ApiSource];
