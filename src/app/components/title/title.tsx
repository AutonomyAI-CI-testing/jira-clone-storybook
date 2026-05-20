import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitles = ["", ""],
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholders = ["Write the title", "Add a second line"],
}: TitleProps): JSX.Element => {
  const [titles, setTitles] = useState<string[]>(initTitles);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);

  // Calculate total length across all title lines
  const getTotalLength = () => titles.join("").length;
  
  const isMaxLength = getTotalLength() >= maxLength;
  
  // Show error if error prop is provided AND all titles are empty or only whitespace
  const requireError =
    error && (getTotalLength() === 0 || titles.every(textAreOnlySpaces));

  const onFocus = (index: number) => {
    if (!readOnly) setFocusedIndex(index);
  };
  const onBlur = () => setFocusedIndex(null);

  const updateTitle = (index: number, newValue: string) => {
    const newTitles = [...titles];
    
    // Calculate how much space is available for this title line
    // by subtracting the length of all other lines from the max length
    const otherTitlesLength = titles
      .filter((_, i) => i !== index)
      .join("").length;
    const availableLength = maxLength - otherTitlesLength;

    // Prevent exceeding max length across all title lines
    if (newValue.length > availableLength) return;

    newTitles[index] = newValue;
    setTitles(newTitles);
  };

  return (
    <div className="relative">
      <div className="space-y-2">
        {titles.map((title, index) => {
          // First line is larger (text-2xl), subsequent lines are smaller (text-lg)
          const textSizeClass =
            index === 0
              ? "font-primary-black text-2xl"
              : "font-primary-black text-lg";

          return (
            <TextareaAutosize
              key={index}
              name={`title-${index}`}
              value={title}
              setValue={(newValue) => updateTitle(index, newValue)}
              placeholder={placeholders[index] || ""}
              readOnly={readOnly}
              onFocus={() => onFocus(index)}
              onBlur={onBlur}
              textareaClassName={cx(
                textSizeClass,
                requireError &&
                  "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
              )}
              autofocus={index === 0}
            />
          );
        })}
      </div>
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {focusedIndex !== null && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {getTotalLength()} / {maxLength}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  initTitles?: string[];
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholders?: string[];
}
