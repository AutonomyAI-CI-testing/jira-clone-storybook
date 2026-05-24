import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Character counter displayed when textarea is focused.
 * Turns red when at or exceeding max length.
 */
function CharacterCounter({
  current,
  max,
  isAtMax,
}: {
  current: number;
  max: number;
  isAtMax: boolean;
}): JSX.Element {
  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtMax ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {current} / {max}
    </span>
  );
}

/**
 * Error message display below textarea.
 * Only shown when error prop is provided and field is empty or contains only whitespace.
 */
function ErrorMessage({ message }: { message: string }): JSX.Element {
  return (
    <span className="ml-3 font-primary-light text-sm text-font-danger">
      {message}
    </span>
  );
}

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = 150,
  error,
  subtitleError,
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
    <div className="space-y-3">
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
          <CharacterCounter
            current={title.length}
            max={maxLength}
            isAtMax={isMaxLength}
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
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-light text-sm",
            requireSubtitleError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireSubtitleError && <ErrorMessage message={subtitleError} />}
        {isFocus && (
          <CharacterCounter
            current={subtitle.length}
            max={subtitleMaxLength}
            isAtMax={isSubtitleMaxLength}
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
  subtitleError?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
