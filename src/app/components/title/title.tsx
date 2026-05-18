import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_NUM_LINES = 2;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  numLines = DEFAULT_NUM_LINES,
}: TitleProps): JSX.Element => {
  // Initialize titles array: first line gets initTitle, others start empty
  const [titles, setTitles] = useState<string[]>(
    Array.from({ length: numLines }, (_, i) => (i === 0 ? initTitle : ""))
  );
  // Track which line is focused to show character count only for active field
  const [focusIndex, setFocusIndex] = useState<number | null>(0);

  const updateTitle = (index: number, newTitle: string) => {
    // Enforce max length by blocking input beyond limit
    if (newTitle.length > maxLength) return;

    const newTitles = [...titles];
    newTitles[index] = newTitle;
    setTitles(newTitles);
  };

  const handleFocus = (index: number) => {
    // Only track focus state in editable mode
    if (!readOnly) setFocusIndex(index);
  };



  return (
    <div className="space-y-4">
      {titles.map((title, index) => {
        const isMaxLength = title.length >= maxLength;
        // Show error only on first line if it's empty or whitespace-only
        const requireError =
          error && index === 0 && (title.length === 0 || textAreOnlySpaces(title));
        const isFocused = focusIndex === index;

        return (
          <div key={index} className="relative">
            <TextareaAutosize
              name={`title-${index}`}
              value={title}
              setValue={(newTitle) => updateTitle(index, newTitle)}
              placeholder={index === 0 ? placeholder : `Line ${index + 1}`}
              readOnly={readOnly}
              onFocus={() => handleFocus(index)}
              textareaClassName={cx(
                "font-primary-black text-2xl",
                requireError &&
                  "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
              )}
              autofocus={index === 0}
            />
            {requireError && (
              <span className="ml-3 font-primary-light text-sm text-font-danger">
                {error}
              </span>
            )}
            {isFocused && (
              <span
                className={cx(
                  "absolute right-0 top-full font-primary-light text-sm",
                  isMaxLength ? "text-font-danger" : "text-font-subtlest"
                )}
              >
                {title.length} / {maxLength}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  numLines?: number;
}
