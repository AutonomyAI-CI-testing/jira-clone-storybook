import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Add a subtitle (optional)",
  showSubtitle = true,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Character count validation
  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;

  // Show error only if error message is provided AND field is empty/whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => setIsFocus(false);

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onSubtitleBlur = () => setIsSubtitleFocus(false);

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
            textareaClassName={cx(
              "font-primary text-lg text-font-subtle",
              requireSubtitleError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
          />
          {requireSubtitleError && (
            <span className="ml-3 font-primary-light text-sm text-font-danger">
              {subtitleError}
            </span>
          )}
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
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  subtitleMaxLength?: number;
  error?: string;
  subtitleError?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
  showSubtitle?: boolean;
}
