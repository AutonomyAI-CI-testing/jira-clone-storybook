import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Helper component that renders a textarea field with error message and character count.
 * Used for both title and subtitle fields to avoid duplication.
 */
const TextareaField = ({
  name,
  value,
  setValue,
  placeholder,
  readOnly,
  onFocus,
  onBlur,
  maxLength,
  isMaxLength,
  requireError,
  error,
  isFocus,
  textareaClassName,
}: {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  maxLength: number;
  isMaxLength: boolean;
  requireError: boolean;
  error?: string;
  isFocus: boolean;
  textareaClassName: string;
}): JSX.Element => (
  <div className="relative">
    <TextareaAutosize
      name={name}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      textareaClassName={textareaClassName}
      autofocus={name === "title"}
    />
    {requireError && name === "title" && (
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
        {value.length} / {maxLength}
      </span>
    )}
  </div>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
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

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;

    setSubtitle(newSubtitle);
  };

  const errorStyles = requireError
    ? "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
    : "";

  return (
    <div className="space-y-4">
      <TextareaField
        name="title"
        value={title}
        setValue={updateTitle}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        isMaxLength={isMaxLength}
        requireError={requireError}
        error={error}
        isFocus={isFocus}
        textareaClassName={cx("font-primary-black text-2xl", errorStyles)}
      />
      <TextareaField
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={subtitlePlaceholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={subtitleMaxLength}
        isMaxLength={isSubtitleMaxLength}
        requireError={requireError}
        error={error}
        isFocus={isFocus}
        textareaClassName={cx("font-primary-light text-base", errorStyles)}
      />
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  subtitleMaxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
