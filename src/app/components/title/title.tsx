import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const CharacterCounter = ({
  current,
  max,
}: {
  current: number;
  max: number;
}): JSX.Element => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      current >= max ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

const ErrorMessage = ({ message }: { message: string }): JSX.Element => (
  <span className="ml-3 font-primary-light text-sm text-font-danger">
    {message}
  </span>
);

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
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Only show error if error prop is provided AND title is empty or only spaces
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));
  const requireSubtitleError =
    subtitleError && (subtitle.length === 0 || textAreOnlySpaces(subtitle));

  // Tailwind classes for error border styling when validation fails
  const errorBorderStyles =
    "focus-visible:outline-border-danger outline outline-2 outline-border-danger";

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onBlur = () => setIsFocus(false);
  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > subtitleMaxLength) return;

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
            requireError && errorBorderStyles
          )}
          autofocus
        />
        {requireError && error && <ErrorMessage message={error} />}
        {isFocus && <CharacterCounter current={title.length} max={maxLength} />}
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
            "font-primary-bold text-lg",
            requireSubtitleError && errorBorderStyles
          )}
        />
        {requireSubtitleError && subtitleError && (
          <ErrorMessage message={subtitleError} />
        )}
        {isSubtitleFocus && (
          <CharacterCounter current={subtitle.length} max={subtitleMaxLength} />
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
