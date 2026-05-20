import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/** Displays character count with max length warning */
const CharacterCounter = ({
  current,
  max,
  isMaxReached,
}: {
  current: number;
  max: number;
  isMaxReached: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isMaxReached ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isTitleFocus, setIsTitleFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= maxLength;
  // Show error only when title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onTitleFocus = () => {
    // Only show character counter when field is editable
    if (!readOnly) setIsTitleFocus(true);
  };
  const onTitleBlur = () => {
    setIsTitleFocus(false);
  };

  const onSubtitleFocus = () => {
    // Only show character counter when field is editable
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onSubtitleBlur = () => {
    setIsSubtitleFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    // Prevent input beyond max length
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Prevent input beyond max length
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
        {isTitleFocus && (
          <CharacterCounter
            current={title.length}
            max={maxLength}
            isMaxReached={isTitleMaxLength}
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
          textareaClassName="font-primary-regular text-lg"
        />
        {isSubtitleFocus && (
          <CharacterCounter
            current={subtitle.length}
            max={maxLength}
            isMaxReached={isSubtitleMaxLength}
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
