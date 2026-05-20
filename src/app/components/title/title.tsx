import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Character counter display shown when field is focused.
 */
const CharacterCounter = ({
  current,
  max,
  isAtMax,
}: {
  current: number;
  max: number;
  isAtMax: boolean;
}) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isAtMax ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

/**
 * Title component with optional subtitle field.
 * Displays character counters on focus and supports error validation.
 */
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
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSubtitleMaxLength = subtitle.length >= maxLength;

  // Show error only if error message provided AND title is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Focus handlers — only allow focus state change if not in read-only mode
  const createFocusHandler = (setFocus: (value: boolean) => void) => () => {
    if (!readOnly) setFocus(true);
  };

  const createBlurHandler = (setFocus: (value: boolean) => void) => () => {
    setFocus(false);
  };

  const onFocus = createFocusHandler(setIsFocus);
  const onBlur = createBlurHandler(setIsFocus);
  const onSubtitleFocus = createFocusHandler(setIsSubtitleFocus);
  const onSubtitleBlur = createBlurHandler(setIsSubtitleFocus);

  // Update handlers — prevent input beyond max length
  const createUpdateHandler =
    (setValue: (value: string) => void) => (newValue: string) => {
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
          <CharacterCounter
            current={title.length}
            max={maxLength}
            isAtMax={isMaxLength}
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
          textareaClassName="font-primary-regular text-lg"
        />
        {isSubtitleFocus && (
          <CharacterCounter
            current={subtitle.length}
            max={maxLength}
            isAtMax={isSubtitleMaxLength}
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
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}

