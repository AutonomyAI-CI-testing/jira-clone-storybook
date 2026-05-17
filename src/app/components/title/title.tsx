import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 200;

/**
 * Checks if a field should display an error state.
 * Error is shown when an error message exists and the field is empty or contains only whitespace.
 */
const shouldShowError = (errorMessage: string | undefined, value: string): boolean => {
  return !!(errorMessage && (value.length === 0 || textAreOnlySpaces(value)));
};

/**
 * Character counter component displayed when a field is focused.
 * Shows current length and max length, with danger styling when limit is reached.
 */
const CharacterCounter = ({
  current,
  max,
  isAtLimit,
}: {
  current: number;
  max: number;
  isAtLimit: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isAtLimit ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSubtitle = "",
  subtitlePlaceholder = "Write the subtitle",
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  subtitleError,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  // Title field starts focused to allow immediate editing
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const requireError = shouldShowError(error, title);
  
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireSubtitleError = shouldShowError(subtitleError, subtitle);

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  const updateTitle = (newTitle: string) => {
    // Enforce max length by rejecting updates that exceed the limit
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Enforce max length by rejecting updates that exceed the limit
    if (newSubtitle.length > subtitleMaxLength) return;

    setSubtitle(newSubtitle);
  };

  return (
    <div className="flex flex-col gap-4">
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
        {isFocus && (
          <CharacterCounter
            current={title.length}
            max={maxLength}
            isAtLimit={isMaxLength}
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
            "font-primary-regular text-lg",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireSubtitleError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {subtitleError}
          </span>
        )}
        {isSubtitleFocus && (
          <CharacterCounter
            current={subtitle.length}
            max={subtitleMaxLength}
            isAtLimit={isSubtitleMaxLength}
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
  subtitlePlaceholder?: string;
  subtitleMaxLength?: number;
  subtitleError?: string;
}
