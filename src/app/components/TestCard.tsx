import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Self-contained replica of the "UI magician Agent" Figma frame.
 *
 * Takes no props and holds no state: the frame is a static mock, so every
 * control below is presentational. The `dark` theme class is pinned on the
 * root, which keeps the card looking the same under every app theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog aria-label="Settings" className="text-icon-subtle" size={24} />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <HiOutlineChevronUp className="shrink-0 text-icon-subtle" size={16} />
      <span className="truncate font-primary-light text-sm text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-20" />

    <div className="flex items-center gap-3">
      <HiOutlineChevronUp className="shrink-0" size={20} />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-5">
      <Field label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" value="https://www.figma.com/file/" />
    </div>

    <div className="mt-8 flex gap-4">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <div className="h-20" />

    <h2 className="font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <HiOutlineInformationCircle
        aria-label={`About ${label}`}
        className="text-icon-subtle"
        size={20}
      />
    </div>
    <div className="w-full truncate rounded bg-elevation-surface-raised px-3 py-3 font-primary-light text-sm text-font-subtlest outline outline-1 outline-[var(--DarkNeutral600)]">
      {value}
    </div>
  </div>
);

const CardButton = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-lg bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-lg text-font-inverse">
    {children}
  </span>
);
