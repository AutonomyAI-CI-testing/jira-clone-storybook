import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

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
  // Title starts focused by default to encourage immediate input (autofocus is enabled)
  const [isTitleFocused, setIsTitleFocused] = useState<boolean>(true);
  const [isSubtitleFocused, setIsSubtitleFocused] = useState<boolean>(false);

  const isTitleAtMaxLength = title.length >= maxLength;
  const isSubtitleAtMaxLength = subtitle.length >= maxLength;
  // Only show error if error prop is provided AND title is empty or only whitespace
  const shouldShowError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const handleTitleFocus = () => {
    if (!readOnly) setIsTitleFocused(true);
  };

  const handleTitleBlur = () => setIsTitleFocused(false);

  const handleSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocused(true);
  };

  const handleSubtitleBlur = () => setIsSubtitleFocused(false);

  const updateTitle = (newTitle: string) => {
    // Prevent exceeding max length — silently ignore input beyond limit
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Prevent exceeding max length — silently ignore input beyond limit
    if (newSubtitle.length > maxLength) return;

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
          onFocus={handleTitleFocus}
          onBlur={handleTitleBlur}
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
        {isTitleFocused && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isTitleAtMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={handleSubtitleFocus}
          onBlur={handleSubtitleBlur}
          textareaClassName="font-primary text-lg"
        />
        {isSubtitleFocused && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSubtitleAtMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {subtitle.length} / {maxLength}
          </span>
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
