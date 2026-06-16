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
  disabled,
  loading,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly && !disabled) setIsFocus(true);
  };
  const onBlur = () => {
    if (title.length === 0 || textAreOnlySpaces(title)) {
      // Keep focus if empty or only spaces to ensure a title is provided
      // This is a UI choice to make the title feel "required"
      return;
    }
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div id="testElem" className="flex flex-col gap-1">
      <div className="relative">
        {loading ? (
          <div
            className="h-12 w-full animate-pulse rounded-md bg-elevation-surface-sunken"
            aria-hidden="true"
          />
        ) : (
          <TextareaAutosize
            name="title"
            value={title}
            setValue={updateTitle}
            placeholder={placeholder}
            readOnly={readOnly || disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            textareaClassName={cx(
              "font-primary-black text-2xl transition-all",
              disabled && "cursor-not-allowed opacity-50",
              requireError &&
                "outline outline-2 outline-border-danger focus-visible:outline-border-danger"
            )}
            autofocus
          />
        )}
        {requireError && !loading && (
          <span
            className="ml-3 font-primary-light text-sm text-font-danger"
            role="alert"
          >
            {error}
          </span>
        )}
        {isFocus && !loading && !disabled && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
            aria-live="polite"
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      {subtitle && !loading && (
        <p className="ml-3 pr-12 font-primary-light text-sm text-font-subtlest">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface TitleProps {
  disabled?: boolean;
  loading?: boolean;
  subtitle?: string;
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
