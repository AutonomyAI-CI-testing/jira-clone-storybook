import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_SECOND = 80;

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSecond = DEFAULT_MAX_LENGTH_SECOND,
  error,
  errorSecond,
  placeholder = "Write the title",
  placeholderSecond = "Write additional text",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  // Character count visibility is toggled on focus/blur
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isSecondFocus, setIsSecondFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSecond = secondLine.length >= maxLengthSecond;
  // Show validation error only if the field is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireErrorSecond =
    errorSecond && (secondLine.length === 0 || textAreOnlySpaces(secondLine));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const onFocusSecond = () => {
    if (!readOnly) setIsSecondFocus(true);
  };

  const onBlurSecond = () => setIsSecondFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent input beyond maxLength (silent rejection)
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    // Prevent input beyond maxLengthSecond (silent rejection)
    if (newSecondLine.length > maxLengthSecond) return;

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
          placeholder={placeholderSecond}
          readOnly={readOnly}
          onFocus={onFocusSecond}
          onBlur={onBlurSecond}
          textareaClassName={cx(
            "font-primary text-base",
            requireErrorSecond &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireErrorSecond && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {errorSecond}
          </span>
        )}
        {isSecondFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthSecond ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {secondLine.length} / {maxLengthSecond}
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
  maxLengthSecond?: number;
  error?: string;
  errorSecond?: string;
  placeholder?: string;
  placeholderSecond?: string;
}
