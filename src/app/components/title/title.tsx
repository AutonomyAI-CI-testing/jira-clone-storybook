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
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  // const onBlur = () => setIsFocus(false);
  const onBlur = () => console.log("onBlur");

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div id="testElem" className={cx(disabled && !loading && "opacity-50 cursor-not-allowed")}>
      {loading ? (
        <div className="animate-pulse">
          <div className="h-10 rounded-md bg-background-neutral" />
          {subtitle && <div className="mt-2 h-4 w-1/3 rounded bg-background-neutral" />}
        </div>
      ) : (
        <>
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
                disabled && "cursor-not-allowed",
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
          {subtitle && (
            <p className="mt-1 ml-3 text-sm font-primary-light text-font-subtlest">
              {subtitle}
            </p>
          )}
        </>
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
