import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_SECOND = 80;

/**
 * Character counter that appears when the field is focused.
 * Shows red when at or over max length to warn the user.
 */
const CharacterCounter = ({
  current,
  max,
  isVisible,
}: {
  current: number;
  max: number;
  isVisible: boolean;
}) => {
  if (!isVisible) return null;

  const isAtMax = current >= max;

  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtMax ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {current} / {max}
    </span>
  );
};

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSecond = DEFAULT_MAX_LENGTH_SECOND,
  error,
  placeholder = "Write the title",
  placeholderSecond = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondFocus, setIsSecondFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSecond = secondLine.length >= maxLengthSecond;

  // Show error only when title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onSecondFocus = () => {
    if (!readOnly) setIsSecondFocus(true);
  };

  const onSecondBlur = () => {
    setIsSecondFocus(false);
  };

  // Prevent exceeding max length — silently ignore additional characters
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > maxLengthSecond) return;
    setSecondLine(newSecondLine);
  };

  return (
    <div className="space-y-4">
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
        <CharacterCounter
          current={title.length}
          max={maxLength}
          isVisible={isFocus}
        />
      </div>
      <div className="relative">
        <TextareaAutosize
          name="secondLine"
          value={secondLine}
          setValue={updateSecondLine}
          placeholder={placeholderSecond}
          readOnly={readOnly}
          onFocus={onSecondFocus}
          onBlur={onSecondBlur}
          textareaClassName="font-primary-black text-xl"
        />
        <CharacterCounter
          current={secondLine.length}
          max={maxLengthSecond}
          isVisible={isSecondFocus}
        />
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  maxLengthSecond?: number;
  error?: string;
  placeholder?: string;
  placeholderSecond?: string;
}
