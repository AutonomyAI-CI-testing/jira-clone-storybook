import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

const SKELETON_CLASSNAME = "animate-pulse bg-background-neutral rounded-md h-10 w-full";

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

  // Toggle focus state to control visibility of character count and extra spacing
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    // Enforce max length constraint
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div
      id="testElem"
      className={cx(disabled && "opacity-40 cursor-not-allowed")}
    >
      {loading ? (
        <div className={SKELETON_CLASSNAME} />
      ) : (
        <div className={cx("relative", subtitle && isFocus && "pb-5")}>
          <TextareaAutosize
            name="title"
            value={title}
            setValue={updateTitle}
            placeholder={placeholder}
            readOnly={readOnly}
            onFocus={onFocus}
            onBlur={onBlur}
            textareaClassName={cx(
              "font-primary-black text-2xl",
              requireError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus
            disabled={disabled}
          />
          {requireError && (
            <span className="ml-3 font-primary-light text-sm text-font-danger">
              {error}
            </span>
          )}
          {isFocus && !disabled && !loading && !readOnly && (
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
      {subtitle && !loading && (
        <p className="ml-3 mt-1 font-primary-light text-sm text-font-subtlest">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subtitle?: string;
}