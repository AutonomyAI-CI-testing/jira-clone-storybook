import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

// Constructs className for textarea fields with error styling
const getTextareaClassName = (hasError: boolean): string => {
  return cx(
    "font-primary-black text-2xl",
    hasError &&
      "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
  );
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholderSubtitle = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  // Show error styling only if error message exists AND title is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus management: show character counter when focused, unless in read-only mode
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  // Prevent title from exceeding maxLength limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  // Prevent subtitle from exceeding maxLength limit
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLength) return;

    setSubtitle(newSubtitle);
  };

  const isSubtitleMaxLength = subtitle.length >= maxLength;
  // Combined character count shown in focus state: both title and subtitle count toward limit
  const totalCharacters = title.length + subtitle.length;

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
        textareaClassName={getTextareaClassName(requireError)}
        autofocus
      />
      <TextareaAutosize
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={placeholderSubtitle}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={getTextareaClassName(requireError)}
      />
      {requireError && (
        <span className="ml-3 font-primary-light text-sm text-font-danger">
          {error}
        </span>
      )}
      {isFocus && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLength || isSubtitleMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {totalCharacters} / {maxLength * 2}
        </span>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  placeholderSubtitle?: string;
}
