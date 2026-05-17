import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_SECOND_LINE = 120;

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSecondLine = DEFAULT_MAX_LENGTH_SECOND_LINE,
  error,
  errorSecondLine,
  placeholder = "Write the title",
  placeholderSecondLine = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  // Validation states for both input fields
  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSecondLine = secondLine.length >= maxLengthSecondLine;

  // Show error only when error prop is provided and field is empty or contains only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireErrorSecondLine =
    errorSecondLine &&
    (secondLine.length === 0 || textAreOnlySpaces(secondLine));

  // Focus handlers for title field
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  // Focus handlers for second line field
  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };

  const onSecondLineBlur = () => {
    setIsSecondLineFocus(false);
  };

  // Update handlers that enforce max length limits
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > maxLengthSecondLine) return;
    setSecondLine(newSecondLine);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
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
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && (
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
      <div className="relative">
        <TextareaAutosize
          name="secondLine"
          value={secondLine}
          setValue={updateSecondLine}
          placeholder={placeholderSecondLine}
          readOnly={readOnly}
          onFocus={onSecondLineFocus}
          onBlur={onSecondLineBlur}
          textareaClassName={cx(
            "font-primary-medium text-lg",
            requireErrorSecondLine &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireErrorSecondLine && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {errorSecondLine}
          </span>
        )}
        {isSecondLineFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthSecondLine ? "text-font-danger" : "text-font-subtlest"
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
