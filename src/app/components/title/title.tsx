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
  // Track focus state to conditionally show the character counter
  const [isFocusTitle, setIsFocusTitle] = useState<boolean>(true);
  const [isFocusSubtitle, setIsFocusSubtitle] = useState<boolean>(true);

  // Character counter color changes to danger when max length is reached
  const isMaxLengthTitle = title.length >= maxLength;
  const isMaxLengthSubtitle = subtitle.length >= maxLength;
  // Only display error when title is empty or contains only whitespace
  const requireErrorTitle =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Show character counter only when field is focused (unless read-only)
  const onFocusTitle = () => {
    if (!readOnly) setIsFocusTitle(true);
  };

  const onBlurTitle = () => {
    setIsFocusTitle(false);
  };

  const onFocusSubtitle = () => {
    if (!readOnly) setIsFocusSubtitle(true);
  };

  const onBlurSubtitle = () => {
    setIsFocusSubtitle(false);
  };

  // Prevent exceeding max length at the update level
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div>
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onFocusTitle}
          onBlur={onBlurTitle}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            requireErrorTitle &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {requireErrorTitle && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocusTitle && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthTitle ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      <div className="relative mt-3">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocusSubtitle}
          onBlur={onBlurSubtitle}
          textareaClassName={cx("font-primary-black text-2xl")}
          autofocus={false}
        />
        {isFocusSubtitle && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthSubtitle ? "text-font-danger" : "text-font-subtlest"
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
