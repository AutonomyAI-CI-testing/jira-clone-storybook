import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SECOND_LINE_MAX_LENGTH = 120;

/**
 * Renders a character counter that changes color when limit is reached
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

  const isAtLimit = current >= max;

  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtLimit ? "text-font-danger" : "text-font-subtlest"
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
  secondLineMaxLength = DEFAULT_SECOND_LINE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  secondLinePlaceholder = "Add a second line",
  showSecondLine = true,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  // Title field starts focused to prompt immediate user input
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  // Show error only when title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };
  const onSecondLineBlur = () => setIsSecondLineFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent exceeding max length by rejecting updates that are too long
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    // Prevent exceeding max length by rejecting updates that are too long
    if (newSecondLine.length > secondLineMaxLength) return;

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
        <CharacterCounter
          current={title.length}
          max={maxLength}
          isVisible={isFocus}
        />
      </div>
      {showSecondLine && (
        <div className="relative">
          <TextareaAutosize
            name="secondLine"
            value={secondLine}
            setValue={updateSecondLine}
            placeholder={secondLinePlaceholder}
            readOnly={readOnly}
            onFocus={onSecondLineFocus}
            onBlur={onSecondLineBlur}
            textareaClassName="font-primary text-lg text-font-subtle"
          />
          <CharacterCounter
            current={secondLine.length}
            max={secondLineMaxLength}
            isVisible={isSecondLineFocus}
          />
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  secondLineMaxLength?: number;
  error?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
  showSecondLine?: boolean;
}
