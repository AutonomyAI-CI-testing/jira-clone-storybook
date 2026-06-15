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
  // Controls focus state for character count display
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  // Error is shown only if required and title is empty or just spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div
      className={cx(disabled && "opacity-50 pointer-events-none cursor-not-allowed")}
    >
      <div className="relative">
        {loading ? (
          <div className="h-10 w-full animate-pulse rounded-md bg-background-neutral" />
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
              "font-primary-black text-2xl",
              disabled && "bg-transparent hover:bg-transparent focus-visible:bg-transparent",
              requireError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus
          />
        )}
        {!loading && requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {!loading && isFocus && (
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
      {loading && subtitle ? (
        <div className="mt-1 h-4 w-1/3 animate-pulse rounded bg-background-neutral" />
      ) : (
        subtitle && (
          <p className="mt-1 font-primary-light text-sm text-font-subtlest">{subtitle}</p>
        )
      )}
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
  disabled?: boolean;
  loading?: boolean;
}
