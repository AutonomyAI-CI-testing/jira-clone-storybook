import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

// Character counter display for title and subtitle inputs.
// Shows the current character count and max length, with danger color when at max.
const CharacterCounter = ({
  currentLength,
  maxLength,
}: {
  currentLength: number;
  maxLength: number;
}): JSX.Element => {
  const isAtMaxLength = currentLength >= maxLength;

  return (
    <span
      className={cx(
        "block font-primary-light text-sm",
        isAtMaxLength ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {currentLength} / {maxLength}
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
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // CSS classes for error state styling on textarea inputs
  const errorOutlineStyles =
    "focus-visible:outline-border-danger outline outline-2 outline-border-danger";

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
          requireError && errorOutlineStyles
        )}
        autofocus
      />
      <TextareaAutosize
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={subtitlePlaceholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          "font-primary-light text-base",
          requireError && errorOutlineStyles
        )}
      />
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {isFocus && (
        <div className="mt-1 space-y-1">
          <CharacterCounter currentLength={title.length} maxLength={maxLength} />
          <CharacterCounter currentLength={subtitle.length} maxLength={subtitleMaxLength} />
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
}
