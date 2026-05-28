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
  minRows = 2,
  variant = "default",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Show error only if title is empty or contains only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

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
        minRows={minRows}
        textareaClassName={cx(
          "font-primary-black text-2xl",
          // Apply variant-specific styling: outline adds border, ghost removes background
          variant === "outline" &&
            "border-2 border-border-brand focus-visible:border-border-brand",
          variant === "ghost" &&
            "bg-transparent focus-visible:bg-transparent hover:bg-transparent opacity-80 hover:opacity-100",
          // Error state takes precedence: show red border with danger outline
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
      {/* Character counter: visible when focused, red when at max length */}
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
  minRows?: number;
  variant?: "default" | "outline" | "ghost";
}
