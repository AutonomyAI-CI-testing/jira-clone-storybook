import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 100;

// Displays character count with warning color when limit is reached
const CharacterCounter = ({
  current,
  max,
  isMaxLength,
}: {
  current: number;
  max: number;
  isMaxLength: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isMaxLength ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

// Field wrapper that handles textarea, error display, and character counter
interface TitleFieldProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  textareaClassName: string;
  autofocus?: boolean;
  showCounter: boolean;
  maxLength: number;
  isMaxLength: boolean;
  error?: string;
  showError?: boolean;
}

const TitleField = ({
  name,
  value,
  setValue,
  placeholder,
  readOnly,
  onFocus,
  onBlur,
  textareaClassName,
  autofocus,
  showCounter,
  maxLength,
  isMaxLength,
  error,
  showError,
}: TitleFieldProps) => (
  <div className="relative">
    <TextareaAutosize
      name={name}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      textareaClassName={textareaClassName}
      autofocus={autofocus}
    />
    {showError && error && (
      <span className="ml-3 font-primary-light text-sm text-font-danger">
        {error}
      </span>
    )}
    {showCounter && (
      <CharacterCounter
        current={value.length}
        max={maxLength}
        isMaxLength={isMaxLength}
      />
    )}
  </div>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write a subtitle (optional)",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Handle focus state for title field
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  // Handle blur state for title field
  const onBlur = () => setIsFocus(false);

  // Handle focus state for subtitle field
  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };

  // Handle blur state for subtitle field
  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  // Update title with max length validation
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Update subtitle with max length validation
  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div className="space-y-4">
      <TitleField
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
        showCounter={isFocus}
        maxLength={maxLength}
        isMaxLength={isMaxLength}
        error={error}
        showError={!!requireError}
      />
      <TitleField
        name="subtitle"
        value={subtitle}
        setValue={updateSubtitle}
        placeholder={subtitlePlaceholder}
        readOnly={readOnly}
        onFocus={onSubtitleFocus}
        onBlur={onSubtitleBlur}
        textareaClassName="font-primary-regular text-lg text-font-subtlest"
        showCounter={isSubtitleFocus}
        maxLength={subtitleMaxLength}
        isMaxLength={isSubtitleMaxLength}
      />
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
  placeholder?: string;
  subtitlePlaceholder?: string;
}
