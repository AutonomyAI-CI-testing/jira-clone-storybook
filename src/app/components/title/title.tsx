import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Displays a character counter that appears when focused.
 * Changes color to danger when at max length, subtlest otherwise.
 */
function CharacterCounter({
  isVisible,
  current,
  max,
}: {
  isVisible: boolean;
  current: number;
  max: number;
}) {
  if (!isVisible) return null;

  const isAtMaxLength = current >= max;
  return (
    <span
      className={cx(
        "absolute right-0 top-full font-primary-light text-sm",
        isAtMaxLength ? "text-font-danger" : "text-font-subtlest"
      )}
    >
      {current} / {max}
    </span>
  );
}

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocusTitle, setIsFocusTitle] = useState<boolean>(true);
  const [isFocusSubtitle, setIsFocusSubtitle] = useState<boolean>(false);

  const isMaxLengthTitle = title.length >= maxLength;
  const isMaxLengthSubtitle = subtitle.length >= subtitleMaxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Only allow focus changes if not in read-only mode
  const onFocusTitle = () => {
    if (!readOnly) {
      setIsFocusTitle(true);
      setIsFocusSubtitle(false);
    }
  };

  const onFocusSubtitle = () => {
    if (!readOnly) {
      setIsFocusTitle(false);
      setIsFocusSubtitle(true);
    }
  };

  // Placeholder handler for blur events (no-op currently)
  const onBlur = () => {};

  // Enforce max length by rejecting updates that exceed the limit
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
          onFocus={onFocusTitle}
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
        <CharacterCounter
          isVisible={isFocusTitle}
          current={title.length}
          max={maxLength}
        />
      </div>
      <div className="relative">
        <TextareaAutosize
          name="subtitle"
          value={subtitle}
          setValue={updateSubtitle}
          placeholder={subtitlePlaceholder}
          readOnly={readOnly}
          onFocus={onFocusSubtitle}
          onBlur={onBlur}
          textareaClassName="font-primary-black text-2xl"
        />
        <CharacterCounter
          isVisible={isFocusSubtitle}
          current={subtitle.length}
          max={subtitleMaxLength}
        />
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
