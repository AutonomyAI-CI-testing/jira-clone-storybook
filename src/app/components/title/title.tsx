import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 200;

// Helper: Generate error-state CSS classes for input fields
const getErrorClasses = (hasError: boolean) =>
  hasError
    ? "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
    : "";

// Helper: Render character counter with appropriate styling
const CharacterCounter = ({
  current,
  max,
  isMax,
}: {
  current: number;
  max: number;
  isMax: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isMax ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

// Helper: Render error message below field
const ErrorMessage = ({ message }: { message: string }) => (
  <span className="ml-3 font-primary-light text-sm text-font-danger">
    {message}
  </span>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  subtitleError,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Title starts focused to show character counter immediately (UX: user sees limit upfront)
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Validation: Check if fields are at max length (for counter styling)
  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;

  // Validation: Show error only if error message provided and field is empty/whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  const onFocus = () => {
    // Only allow focus state changes when field is editable
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const onSubtitleFocus = () => {
    // Only allow focus state changes when field is editable
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
    <div className="flex flex-col gap-4">
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
            getErrorClasses(requireError)
          )}
          autofocus
        />
        {requireError && <ErrorMessage message={error} />}
        {isFocus && (
          <CharacterCounter
            current={title.length}
            max={maxLength}
            isMax={isMaxLength}
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
          textareaClassName={cx(
            "font-primary-regular text-lg",
            getErrorClasses(requireSubtitleError)
          )}
        />
        {requireSubtitleError && <ErrorMessage message={subtitleError} />}
        {isSubtitleFocus && (
          <CharacterCounter
            current={subtitle.length}
            max={subtitleMaxLength}
            isMax={isSubtitleMaxLength}
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
  subtitleMaxLength?: number;
  error?: string;
  subtitleError?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}
