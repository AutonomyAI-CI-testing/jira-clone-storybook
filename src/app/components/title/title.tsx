import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * A flexible Title component used for issue summaries and page headings.
 * Supports auto-sizing textarea, character limit display on focus, and loading/disabled states.
 */
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
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    !!error && (title.length === 0 || textAreOnlySpaces(title));

  const handleFocus = () => {
    if (readOnly || disabled) return;
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  if (loading) {
    return (
      <div className="py-2" data-testid="title-loading">
        <div className="relative">
          <div className="animate-pulse rounded bg-background-neutral-bold h-8 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cx(
        "group relative transition-opacity duration-200",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly || disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl transition-all duration-200",
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
        {isFocused && (
          <span
            className={cx(
              "absolute right-0 top-full mt-1 font-primary-light text-sm",
              isMaxLength ? "text-font-danger font-bold" : "text-font-subtlest"
            )}
            aria-live="polite"
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-5 font-primary-light text-sm text-font-subtle">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TitleProps {
  loading?: boolean;
  disabled?: boolean;
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
