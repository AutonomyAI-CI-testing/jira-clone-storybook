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
  // First line starts focused to allow immediate typing
  const [isFocusFirstLine, setIsFocusFirstLine] = useState<boolean>(true);
  const [isFocusSecondLine, setIsFocusSecondLine] = useState<boolean>(false);

  const isMaxLengthFirstLine = title.length >= maxLength;
  const isMaxLengthSecondLine = secondLine.length >= maxLength;

  // Show error only when the field is truly empty (no content or only whitespace)
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Prevent focus UI from appearing in read-only mode
  const onFocusFirstLine = () => {
    if (!readOnly) setIsFocusFirstLine(true);
  };

  const onBlurFirstLine = () => {
    setIsFocusFirstLine(false);
  };

  const onFocusSecondLine = () => {
    if (!readOnly) setIsFocusSecondLine(true);
  };

  const onBlurSecondLine = () => {
    setIsFocusSecondLine(false);
  };

  // Enforce maxLength by rejecting updates that exceed the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
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
          onFocus={onFocusFirstLine}
          onBlur={onBlurFirstLine}
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
        {isFocusFirstLine && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthFirstLine ? "text-font-danger" : "text-font-subtlest"
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
          onFocus={onFocusSecondLine}
          onBlur={onBlurSecondLine}
          textareaClassName="font-primary-black text-2xl"
        />
        {isFocusSecondLine && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthSecondLine ? "text-font-danger" : "text-font-subtlest"
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
