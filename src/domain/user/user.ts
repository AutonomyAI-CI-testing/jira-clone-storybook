export type UserId = string;
export type User = {
  id: UserId;
  name: string;
  image?: string;
  color?: string;
};

export const getRandomPastelColor = () => {
  const h = 360 * Math.random();
  const s = 25 + 70 * Math.random();
  const l = 85 + 10 * Math.random();

  return hslToHex(h, s, l);
};

// Deterministic alternative to getRandomPastelColor: given the same seed (e.g. a
// user's id or name), it always returns the same pastel color. Use this to pick a
// fallback avatar color for a user with no assigned `color`, so the color stays
// stable across re-renders instead of changing randomly every time.
export const getSeededPastelColor = (seed: string) => {
  const hash = hashString(seed);
  const h = hash % 360;
  const s = 25 + (hash % 70);
  const l = 85 + (hash % 10);

  return hslToHex(h, s, l);
};

const hashString = (value: string): number => {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const transformer = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    // convert to Hex and prefix "0" if needed
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${transformer(0)}${transformer(8)}${transformer(4)}`;
};
