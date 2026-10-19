// The images in public/images/projects are numbered 1..25 — keep these two
// bounds in step with that folder, so a generated path always points at a file
// that exists.
const FIRST_PROJECT_IMAGE = 1;
const LAST_PROJECT_IMAGE = 25;

export const getRandomProjectImage = (): string => {
  const randomNumber = getRandomNumberBetweenRange(
    FIRST_PROJECT_IMAGE,
    LAST_PROJECT_IMAGE
  );
  return `/images/projects/${randomNumber}.svg`;
};

const getRandomNumberBetweenRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
