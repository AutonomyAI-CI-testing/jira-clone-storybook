import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * CharacterCounter displays the current character count vs max length.
 * Styled to appear below the input field, warning color when at max.
 */
const CharacterCounter = ({
  current,
  max,
  className,
}: {
  current: number;
  max: number;
  className?: string;
}) => {
  const isAtMax = current >= max;
  return (
    <span
      className={cx(
        "absolute right-0 top-full mt-1 font-primary-light text-sm",
        isAtMax ? "text-font-danger" : "text-font-subtlest",
        className
      )}
    >
      {current} / {max}
    </span>
  );
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write a subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  // Title autofocuses on mount, so start with focus state true
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Error validation only applies to title field (subtitle is optional)
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Generic handlers for managing focus state, preventing focus in readOnly mode
  const createFocusHandler = (setFocusState: (focus: boolean) => void) => ({
    onFocus: () => {
      if (!readOnly) setFocusState(true);
    },
    onBlur: () => setFocusState(false),
  });

  const titleFocusHandlers = createFocusHandler(setIsFocus);
  const subtitleFocusHandlers = createFocusHandler(setIsSubtitleFocus);

  // Generic update handler that enforces max length constraint
  const createUpdateHandler = (setValue: (value: string) => void) => (
    newValue: string
  ) => {
    if (newValue.length > maxLength) return;
    setValue(newValue);
  };

  const updateTitle = createUpdateHandler(setTitle);
  const updateSubtitle = createUpdateHandler(setSubtitle);

  return (
    <div className="space-y-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          {...titleFocusHandlers}
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
        {isFocus && <CharacterCounter current={title.length} max={maxLength} />}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          {...subtitleFocusHandlers}
          textareaClassName={cx("font-primary-regular text-lg")}
        />
        {isSubtitleFocus && (
          <CharacterCounter current={subtitle.length} max={maxLength} />
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
