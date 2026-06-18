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
    if (!readOnly && !disabled) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div id="testElem">
      {loading ? (
        <div className="animate-pulse rounded-md" style={{ height: "40px", minWidth: "280px", width: "100%", backgroundColor: "#e5e7eb" }} />
      ) : (
        <>
          <div className={cx(
            "relative",
            disabled && "opacity-50 pointer-events-none"
          )}>
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
            />
            {requireError && (
              <span className="ml-3 font-primary-light text-sm text-font-danger">
                {error}
              </span>
            )}
            {isFocus && !disabled && (
              <span
                className={cx(
                  "block text-right font-primary-light text-sm",
                  isMaxLength ? "text-font-danger" : "text-font-subtlest"
                )}
              >
                {title.length} / {maxLength}
              </span>
            )}
          </div>
          {subtitle && (
            <div className={cx(
              "text-sm text-font-subtlest font-primary-light mt-1 px-3",
              disabled && "opacity-50"
              )}>
              {subtitle}
            </div>
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
