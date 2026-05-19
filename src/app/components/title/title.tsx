import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_MAX_LENGTH_SUBTITLE = 120;

/**
 * Helper to check if an error should be displayed
 * Returns true when error is provided and the value is empty or only whitespace
 */
const shouldShowError = (error: string | undefined, value: string): boolean => {
  return Boolean(error && (value.length === 0 || textAreOnlySpaces(value)));
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  maxLengthSubtitle = DEFAULT_MAX_LENGTH_SUBTITLE,
  error,
  errorSubtitle,
  placeholder = "Write the title",
  placeholderSubtitle = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLengthSubtitle = subtitle.length >= maxLengthSubtitle;
  const requireError = shouldShowError(error, title);
  const requireErrorSubtitle = shouldShowError(errorSubtitle, subtitle);

  // Focus handlers only update state when not in read-only mode to prevent unnecessary re-renders
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onBlur = () => setIsFocus(false);
  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  // Enforce character limits by rejecting updates that exceed maxLength
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLengthSubtitle) return;
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
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLength ? "text-font-danger" : "text-font-subtlest"
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
          placeholder={placeholderSubtitle}
          readOnly={readOnly}
          onFocus={onSubtitleFocus}
          onBlur={onSubtitleBlur}
          textareaClassName={cx(
            "font-primary-medium text-lg",
            requireErrorSubtitle &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {requireErrorSubtitle && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {errorSubtitle}
          </span>
        )}
        {isSubtitleFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLengthSubtitle ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {subtitle.length} / {maxLengthSubtitle}
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
  maxLengthSubtitle?: number;
  error?: string;
  errorSubtitle?: string;
  placeholder?: string;
  placeholderSubtitle?: string;
}
