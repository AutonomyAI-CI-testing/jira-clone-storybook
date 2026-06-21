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
  disabled
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Derived state to check if the max length limit is reached
  const isMaxLengthReached = title.length >= maxLength;
  // Error is shown when provided and the title is empty or only whitespace
  const shouldShowError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled && !loading) {
      setIsFocus(true);
    }
  };

  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div className="w-full">
      <div className="relative">
      <TextareaAutosize
        name="title"
        value={title}
        setValue={updateTitle}
        placeholder={placeholder}
        readOnly={readOnly || disabled || loading}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-black text-2xl w-full",
          shouldShowError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger",
          disabled && "opacity-50 cursor-not-allowed bg-background-input",
          loading && "animate-pulse opacity-60 cursor-wait"
        )}
        autofocus={!readOnly && !disabled && !loading}
      />
      {shouldShowError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {isFocus && !disabled && !loading && !readOnly && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLengthReached ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {title.length} / {maxLength}
        </span>
      )}
      {disabled && (
        <span className="ml-3 font-primary-light text-xs text-font-subtlest italic">Disabled</span>
      )}
      {loading && (
        <span className="ml-3 font-primary-light text-xs text-font-subtlest italic">Loading…</span>
      )}
      </div>
      {subtitle && (
        <p className="mt-5 ml-3 font-primary-light text-sm text-font-subtlest">{subtitle}</p>
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
