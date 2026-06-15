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
  subtitle,
  disabled,
  loading,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // Derived state for validation and UI feedback
  const isMaxLengthReached = title.length >= maxLength;
  const hasError = error && (title.length === 0 || textAreOnlySpaces(title));

  const handleFocus = () => {
    if (!readOnly) setIsFocused(true);
  };
  const handleBlur = () => setIsFocused(false);

  const handleTitleUpdate = (newTitle: string) => {
    // Only update if within limits. Clamping or rejecting is a design choice.
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  if (loading) {
    return (
      <div id="testElem">
        <div className="relative pb-5">
          <div className="h-[40px] w-full animate-pulse rounded-md bg-elevation-surface-sunken" />
        </div>
        {subtitle && (
          <div className="mt-1 h-4 w-48 animate-pulse rounded bg-elevation-surface-sunken" />
        )}
      </div>
    );
  }

  return (
    <div id="testElem" aria-disabled={disabled}>
      <div className="relative pb-5">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={handleTitleUpdate}
          placeholder={placeholder}
          readOnly={readOnly || disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            hasError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          autofocus
        />
        {hasError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocused && !disabled && (
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
      {subtitle && (
        <p className="mt-1 text-sm text-font-subtlest font-primary-light">{subtitle}</p>
      )}
    </div>
  );
};

interface TitleProps {
  disabled?: boolean;
  loading?: boolean;
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
