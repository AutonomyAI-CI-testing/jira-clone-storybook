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
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [titleFocus, setTitleFocus] = useState<boolean>(true);
  const [subtitleFocus, setSubtitleFocus] = useState<boolean>(false);

  const isTitleMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= subtitleMaxLength;
  
  // Only show error if error prop is provided and title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const createFocusHandlers = (setFocus: (focus: boolean) => void) => ({
    onFocus: () => {
      if (!readOnly) setFocus(true);
    },
    onBlur: () => setFocus(false),
  });

  const titleHandlers = createFocusHandlers(setTitleFocus);
  const subtitleHandlers = createFocusHandlers(setSubtitleFocus);

  const updateTitle = (newTitle: string) => {
    // Prevent exceeding max length
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    // Prevent exceeding max length
    if (newSubtitle.length > subtitleMaxLength) return;
    setSubtitle(newSubtitle);
  };

  // Render character counter with danger color when at max length
  const renderCharacterCounter = (
    currentLength: number,
    max: number,
    isAtMax: boolean
  ) => (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtMax ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {currentLength} / {max}
    </span>
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          {...titleHandlers}
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
        {titleFocus &&
          renderCharacterCounter(title.length, maxLength, isTitleMaxLength)}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          {...subtitleHandlers}
          textareaClassName="font-primary text-lg text-font-subtle"
        />
        {subtitleFocus &&
          renderCharacterCounter(
            subtitle.length,
            subtitleMaxLength,
            isSubtitleMaxLength
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
  placeholder?: string;
  subtitlePlaceholder?: string;
}
