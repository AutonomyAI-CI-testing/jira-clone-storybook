import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  secondLineMaxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  secondLinePlaceholder = "Write the second line",
  showSecondLine = false,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  // Flag to highlight character counter in danger color when at max length
  const isMaxLength = title.length >= maxLength;
  const isSecondLineMaxLength = secondLine.length >= secondLineMaxLength;

  // Only show error message if error prop exists and title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Track focus state to show character counters only when focused
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => {
    if (!readOnly) setIsFocus(false);
  };

  // Track second line focus state independently for its character counter
  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };
  const onSecondLineBlur = () => {
    if (!readOnly) setIsSecondLineFocus(false);
  };

  // Enforce max length constraint on title input
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Enforce max length constraint on second line input
  const updateSecondLine = (newSecondLine: string) => {
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
            textareaClassName="font-primary-black text-2xl"
          />
          {isSecondLineFocus && (
            <span
              className={cx(
                "absolute right-0 top-full font-primary-light text-sm",
                isSecondLineMaxLength ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {secondLine.length} / {secondLineMaxLength}
            </span>
          )}
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
