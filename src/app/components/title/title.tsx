import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initLine2 = "",
  placeholderLine2 = "Write a subtitle",
  maxLengthLine2 = DEFAULT_MAX_LENGTH,
  errorLine2,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [line2, setLine2] = useState<string>(initLine2);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthLine2 = line2.length >= maxLengthLine2;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireErrorLine2 =
    errorLine2 && (line2.length === 0 || textAreOnlySpaces(line2));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateLine2 = (newLine2: string) => {
    if (newLine2.length > maxLengthLine2) return;

    setLine2(newLine2);
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
          name="line2"
          value={line2}
          setValue={updateLine2}
          placeholder={placeholderLine2}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary text-lg",
            requireErrorLine2 &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireErrorLine2 && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {errorLine2}
          </span>
        )}
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthLine2 ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {line2.length} / {maxLengthLine2}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  initLine2?: string;
  placeholderLine2?: string;
  maxLengthLine2?: number;
  errorLine2?: string;
}
