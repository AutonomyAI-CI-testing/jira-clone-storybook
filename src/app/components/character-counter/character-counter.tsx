import { twMerge } from "tailwind-merge";
import { remainingCharacters } from "@utils/character-limit";

// How close to the limit counts as "close" — below this the counter turns red
// AND, since it's otherwise just noise, is the point it starts showing at all.
const LOW_REMAINING_CHARACTERS = 50;

export const CharacterCounter = ({
  text,
  max,
  className,
}: CharacterCounterProps): JSX.Element | null => {
  const remaining = remainingCharacters(text, max);
  const isLow = remaining < LOW_REMAINING_CHARACTERS;

  if (!isLow) return null;

  return (
    <p
      className={twMerge(
        "font-primary-light text-xs text-font-danger",
        className
      )}
    >
      {remaining} characters left
    </p>
  );
};

interface CharacterCounterProps {
  text: string;
  max: number;
  className?: string;
}
