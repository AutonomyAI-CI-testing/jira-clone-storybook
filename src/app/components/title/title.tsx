import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  subtitle,
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  loading,
  disabled,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  // Error is shown if explicit error prop is passed AND (title is empty or just spaces)
  const isMaxLengthReached = title.length >= maxLength;
  const shouldShowError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    // Only allow focus state (for character count display) if interaction is possible
    if (!readOnly && !disabled && !loading) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    // Only allow if within maxLength
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div className={cx(disabled && "opacity-50 cursor-not-allowed")}>
      {loading ? (
        <div className="h-10 w-full animate-pulse rounded bg-background-input" />
      ) : (
        <div className="relative">
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
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus
          />
          {shouldShowError && (
            <span className="ml-3 font-primary-light text-sm text-font-danger">
              {error}
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
      )}
      {subtitle && !loading && (
        <p className="mt-1 ml-3 font-primary-light text-sm text-font-subtlest">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TitleProps {
  loading?: boolean;
  disabled?: boolean;
  initTitle?: string;
  subtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
