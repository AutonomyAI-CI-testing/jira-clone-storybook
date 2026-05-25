import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Displays character count with danger styling when max length is reached.
 * Only visible while textarea is focused.
 */
const CharacterCount = ({
  current,
  max,
}: {
  current: number;
  max: number;
}): JSX.Element => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      current >= max ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSubtitle = DEFAULT_MAX_LENGTH,
  error,
  errorSubtitle,
  placeholder = "Write the title",
  placeholderSubtitle = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Validation helpers for better readability
  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSubtitle = subtitle.length >= maxLengthSubtitle;

  // Show error if field is empty or only contains whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireErrorSubtitle =
    errorSubtitle && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  // Track focus state to show character counters. Prevent setting focus when read-only.
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  // Update handlers enforce max length limits by rejecting input that would exceed the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLengthSubtitle) return;
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
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && <CharacterCount current={title.length} max={maxLength} />}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={placeholderSubtitle}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-light text-base",
            requireErrorSubtitle &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireErrorSubtitle && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {errorSubtitle}
          </span>
        )}
        {isFocus && (
          <CharacterCount current={subtitle.length} max={maxLengthSubtitle} />
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  maxLengthSubtitle?: number;
  error?: string;
  errorSubtitle?: string;
  placeholder?: string;
  placeholderSubtitle?: string;
}
