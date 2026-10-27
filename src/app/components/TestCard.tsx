import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static smoke-test card: the "UI magician Agent" panel from the attached
 * Figma frame. It is self-contained — no props, no state, no handlers — so the
 * two fields are read-only placeholders and the two buttons do nothing.
 *
 * Colours, type and corners come from the repo's semantic tokens rather than
 * the frame's raw hex values, so the card keeps working across every theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-elevation-surface px-5 py-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-4">
        UI magician Agent
      </h2>
      <FiSettings aria-hidden className="h-4 w-4 text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden className="h-2 w-2" />
      <span className="font-primary-bold text-[11.5px] leading-4">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-3 w-3" />
      <h3 className="font-primary-bold text-[13.5px] leading-4">
        Add New Design
      </h3>
    </div>

    <div className="mt-8 flex flex-col gap-3">
      <LabelledField
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <LabelledField
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-8 flex justify-end gap-4">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h3 className="mt-12 font-primary-bold text-[13.5px] leading-4 text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);

const LabelledField = ({
  id,
  label,
  placeholder,
}: LabelledFieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-[11.5px] leading-4 text-font-subtle"
      >
        {label}
      </label>
      <FiInfo aria-hidden className="h-3.5 w-3.5 text-font-subtlest" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-2 h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-2 text-[11.5px] text-font placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
    />
  </div>
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-9 w-[85px] rounded bg-background-brand-bold font-primary-bold text-[11.5px] text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
  >
    {children}
  </button>
);

interface LabelledFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface CardButtonProps {
  children: React.ReactNode;
}
