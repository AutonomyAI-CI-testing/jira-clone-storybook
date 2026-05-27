import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

interface CharacterCounterProps {
  isFocus: boolean;
  currentLength: number;
  maxLength: number;
  isMaxLength: boolean;
}

const CharacterCounter = ({
  isFocus,
  currentLength,
  maxLength,
  isMaxLength,
}: CharacterCounterProps): JSX.Element | null => {
  if (!isFocus) return null;

  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isMaxLength ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {currentLength} / {maxLength}
    </span>
  );
};

interface ErrorMessageProps {
  error?: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps): JSX.Element | null => {
  if (!error) return null;

  return (
    <span className="ml-3 font-primary-light text-sm text-font-danger">
      {error}
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
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const subtitleRequireError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  // Blur handlers: do not reset focus state on blur to keep showing the character count
  const onBlur = () => {
    // Focus state remains unchanged
  };
  const onSubtitleBlur = () => {
    // Focus state remains unchanged
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
        <ErrorMessage error={requireError ? error : undefined} />
        <CharacterCounter
          isFocus={isFocus}
          currentLength={title.length}
          maxLength={maxLength}
          isMaxLength={isMaxLength}
        />
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
            "font-primary-black text-2xl",
            subtitleRequireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        <ErrorMessage error={subtitleRequireError ? subtitleError : undefined} />
        <CharacterCounter
          isFocus={isSubtitleFocus}
          currentLength={subtitle.length}
          maxLength={subtitleMaxLength}
          isMaxLength={isSubtitleMaxLength}
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
