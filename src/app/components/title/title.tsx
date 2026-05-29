import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  subtitle,
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  // Start with focus visible to show the character counter immediately, giving users visibility into the max length constraint
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Display error only if an error prop is provided AND the title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    // Only show focus indicator when not in read-only mode
    if (!readOnly) setIsFocus(true);
  };
  
  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent setting title if it exceeds the max length constraint
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  return (
    <div className="relative">
      <div>
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
        {subtitle && (
          <p className="mt-1 font-primary-light text-sm text-font-subtlest">
            {subtitle}
          </p>
        )}
      </div>
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
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
  subtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
}
