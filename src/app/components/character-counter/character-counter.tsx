import { twMerge } from "tailwind-merge";
import { remainingCharacters } from "@utils/character-limit";

const LOW_REMAINING_CHARACTERS = 50;

export const CharacterCounter = ({
  text,
  max,
  className,
}: CharacterCounterProps): JSX.Element => {
  const remaining = remainingCharacters(text, max);
  const isLow = remaining < LOW_REMAINING_CHARACTERS;

  return (
    <p
      className={twMerge(
        "font-primary-light text-xs",
        isLow ? "text-font-danger" : "text-font-subtlest",
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
