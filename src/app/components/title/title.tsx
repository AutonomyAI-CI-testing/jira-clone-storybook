import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const MAX_LINES = 5;

export const Title = ({
  initTitle = [""],
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
}: TitleProps): JSX.Element => {
  const [titleLines, setTitleLines] = useState<string[]>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Calculate total character count across all lines for max length validation
  const getTotalLength = () =>
    titleLines.reduce((sum, line) => sum + line.length, 0);
  const isMaxLength = getTotalLength() >= maxLength;
  const requireError =
    error &&
    (getTotalLength() === 0 ||
      titleLines.every((line) => textAreOnlySpaces(line)));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateLine = (index: number) => (newValue: string) => {
    const newLines = [...titleLines];
    // Prevent update if it would exceed the total character limit across all lines
    if (getTotalLength() - newLines[index].length + newValue.length > maxLength)
      return;

    newLines[index] = newValue;
    setTitleLines(newLines);
  };

  const addLine = () => {
    if (titleLines.length < MAX_LINES) {
      setTitleLines([...titleLines, ""]);
    }
  };

  const removeLine = (index: number) => {
    if (titleLines.length > 1) {
      const newLines = titleLines.filter((_, i) => i !== index);
      setTitleLines(newLines);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      {titleLines.map((line, index) => (
        <div key={index} className="relative flex items-start gap-2">
          <TextareaAutosize
            name={`title-${index}`}
            value={line}
            setValue={updateLine(index)}
            placeholder={index === 0 ? placeholder : `Line ${index + 1}`}
            readOnly={readOnly}
            onFocus={onFocus}
            onBlur={onBlur}
            textareaClassName={cx(
              "font-primary-black text-2xl",
              requireError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus={index === 0}
          />
          {!readOnly && titleLines.length > 1 && (
            <button
              type="button"
              onClick={() => removeLine(index)}
              className="mt-3 rounded px-2 py-1 text-sm text-font-subtlest hover:bg-background-neutral-hovered"
              aria-label={`Remove line ${index + 1}`}
            >
              ×
            </button>
          )}
        </div>
      ))}
      {!readOnly && titleLines.length < MAX_LINES && (
        <button
          type="button"
          onClick={addLine}
          className="self-start rounded bg-background-neutral px-3 py-1 text-sm text-font hover:bg-background-neutral-hovered"
        >
          + Add line
        </button>
      )}
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {isFocus && (
        <span
          className={cx(
            "font-primary-light text-sm",
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
  initTitle?: string[];
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
