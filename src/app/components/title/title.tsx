import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Helper to determine if error state should be shown.
 * Error is shown only when the error prop is provided AND the field is empty or contains only whitespace.
 */
const hasRequiredError = (value: string, error?: string): boolean => {
  return Boolean(error && (value.length === 0 || textAreOnlySpaces(value)));
};

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSecondLine = DEFAULT_MAX_LENGTH,
  error,
  errorSecondLine,
  placeholder = "Write the title",
  placeholderSecondLine = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isTitleFocused, setIsTitleFocused] = useState<boolean>(true);
  const [isSecondLineFocused, setIsSecondLineFocused] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSecondLineMaxLength = secondLine.length >= maxLengthSecondLine;
  const showTitleError = hasRequiredError(title, error);
  const showSecondLineError = hasRequiredError(secondLine, errorSecondLine);

  const handleTitleFocus = () => {
    if (!readOnly) setIsTitleFocused(true);
  };
  const handleTitleBlur = () => setIsTitleFocused(false);

  const handleSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocused(true);
  };
  const handleSecondLineBlur = () => setIsSecondLineFocused(false);

  // Enforce max length by preventing updates that exceed the limit
  const handleTitleChange = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const handleSecondLineChange = (newSecondLine: string) => {
    if (newSecondLine.length > maxLengthSecondLine) return;
    setSecondLine(newSecondLine);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={handleTitleChange}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={handleTitleFocus}
          onBlur={handleTitleBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            showTitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {showTitleError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isTitleFocused && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isTitleMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>

      <div className="relative">
        <TextareaAutosize
          name="secondLine"
          value={secondLine}
          setValue={handleSecondLineChange}
          placeholder={placeholderSecondLine}
          readOnly={readOnly}
          onFocus={handleSecondLineFocus}
          onBlur={handleSecondLineBlur}
          textareaClassName={cx(
            "font-primary-regular text-lg",
            showSecondLineError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {showSecondLineError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {errorSecondLine}
          </span>
        )}
        {isSecondLineFocused && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSecondLineMaxLength
                ? "text-font-danger"
                : "text-font-subtlest"
            )}
          >
            {secondLine.length} / {maxLengthSecondLine}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  maxLengthSecondLine?: number;
  error?: string;
  errorSecondLine?: string;
  placeholder?: string;
  placeholderSecondLine?: string;
}
