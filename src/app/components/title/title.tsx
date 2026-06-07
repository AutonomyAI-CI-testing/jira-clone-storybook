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
  loading,
  disabled,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Only allow focus state to be managed if not in readOnly mode
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div
      id="testElem"
      className={cx(disabled && !loading && "cursor-not-allowed opacity-50")}
    >
      <div className="relative">
        {/* Show loading skeleton or textarea based on loading state */}
        {loading ? (
          <div className="h-10 w-full animate-pulse rounded-md bg-background-neutral" />
        ) : (
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
              requireError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus
          />
        )}
        {/* Display error message only when not loading and validation fails */}
        {!loading && requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {/* Show character count only when focused and not disabled/loading */}
        {!loading && !disabled && isFocus && (
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
      {/* Loading state subtitle skeleton */}
      {loading && subtitle && (
        <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-background-neutral" />
      )}
      {/* Subtitle text displayed when not loading */}
      {!loading && subtitle && (
        <p className="ml-3 mt-1 font-primary-light text-sm text-font-subtlest">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subtitle?: string;
  loading?: boolean;
  disabled?: boolean;
}
