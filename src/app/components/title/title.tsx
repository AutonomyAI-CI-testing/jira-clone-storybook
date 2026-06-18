import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = (props: TitleProps): JSX.Element => {
  const {
    initTitle = "",
    readOnly,
    maxLength = DEFAULT_MAX_LENGTH,
    error,
    placeholder = "Write the title",
    subtitle,
    loading,
    disabled,
  } = props;
  const [title, setTitle] = useState<string>(initTitle);
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

  return (
    <div
      id="testElem"
      className={cx(
        "pb-6",
        disabled && "pointer-events-none cursor-not-allowed opacity-50"
      )}
    >
      <div className="relative">
        {loading ? (
          /* Pulse skeleton loader for smooth transition during data fetching */
          <div
            className="bg-gray-200 dark:bg-gray-700 h-[40px] w-full animate-pulse rounded"
            style={{ minWidth: "200px" }}
          />
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
                "font-primary-black text-2xl !bg-transparent",
                requireError &&
                  "focus-visible:ring-border-danger ring-2 ring-border-danger",
                disabled &&
                  "!border-0 !border-transparent !ring-0 !outline-none resize-none"
              )}
              autofocus={!disabled && !readOnly}
            />
            {requireError && (
              <span className="ml-3 font-primary-light text-sm text-font-danger">
                {error}
              </span>
            )}
            {/* Character counter shown only when focused and not in read-only/disabled states */}
            {isFocus && !readOnly && !disabled && (
              <span
                className={cx(
                  "absolute right-0 top-full z-10 bg-white px-1 pb-1 font-primary-light text-[10px]",
                  isMaxLength ? "text-font-danger" : "text-font-subtlest"
                )}
                style={{ transform: "translateY(-100%)", marginTop: "-4px" }}
              >
                {title.length} / {maxLength}
              </span>
            )}
          </>
        )}
      </div>
      {subtitle && !loading && (
        <p className="clear-both ml-3 mt-1 font-primary-light text-sm leading-tight text-font-subtlest">
          {subtitle}
        </p>
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
