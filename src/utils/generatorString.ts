export const generatorString = (
  code: string,
  label: string,
  symbol: string
) => {
  let newString = `${symbol} ${code} - ${label}`;
  return newString;
};
