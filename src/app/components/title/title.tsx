import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

// Character limits for title fields to maintain concise, scannable issue titles
const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SECOND_LINE_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  secondLineMaxLength = DEFAULT_SECOND_LINE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  secondLinePlaceholder = "Add a second line (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  // Title input starts focused to encourage immediate user input
  const [isTitleFocus, setIsTitleFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSecondLineMaxLength = secondLine.length >= secondLineMaxLength;
  // Only show error if title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onTitleFocus = () => {
    if (!readOnly) setIsTitleFocus(true);
  };
  const onTitleBlur = () => setIsTitleFocus(false);

  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };
  const onSecondLineBlur = () => setIsSecondLineFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent input beyond max length instead of truncating
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    // Prevent input beyond max length instead of truncating
    if (newSecondLine.length > secondLineMaxLength) return;
    setSecondLine(newSecondLine);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onTitleFocus}
          onBlur={onTitleBlur}
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
        {isTitleFocus && (
          <CharacterCount
            current={title.length}
            max={maxLength}
            isOverLimit={isTitleMaxLength}
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
          textareaClassName="font-primary-medium text-lg"
        />
        {isSecondLineFocus && (
          <CharacterCount
            current={secondLine.length}
            max={secondLineMaxLength}
            isOverLimit={isSecondLineMaxLength}
          />
        )}
      </div>
    </div>
  );
};

// Helper component for rendering character count indicator
const CharacterCount = ({
  current,
  max,
  isOverLimit,
}: {
  current: number;
  max: number;
  isOverLimit: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isOverLimit ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  secondLineMaxLength?: number;
  error?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
}
