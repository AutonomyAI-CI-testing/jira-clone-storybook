import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Creates a length-limited update handler for text fields.
 * Prevents updates that exceed the maxLength constraint.
 */
const createUpdateHandler = (
  setter: (value: string) => void,
  maxLength: number
) => {
  return (newValue: string) => {
    if (newValue.length > maxLength) return;
    setter(newValue);
  };
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write a subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Start focused to show character counter immediately on mount
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Show error only when title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const updateTitle = createUpdateHandler(setTitle, maxLength);
  const updateSubtitle = createUpdateHandler(setSubtitle, maxLength);

  return (
    <div className="relative">
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
      <div className="mt-2">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName="font-primary-light text-lg text-font-subtlest"
        />
      </div>
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
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
