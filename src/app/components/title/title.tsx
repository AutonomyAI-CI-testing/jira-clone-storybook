import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Checks if the title should show an error.
 * Returns true when error prop is set and title is either empty or contains only whitespace.
 */
const shouldShowError = (error: string | undefined, title: string): boolean => {
  return !!(error && (title.length === 0 || textAreOnlySpaces(title)));
};

/**
 * Character counter component displayed when a field is focused.
 * Shows current/max character count, with danger styling when at limit.
 */
const CharacterCounter = ({
  current,
  max,
  isAtLimit,
}: {
  current: number;
  max: number;
  isAtLimit: boolean;
}): JSX.Element => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isAtLimit ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  secondLinePlaceholder = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  // Title field starts focused to allow immediate editing
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const requireError = shouldShowError(error, title);

  // Only show character counter in editable mode — read-only fields don't need it
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };

  const onSecondLineBlur = () => setIsSecondLineFocus(false);

  // Enforces character limit by preventing updates that exceed maxLength
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > maxLength) return;

    setSecondLine(newSecondLine);
  };

  const isSecondLineMaxLength = secondLine.length >= maxLength;

  return (
    <div className="space-y-2">
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
          <CharacterCounter
            current={title.length}
            max={maxLength}
            isAtLimit={isMaxLength}
          />
        )}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="secondLine"
          value={secondLine}
          setValue={updateSecondLine}
          placeholder={secondLinePlaceholder}
          readOnly={readOnly}
          onFocus={onSecondLineFocus}
          onBlur={onSecondLineBlur}
          textareaClassName="font-primary-black text-2xl"
        />
        {isSecondLineFocus && (
          <CharacterCounter
            current={secondLine.length}
            max={maxLength}
            isAtLimit={isSecondLineMaxLength}
          />
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
  error?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
}
