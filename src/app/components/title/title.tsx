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
  variant = "default",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  // Track focus state to show/hide character counter
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Only show error when both the error prop exists AND the input is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Only allow focus state changes when not in read-only mode
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  // Prevent setting title beyond max length to enforce UI constraint
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Calculate line count for display when not in read-only mode
  const lineCount = title.split("\n").length;

  return (
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
          "font-primary-black text-2xl leading-tight",
          variant === "outline" &&
            "border-2 border-border-brand focus-visible:outline-none",
          variant === "ghost" &&
            "bg-transparent text-font-subtlest opacity-70 focus-visible:outline-none focus-visible:opacity-100 focus-visible:text-font",
          requireError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus
      />
      {!readOnly && lineCount > 1 && (
        <div className="mt-1 font-primary-light text-xs text-font-subtlest">
          {lineCount} line{lineCount !== 1 ? "s" : ""}
        </div>
      )}
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

export interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  variant?: "default" | "outline" | "ghost";
}
