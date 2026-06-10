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
  // Track focus state to show/hide the character counter
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  
  // Show error only if error message is provided AND title is empty/whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    // Only show counter on focus if not in read-only mode
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent exceeding max length
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly || loading || disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            loading && "animate-pulse",
            disabled && "opacity-50 cursor-not-allowed",
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {subtitle && (
          <p className="font-primary-light text-sm text-font-subtlest">
            {subtitle}
          </p>
        )}
      </div>

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
