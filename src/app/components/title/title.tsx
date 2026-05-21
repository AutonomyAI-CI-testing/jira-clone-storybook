import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;
const DEFAULT_SUBTITLE_MAX_LENGTH = 120;

// Displays character count indicator showing current length against max length.
// Color changes to danger when at max length.
interface CharacterCountProps {
  currentLength: number;
  maxLength: number;
}

const CharacterCount = ({ currentLength, maxLength }: CharacterCountProps) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      currentLength >= maxLength ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {currentLength} / {maxLength}
  </span>
);

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  subtitleMaxLength = DEFAULT_SUBTITLE_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Write the subtitle (optional)",
  showSubtitle = false,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSubtitleFocus, setIsSubtitleFocus] = useState<boolean>(false);

  // Show error if error message is provided and title is empty or only whitespace
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Only show focus state when not read-only so character count displays
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => setIsFocus(false);

  const onSubtitleFocus = () => {
    if (!readOnly) setIsSubtitleFocus(true);
  };
  const onSubtitleBlur = () => setIsSubtitleFocus(false);

  // Prevent title updates that exceed max length
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  // Prevent subtitle updates that exceed max length
  const updateSubtitle = (newSubtitle: string) => {
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
        {isFocus && <CharacterCount currentLength={title.length} maxLength={maxLength} />}
      </div>
      {/* Subtitle is optional and only shown when explicitly enabled */}
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
            textareaClassName="font-primary text-lg text-font-subtle"
          />
          {isSubtitleFocus && (
            <CharacterCount
              currentLength={subtitle.length}
              maxLength={subtitleMaxLength}
            />
          )}
        </div>
      )}
    </div>
  );
};

export interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  subtitleMaxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
  showSubtitle?: boolean;
}
