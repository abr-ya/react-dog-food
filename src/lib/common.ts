export const strCut = (str: string, n: number) => {
  if (!str) return "";
  if (str.length <= n) return str;

  return `${str.substring(0, n)}...`;
};
