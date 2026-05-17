import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

/**
 * Character counter display that appears when input is focused.
 * Shows danger color when at or over max length.
 */
const CharacterCounter = ({
  currentLength,
  maxLength,
}: {
  currentLength: number;
  maxLength: number;
}) => {
  const isAtMaxLength = currentLength >= maxLength;
  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtMaxLength ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {currentLength} / {maxLength}
    </span>
  );
};

/**
 * Error message display for validation errors.
 */
const ErrorMessage = ({ message }: { message: string }) => (
  <span className="ml-3 font-primary-light text-sm text-font-danger">
    {message}
  </span>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
  showSubtitle = false,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Show error when field is required but empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  // Focus handlers control visibility of character counter
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  // Prevent input beyond max length by rejecting updates that exceed it
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
        {requireError && <ErrorMessage message={error} />}
        {isFocus && (
          <CharacterCounter currentLength={title.length} maxLength={maxLength} />
        )}
      </div>
      {showSubtitle && (
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
              "font-primary-medium text-base",
              requireSubtitleError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
          />
          {requireSubtitleError && <ErrorMessage message={subtitleError} />}
          {isSubtitleFocus && (
            <CharacterCounter
              currentLength={subtitle.length}
              maxLength={subtitleMaxLength}
            />
          )}
        </div>
      )}
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
  showSubtitle?: boolean;
}
