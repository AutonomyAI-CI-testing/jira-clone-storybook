import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Title starts focused by default for immediate typing
  const [titleFocus, setTitleFocus] = useState<boolean>(true);
  const [subtitleFocus, setSubtitleFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  // Show error only when title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onTitleFocus = () => {
    // Only enable focus state in editable mode
    if (!readOnly) setTitleFocus(true);
  };
  const onTitleBlur = () => setTitleFocus(false);

  const onSubtitleFocus = () => {
    // Only enable focus state in editable mode
    if (!readOnly) setSubtitleFocus(true);
  };
  const onSubtitleBlur = () => setSubtitleFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent input beyond max length
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Prevent input beyond max length
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
          onFocus={onTitleFocus}
          onBlur={onTitleBlur}
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
        {titleFocus && (
          <CharacterCounter
            currentLength={title.length}
            maxLength={maxLength}
            isAtMax={isTitleMaxLength}
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
          textareaClassName="font-primary-medium text-lg text-font-subtlest"
        />
        {subtitleFocus && (
          <CharacterCounter
            currentLength={subtitle.length}
            maxLength={subtitleMaxLength}
            isAtMax={isSubtitleMaxLength}
          />
        )}
      </div>
    </div>
  );
};

/**
 * Character counter component that displays current/max length
 * with visual warning when limit is reached
 */
const CharacterCounter = ({
  currentLength,
  maxLength,
  isAtMax,
}: {
  currentLength: number;
  maxLength: number;
  isAtMax: boolean;
}): JSX.Element => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isAtMax ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {currentLength} / {maxLength}
  </span>
);

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
