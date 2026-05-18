import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

// Character counter that appears when field is focused
const CharacterCounter = ({
  currentLength,
  maxLength,
  isMaxLength,
}: {
  currentLength: number;
  maxLength: number;
  isMaxLength: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isMaxLength ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {currentLength} / {maxLength}
  </span>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write a subtitle (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [titleFocus, setTitleFocus] = useState<boolean>(true);
  const [subtitleFocus, setSubtitleFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= maxLength;

  // Show error only when error prop is provided and title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus handlers ensure only one field shows the character counter at a time
  const onTitleFocus = () => {
    if (!readOnly) {
      setTitleFocus(true);
      setSubtitleFocus(false);
    }
  };

  const onSubtitleFocus = () => {
    if (!readOnly) {
      setSubtitleFocus(true);
      setTitleFocus(false);
    }
  };

  const onTitleBlur = () => {
    if (!readOnly) {
      setTitleFocus(false);
    }
  };

  const onSubtitleBlur = () => {
    if (!readOnly) {
      setSubtitleFocus(false);
    }
  };

  // Enforce max length constraint for title input
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Enforce max length constraint for subtitle input
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLength) return;
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
            isMaxLength={isTitleMaxLength}
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
          textareaClassName="font-primary-light text-lg text-font-subtlest"
        />
        {subtitleFocus && (
          <CharacterCounter
            currentLength={subtitle.length}
            maxLength={maxLength}
            isMaxLength={isSubtitleMaxLength}
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
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
