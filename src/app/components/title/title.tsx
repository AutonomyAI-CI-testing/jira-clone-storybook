import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

/**
 * Character counter component shown when input is focused
 * Turns red when at or above max length to warn user
 */
const CharacterCounter = ({
  current,
  max,
  className,
}: {
  current: number;
  max: number;
  className?: string;
}) => {
  const isAtMax = current >= max;
  return (
    <span
      className={cx(
        "absolute -right-1 top-full mt-1 font-primary-light text-sm",
        isAtMax ? "text-font-danger" : "text-font-subtlest",
        className
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
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write a subtitle (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Show error only when error prop is provided AND title is empty or only whitespace
  const shouldShowError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    // Don't show focus state in read-only mode
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };

  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  const updateTitle = (newTitle: string) => {
    // Prevent input beyond max length
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div className="flex flex-col gap-2">
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
            shouldShowError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {shouldShowError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && (
          <CharacterCounter current={title.length} max={maxLength} />
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
          textareaClassName="font-primary text-lg text-font-subtle"
        />
        {isSubtitleFocus && (
          <CharacterCounter
            current={subtitle.length}
            max={subtitleMaxLength}
          />
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
  subtitleMaxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
