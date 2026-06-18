import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export interface TitleProps {
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
}

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitle,
  loading,
  disabled,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  // Using focus state to conditionally show the character counter
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLengthReached = title.length >= maxLength;

  // Error is only displayed if explicitly provided AND the title is empty or only whitespace
  const shouldShowError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled) setIsFocus(true);
  };
  const onBlur = () => {
    // Character counter visibility is currently persistent after first focus in this implementation
  };

  const updateTitle = (newTitle: string) => {
    // Strictly enforce maxLength to prevent invalid data entry
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  if (loading) {
    return (
      <div id="testElem">
        <div
          className="animate-pulse rounded bg-background-neutral"
          style={{ height: "2.5rem", width: "80%" }}
        />
      </div>
    );
  }

  return (
    <div id="testElem">
      <div className={cx("relative", disabled && "opacity-50 cursor-not-allowed")}>
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly || disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            shouldShowError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger",
            disabled && "cursor-not-allowed"
          )}
          autofocus
        />
        {shouldShowError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {subtitle && (
          <span className="ml-3 mt-1 font-primary-light text-sm text-font-subtlest">
            {subtitle}
          </span>
        )}
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthReached ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

