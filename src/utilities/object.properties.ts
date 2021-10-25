export const getPropertyName = <T>(
  obj: T,
  expression: (item: T | { [key: string]: string }) => (string | null)[]
) => {
  var res: { [key: string]: any } = {};
  Object.keys(obj).forEach((k) => {
    res[k] = k;
  });
  return expression(res);
};
