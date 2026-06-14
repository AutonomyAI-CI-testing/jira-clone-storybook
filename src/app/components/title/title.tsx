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
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
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
<div
  id="testElem"
  className={cx(
    disabled && !loading && "opacity-50 cursor-not-allowed"
  )}
>
  {loading ? (
    <div
      className="animate-pulse rounded-md"
      style={{ height: "40px", width: "100%", backgroundColor: "#DFE1E6" }}
    />
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
  )}
  {loading ? (
    subtitle && (
      <div
        className="animate-pulse rounded"
        style={{ marginTop: "20px", height: "14px", width: "66%", backgroundColor: "#EBECF0" }}
      />
    )
  ) : (
    subtitle && (
      <p className="mt-5 text-sm text-font-subtlest font-primary-light">{subtitle}</p>
    )
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
