import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  subtitle,
  loading,
  disabled,

  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled && !loading) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div id="testElem" className={cx(disabled && !loading && "cursor-not-allowed opacity-50")}>
      <div className="relative">
        {loading ? (
          <>
            <div className="animate-pulse rounded-md bg-elevation-surface-sunken" style={{ height: "36px", width: "256px" }} />
            {subtitle && (
              <div className="ml-3 mt-2 animate-pulse rounded bg-elevation-surface-sunken" style={{ height: "16px", width: "160px" }} />
            )}
          </>
        ) : (
          <>
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
            />
            {requireError && (
              <span className="ml-3 font-primary-light text-sm text-font-danger">
                {error}
              </span>
            )}
            {subtitle && (
              <p className="ml-3 mt-1 font-primary-light text-sm text-font-subtlest">
                {subtitle}
              </p>
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
          </>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
}
