import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

interface ErrorAndCounterProps {
  shouldShowError: boolean;
  errorMessage?: string;
  currentLength: number;
  maxLength: number;
  isFocused: boolean;
}

function ErrorAndCounter({
  shouldShowError,
  errorMessage,
  currentLength,
  maxLength,
  isFocused,
}: ErrorAndCounterProps) {
  const isAtMaxLength = currentLength >= maxLength;

  return (
    <>
      {shouldShowError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {errorMessage}
        </span>
      )}
      {isFocused && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isAtMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {currentLength} / {maxLength}
        </span>
      )}
    </>
  );
}

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Add description",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // isFocus tracks whether the user is actively editing to show character counters
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Only show error if an error message is provided AND the field is empty or contains only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

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

  return (
    <div className="space-y-2">
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
        <ErrorAndCounter
          shouldShowError={!!requireError}
          errorMessage={error}
          currentLength={title.length}
          maxLength={maxLength}
          isFocused={isFocus}
        />
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary text-sm",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        <ErrorAndCounter
          shouldShowError={!!requireSubtitleError}
          errorMessage={subtitleError}
          currentLength={subtitle.length}
          maxLength={subtitleMaxLength}
          isFocused={isFocus}
        />
      </div>
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
