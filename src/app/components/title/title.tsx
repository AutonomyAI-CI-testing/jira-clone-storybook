import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const ERROR_OUTLINE_CLASSES =
  "focus-visible:outline-border-danger outline outline-2 outline-border-danger";

// Character count indicator shown when field is focused
const CharacterCount = ({
  current,
  max,
  isFocus,
}: {
  current: number;
  max: number;
  isFocus: boolean;
}): JSX.Element | null => {
  if (!isFocus) return null;

  const isMaxLength = current >= max;

  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isMaxLength ? "text-font-danger" : "text-font-subtlest"
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
  maxLengthSubtitle = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSubtitle = subtitle.length >= maxLengthSubtitle;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Only show character count and error messages when the field is focused
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLengthSubtitle) return;

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
            requireError && ERROR_OUTLINE_CLASSES
          )}
          autofocus
        />
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        <CharacterCount current={title.length} max={maxLength} isFocus={isFocus} />
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
            "font-primary-regular text-base",
            requireError && ERROR_OUTLINE_CLASSES
          )}
        />
        <CharacterCount current={subtitle.length} max={maxLengthSubtitle} isFocus={isFocus} />
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  maxLengthSubtitle?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
