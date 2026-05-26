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
  secondLineError,
  placeholder = "Write the title",
  secondLinePlaceholder = "Write additional text",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const isSecondLineMaxLength = secondLine.length >= secondLineMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSecondLineError =
    secondLineError &&
    (secondLine.length === 0 || textAreOnlySpaces(secondLine));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    if (newSecondLine.length > secondLineMaxLength) return;

    setSecondLine(newSecondLine);
  };

  return (
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
      <TextareaAutosize
        name="secondLine"
        value={secondLine}
        setValue={updateSecondLine}
        placeholder={secondLinePlaceholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-black text-2xl",
          requireSecondLineError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus={false}
      />
      {requireSecondLineError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {secondLineError}
        </span>
      )}
      {isFocus && (
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
  );
};

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  secondLineMaxLength?: number;
  error?: string;
  secondLineError?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
}
