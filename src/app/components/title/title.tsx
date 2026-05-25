import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSecondTitle,
  secondPlaceholder,
  secondMaxLength,
  secondError,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [secondTitle, setSecondTitle] = useState<string>(initSecondTitle || "");
  const [isSecondFocus, setIsSecondFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const secondMaxLengthValue = secondMaxLength || maxLength;
  const isSecondMaxLength = secondTitle.length >= secondMaxLengthValue;
  const requireSecondError =
    secondError &&
    (secondTitle.length === 0 || textAreOnlySpaces(secondTitle));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => {
    // Keep focus state true to show character counter even when not focused
    // This provides ongoing feedback on character usage
  };

  const onSecondFocus = () => {
    if (!readOnly) setIsSecondFocus(true);
  };
  const onSecondBlur = () => {
    // Keep focus state true to show character counter even when not focused
    // This provides ongoing feedback on character usage
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondTitle = (newSecondTitle: string) => {
    if (newSecondTitle.length > secondMaxLengthValue) return;

    setSecondTitle(newSecondTitle);
  };

  return (
    <div className="space-y-6">
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
      {initSecondTitle !== undefined && (
        <div className="relative">
          <TextareaAutosize
            name="secondTitle"
            value={secondTitle}
            setValue={updateSecondTitle}
            placeholder={secondPlaceholder || "Write the second title"}
            readOnly={readOnly}
            onFocus={onSecondFocus}
            onBlur={onSecondBlur}
            textareaClassName={cx(
              "font-primary-black text-2xl",
              requireSecondError &&
                "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
            )}
            autofocus={false}
          />
          {requireSecondError && (
            <span className="ml-3 font-primary-light text-sm text-font-danger">
              {secondError}
            </span>
          )}
          {isSecondFocus && (
            <span
              className={cx(
                "absolute right-0 top-full font-primary-light text-sm",
                isSecondMaxLength
                  ? "text-font-danger"
                  : "text-font-subtlest"
              )}
            >
              {secondTitle.length} / {secondMaxLengthValue}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  initSecondTitle?: string;
  secondPlaceholder?: string;
  secondMaxLength?: number;
  secondError?: string;
}
