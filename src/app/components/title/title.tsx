import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Field component for rendering a textarea with character counter and error state.
 * Extracts duplicated title/subtitle field rendering logic.
 */
const TitleField = ({
  name,
  value,
  placeholder,
  maxLength,
  showCounter,
  readOnly,
  hasError,
  errorMessage,
  isAtMaxLength,
  onFocus,
  onBlur,
  onChange,
}: {
  name: string;
  value: string;
  placeholder: string;
  maxLength: number;
  showCounter: boolean;
  readOnly?: boolean;
  hasError: boolean;
  errorMessage?: string;
  isAtMaxLength: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
}) => (
  <div className="relative">
    <TextareaAutosize
      name={name}
      value={value}
      setValue={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      textareaClassName={cx(
        "font-primary-black text-2xl",
        hasError &&
          "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
      )}
      autofocus={name === "title"}
    />
    {hasError && errorMessage && (
      <span className="ml-3 font-primary-light text-sm text-font-danger">
        {errorMessage}
      </span>
    )}
    {showCounter && (
      <span
        className={cx(
          "absolute right-0 top-full font-primary-light text-sm",
          isAtMaxLength ? "text-font-danger" : "text-font-subtlest"
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
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const subtitleIsMaxLength = subtitle.length >= subtitleMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const subtitleRequireError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;

    setSubtitle(newSubtitle);
  };

  return (
    <div className="space-y-4">
      <TitleField
        name="title"
        value={title}
        placeholder={placeholder}
        maxLength={maxLength}
        showCounter={isFocus}
        readOnly={readOnly}
        hasError={requireError}
        errorMessage={error}
        isAtMaxLength={isMaxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={updateTitle}
      />
      <TitleField
        name="subtitle"
        value={subtitle}
        placeholder={subtitlePlaceholder}
        maxLength={subtitleMaxLength}
        showCounter={isFocus}
        readOnly={readOnly}
        hasError={subtitleRequireError}
        errorMessage={subtitleError}
        isAtMaxLength={subtitleIsMaxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={updateSubtitle}
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
  subtitleError?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
