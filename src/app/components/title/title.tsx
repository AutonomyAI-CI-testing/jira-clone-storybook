import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Title component with optional subtitle field.
 * Displays character count on focus and validates required fields.
 */
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

  // Check if either field has reached the character limit
  const isTitleMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= maxLength;
  
  // Show error only if error prop is provided and title is empty or only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus handlers only update state when not in read-only mode
  const onTitleFocus = () => {
    if (!readOnly) setIsTitleFocus(true);
  };

  const onTitleBlur = () => setIsTitleFocus(false);

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };

  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  // Prevent updates that exceed maxLength
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div className="flex flex-col gap-4">
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
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isTitleMaxLength ? "text-font-danger" : "text-font-subtlest"
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
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName="font-primary-black text-2xl"
        />
        {isSubtitleFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isSubtitleMaxLength ? "text-font-danger" : "text-font-subtlest"
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
