import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initTitleLine2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholderLine2 = "Write the second line",
}: TitleProps): JSX.Element => {
  const [titleLine1, setTitleLine1] = useState<string>(initTitle);
  const [titleLine2, setTitleLine2] = useState<string>(initTitleLine2);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Combined character count across both lines
  const totalLength = titleLine1.length + titleLine2.length;
  const isMaxLength = totalLength >= maxLength;
  // Error shown only when both lines are empty or contain only whitespace
  const requireError =
    error &&
    (titleLine1.length === 0 || textAreOnlySpaces(titleLine1)) &&
    (titleLine2.length === 0 || textAreOnlySpaces(titleLine2));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  // Prevent typing in line 1 if combined length would exceed max
  const updateTitleLine1 = (newTitle: string) => {
    if (newTitle.length + titleLine2.length > maxLength) return;
    setTitleLine1(newTitle);
  };

  // Prevent typing in line 2 if combined length would exceed max
  const updateTitleLine2 = (newTitle: string) => {
    if (titleLine1.length + newTitle.length > maxLength) return;
    setTitleLine2(newTitle);
  };

  return (
    <div className="relative">
      <div className="space-y-2">
        <TextareaAutosize
          name="title"
          value={titleLine1}
          setValue={updateTitleLine1}
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
        <TextareaAutosize
          name="titleLine2"
          value={titleLine2}
          setValue={updateTitleLine2}
          placeholder={placeholderLine2}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
      </div>
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {isFocus && (
        <span
          className={cx(
            "absolute right-0 top-full mt-1 font-primary-light text-sm",
            isMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {totalLength} / {maxLength}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initTitleLine2?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  placeholderLine2?: string;
}
