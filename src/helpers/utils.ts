const BASE_URL = import.meta.env.BASE_URL;

export function getPrice(num) {
  const roundTwoDecimal = num.toFixed(2);
  return `$${roundTwoDecimal}`;
}

export const getAssetPath = (path) => `${BASE_URL}${path}`;
