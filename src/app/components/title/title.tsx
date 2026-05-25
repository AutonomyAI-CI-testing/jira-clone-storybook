import { useState } from "react";
import cx from "classix"; // Used by CharacterCounter component
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

/**
 * CharacterCounter displays the current character count and max length.
 * Shows in danger color when at max length.
 */
interface CharacterCounterProps {
  currentLength: number;
  maxLength: number;
  isMaxLength: boolean;
}

const CharacterCounter = ({
  currentLength,
  maxLength,
  isMaxLength,
}: CharacterCounterProps) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isMaxLength ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {currentLength} / {maxLength}
  </span>
);

/**
 * ErrorMessage displays validation error text below the input field.
 */
interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => (
  <span className="ml-3 font-primary-light text-sm text-font-danger">
    {error}
  </span>
);

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSubtitle = "",
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  subtitleError,
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => {
    if (!readOnly) setIsFocus(false);
  };

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onSubtitleBlur = () => {
    if (!readOnly) setIsSubtitleFocus(false);
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
        {requireError && <ErrorMessage error={error!} />}
        {isFocus && (
          <CharacterCounter
            currentLength={title.length}
            maxLength={maxLength}
            isMaxLength={isMaxLength}
          />
        )}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName={cx(
            "font-primary text-lg",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireSubtitleError && <ErrorMessage error={subtitleError!} />}
        {isSubtitleFocus && (
          <CharacterCounter
            currentLength={subtitle.length}
            maxLength={subtitleMaxLength}
            isMaxLength={isSubtitleMaxLength}
          />
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  initSubtitle?: string;
  subtitleMaxLength?: number;
  subtitleError?: string;
  subtitlePlaceholder?: string;
}
