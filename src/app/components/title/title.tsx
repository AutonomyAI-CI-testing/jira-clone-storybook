import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 200;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSubtitle = "",
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  subtitlePlaceholder = "Write a subtitle (optional)",
  showSubtitle = false,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Title field starts focused to allow immediate editing
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  // Show error only when title is empty or contains only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onSubtitleFocus = () => {
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
    if (newSubtitle.length > subtitleMaxLength) return;

    setSubtitle(newSubtitle);
  };

  return (
    <div className="flex flex-col gap-3">
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
      {showSubtitle && (
        <div className="relative">
          <TextareaAutosize
            name="subtitle"
            value={subtitle}
            setValue={updateSubtitle}
            placeholder={subtitlePlaceholder}
            readOnly={readOnly}
            onFocus={onSubtitleFocus}
            onBlur={onSubtitleBlur}
            textareaClassName="font-primary text-base text-font-subtle"
          />
          {isSubtitleFocus && (
            <span
              className={cx(
                "absolute right-0 top-full font-primary-light text-sm",
                isSubtitleMaxLength ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {subtitle.length} / {subtitleMaxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  initSubtitle?: string;
  subtitleMaxLength?: number;
  subtitlePlaceholder?: string;
  showSubtitle?: boolean;
}
