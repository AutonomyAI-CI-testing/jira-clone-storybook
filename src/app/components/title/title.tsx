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
  error,
  placeholder = "Write the title",
  secondLinePlaceholder = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSecondLineMaxLength = secondLine.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus management: ensure only one field shows the character counter at a time
  const onFocus = () => {
    if (!readOnly) {
      setIsFocus(true);
      setIsSecondLineFocus(false);
    }
  };

  const onSecondLineFocus = () => {
    if (!readOnly) {
      setIsSecondLineFocus(true);
      setIsFocus(false);
    }
  };

  // Blur handlers intentionally empty to keep character counter visible
  // for better UX — removing them would hide the counter on blur
  const onBlur = () => {};

  const onSecondLineBlur = () => {};

  const updateTitle = (newTitle: string) => {
    // Prevent exceeding max length
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    // Prevent exceeding max length
    if (newSecondLine.length > maxLength) return;

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
            {secondLine.length} / {maxLength}
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
  error?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
}
