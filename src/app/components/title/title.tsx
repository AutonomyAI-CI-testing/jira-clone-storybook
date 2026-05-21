import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";
import { BsPlus, BsX } from "react-icons/bs";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Multi-line title component with dynamic line addition/removal.
 * Tracks total character count across all lines against a single maxLength limit.
 */
export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
}: TitleProps): JSX.Element => {
  // Support multi-line titles by storing an array of line values
  const [lines, setLines] = useState<string[]>(
    initTitle ? [initTitle] : [""]
  );
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);

  const totalLength = lines.join("").length;
  const isMaxLength = totalLength >= maxLength;
  // Show error only if all lines are empty or contain only spaces
  const requireError =
    error && (totalLength === 0 || lines.every((line) => textAreOnlySpaces(line)));

  const onFocus = (index: number) => () => {
    if (!readOnly) setFocusedIndex(index);
  };

  const onBlur = () => {
    setFocusedIndex(null);
  };

  const updateLine = (index: number) => (newValue: string) => {
    // Calculate total length excluding the current line to enforce global maxLength
    const currentTotalWithoutThisLine = lines
      .filter((_, i) => i !== index)
      .join("").length;

    // Prevent update if it would exceed the total character limit
    if (currentTotalWithoutThisLine + newValue.length > maxLength) return;

    const newLines = [...lines];
    newLines[index] = newValue;
    setLines(newLines);
  };

  const addLine = () => {
    if (!readOnly) {
      setLines([...lines, ""]);
      setFocusedIndex(lines.length);
    }
  };

  const removeLine = (index: number) => () => {
    // Always keep at least one line (cannot remove the last remaining line)
    if (!readOnly && lines.length > 1) {
      const newLines = lines.filter((_, i) => i !== index);
      setLines(newLines);
      // Update focus to the previous line if the removed line was focused
      if (focusedIndex === index) {
        setFocusedIndex(Math.max(0, index - 1));
      } else if (focusedIndex !== null && focusedIndex > index) {
        // Adjust focus index if a line above the focused line was removed
        setFocusedIndex(focusedIndex - 1);
      }
    }
  };

  return (
    <div className="relative">
      {lines.map((line, index) => (
        <div key={index} className="relative mb-2 flex items-start gap-2">
          <div className="flex-1">
            <TextareaAutosize
              name={`title-${index}`}
              value={line}
              setValue={updateLine(index)}
              placeholder={index === 0 ? placeholder : `Line ${index + 1}`}
              readOnly={readOnly}
              onFocus={onFocus(index)}
              onBlur={onBlur}
              textareaClassName={cx(
                "font-primary-black text-2xl",
                // Error outline only appears on the first line
                requireError &&
                  index === 0 &&
                  "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
              )}
              autofocus={index === 0}
            />
          </div>
          {/* Remove button appears when there are multiple lines */}
          {!readOnly && lines.length > 1 && (
            <button
              type="button"
              onClick={removeLine(index)}
              className="mt-3 rounded p-1 text-font-subtlest hover:bg-background-input-hovered hover:text-font"
              aria-label="Remove line"
            >
              <BsX size={20} />
            </button>
          )}
        </div>
      ))}
      {!readOnly && (
        <button
          type="button"
          onClick={addLine}
          className="mb-2 flex items-center gap-1 rounded px-2 py-1 font-primary-light text-sm text-font-subtlest hover:bg-background-input-hovered hover:text-font"
        >
          <BsPlus size={16} />
          Add line
        </button>
      )}
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
          {totalLength} / {maxLength}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
