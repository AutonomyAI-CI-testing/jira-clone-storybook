import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_SECOND_LINE = 100;

/**
 * Determines if a validation error should be shown based on error message and input value.
 * Error is shown only when the input is empty or contains only whitespace.
 */
const shouldShowError = (error: string | undefined, value: string): boolean => {
  return Boolean(error && (value.length === 0 || textAreOnlySpaces(value)));
};

/**
 * Shared error message display component.
 */
const ErrorMessage = ({ message }: { message: string }) => (
  <span className="ml-3 font-primary-light text-sm text-font-danger">
    {message}
  </span>
);

/**
 * Character counter display component.
 * Shows current length vs max length, with danger styling when limit is reached.
 */
const CharacterCounter = ({
  current,
  max,
  isMaxLength,
}: {
  current: number;
  max: number;
  isMaxLength: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isMaxLength ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

/**
 * Returns the error outline classes when validation fails.
 * The outline is shown with danger color to highlight required fields.
 */
const getErrorOutlineClasses = (hasError: boolean): string => {
  return cx(
    hasError &&
      "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
  );
};

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  showSecondLine = false,
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
  // Title field starts focused to allow immediate typing when component mounts
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSecondLine = secondLine.length >= maxLengthSecondLine;
  const requireError = shouldShowError(error, title);
  const requireErrorSecondLine = shouldShowError(errorSecondLine, secondLine);

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };

  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };
  const onSecondLineBlur = () => {
    setIsSecondLineFocus(false);
  };

  // Enforce max length by rejecting updates that exceed the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > maxLengthSecondLine) return;

    setSecondLine(newSecondLine);
  };

  return (
    <div className="space-y-1">
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
            getErrorOutlineClasses(requireError)
          )}
          autofocus
        />
        {requireError && error && <ErrorMessage message={error} />}
        {isFocus && (
          <CharacterCounter
            current={title.length}
            max={maxLength}
            isMaxLength={isMaxLength}
          />
        )}
      </div>
      {showSecondLine && (
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
              getErrorOutlineClasses(requireErrorSecondLine)
            )}
          />
          {requireErrorSecondLine && errorSecondLine && (
            <ErrorMessage message={errorSecondLine} />
          )}
          {isSecondLineFocus && (
            <CharacterCounter
              current={secondLine.length}
              max={maxLengthSecondLine}
              isMaxLength={isMaxLengthSecondLine}
            />
          )}
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  showSecondLine?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  maxLengthSecondLine?: number;
  error?: string;
  errorSecondLine?: string;
  placeholder?: string;
  placeholderSecondLine?: string;
}
