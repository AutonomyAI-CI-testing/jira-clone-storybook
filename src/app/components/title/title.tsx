import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Displays a character counter for a text field.
 * Shows count in danger color when at or over max length.
 */
const CharacterCounter = ({
  current,
  max,
}: {
  current: number;
  max: number;
}) => {
  const isAtLimit = current >= max;
  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtLimit ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {current} / {max}
    </span>
  );
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle (optional)",
  showSubtitle = false,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Title starts focused by default to encourage immediate input
  const [isTitleFocused, setIsTitleFocused] = useState<boolean>(true);
  const [isSubtitleFocused, setIsSubtitleFocused] = useState<boolean>(false);

  // Validation: empty or whitespace-only titles trigger error state
  const hasError = error && (title.length === 0 || textAreOnlySpaces(title));

  const handleTitleChange = (newTitle: string) => {
    // Enforce max length by blocking input beyond limit
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const handleSubtitleChange = (newSubtitle: string) => {
    // Enforce max length by blocking input beyond limit
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  const handleTitleFocus = () => {
    if (!readOnly) setIsTitleFocused(true);
  };

  const handleTitleBlur = () => {
    setIsTitleFocused(false);
  };

  const handleSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocused(true);
  };

  const handleSubtitleBlur = () => {
    setIsSubtitleFocused(false);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={handleTitleChange}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={handleTitleFocus}
          onBlur={handleTitleBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            hasError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {hasError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isTitleFocused && (
          <CharacterCounter current={title.length} max={maxLength} />
        )}
      </div>
      {showSubtitle && (
        <div className="relative">
          <TextareaAutosize
            name="subtitle"
            value={subtitle}
            setValue={handleSubtitleChange}
            placeholder={subtitlePlaceholder}
            readOnly={readOnly}
            onFocus={handleSubtitleFocus}
            onBlur={handleSubtitleBlur}
            textareaClassName="font-primary-medium text-lg text-font-subtler"
          />
          {isSubtitleFocused && (
            <CharacterCounter
              current={subtitle.length}
              max={subtitleMaxLength}
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
  placeholder?: string;
  subtitlePlaceholder?: string;
  showSubtitle?: boolean;
}
