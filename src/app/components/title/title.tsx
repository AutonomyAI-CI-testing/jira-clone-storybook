import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 80;

/**
 * Helper to create focus handler that respects readOnly mode.
 * Returns a function that sets focus state only if not in read-only mode.
 */
const createFocusHandler =
  (setFocus: (value: boolean) => void, readOnly?: boolean) => () => {
    if (!readOnly) setFocus(true);
  };

/**
 * Helper to create blur handler that clears focus state.
 */
const createBlurHandler = (setFocus: (value: boolean) => void) => () => {
  setFocus(false);
};

/**
 * Helper to create value update handler that enforces max length.
 */
const createUpdateHandler =
  (setValue: (value: string) => void, maxLen: number) => (newValue: string) => {
    if (newValue.length > maxLen) return;
    setValue(newValue);
  };

/**
 * Helper to check if text is empty or only whitespace for error display.
 */
const hasErrorForEmptyText = (errorMsg?: string, text?: string) => {
  return (
    errorMsg &&
    (text === undefined || text.length === 0 || textAreOnlySpaces(text))
  );
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isTitleFocus, setIsTitleFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const titleRequireError = hasErrorForEmptyText(error, title);

  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const subtitleRequireError = hasErrorForEmptyText(subtitleError, subtitle);

  const onTitleFocus = createFocusHandler(setIsTitleFocus, readOnly);
  const onTitleBlur = createBlurHandler(setIsTitleFocus);
  const onSubtitleFocus = createFocusHandler(setIsSubtitleFocus, readOnly);
  const onSubtitleBlur = createBlurHandler(setIsSubtitleFocus);

  const updateTitle = createUpdateHandler(setTitle, maxLength);
  const updateSubtitle = createUpdateHandler(setSubtitle, subtitleMaxLength);

  return (
    <div className="space-y-4">
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
            titleRequireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {titleRequireError && (
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
          textareaClassName={cx(
            "font-primary-bold text-xl",
            subtitleRequireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
        />
        {subtitleRequireError && (
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
}
