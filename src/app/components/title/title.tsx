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
  // Only show the character counter when focused and not in a restricted state
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  if (loading) {
    return (
      <div id="testElem" style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "4px" }}>
        <div
          className="animate-pulse rounded-md"
          style={{ backgroundColor: "rgba(148,163,184,0.45)", height: "36px", width: "75%" }}
        />
        <div
          className="animate-pulse rounded-md"
          style={{ backgroundColor: "rgba(148,163,184,0.28)", height: "16px", width: "50%" }}
        />
      </div>
    );
  }

  return (
    <div
      id="testElem"
      className={cx(disabled && "opacity-50 cursor-not-allowed")}
    >
      <div className="relative pb-5">
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
            disabled && "cursor-not-allowed",
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && !disabled && (
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
      {subtitle && (
        <p className="text-sm text-font-subtlest font-primary-light mt-1 ml-3">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  subtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
}
