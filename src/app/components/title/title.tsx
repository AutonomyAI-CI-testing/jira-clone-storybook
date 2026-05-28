import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSecondLine = "",
  secondLinePlaceholder = "Write the second line",
  maxLengthSecondLine = DEFAULT_MAX_LENGTH,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSecondLine = secondLine.length >= maxLengthSecondLine;

  // Show error only if error prop is provided and title is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  // Prevent exceeding max length by silently ignoring updates that would
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > maxLengthSecondLine) return;
    setSecondLine(newSecondLine);
  };

  return (
    <div className="relative">
      <div className="space-y-2">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            // Red outline indicates error state - shown when error exists and title is empty/whitespace
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        <TextareaAutosize
          name="second-line"
          value={secondLine}
          setValue={updateSecondLine}
          placeholder={secondLinePlaceholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary text-base",
            // Red outline indicates error state - shown when error exists and title is empty/whitespace
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
      </div>
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {/* Character counter - shown when focused, turns red when max length reached */}
      {isFocus && (
        <div className="mt-2 flex justify-end gap-4 font-primary-light text-sm">
          <span
            className={cx(
              isMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
          <span
            className={cx(
              isMaxLengthSecondLine ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {secondLine.length} / {maxLengthSecondLine}
          </span>
        </div>
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
  initSecondLine?: string;
  secondLinePlaceholder?: string;
  maxLengthSecondLine?: number;
}
