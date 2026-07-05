import { ReactNode } from "react";
import cx from "classix";
import { HiOutlineViewBoards, HiQuestionMarkCircle, HiFlag } from "react-icons/hi";
import { AiFillGithub, AiOutlinePlus } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { BsListNested, BsClockHistory } from "react-icons/bs";
import { MdLightMode, MdDeleteOutline } from "react-icons/md";
import { FaCheckSquare, FaSortAmountDownAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

// ============================================================
// Design tokens used directly (mirrors Tailwind CSS variables)
// ============================================================

// A simple Avatar fallback
const AvatarFallback = ({
  name,
  image,
  size = 36,
  color = "#dae3f9",
}: {
  name: string;
  image?: string;
  size?: number;
  color?: string;
}) => {
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
  const style = {
    width: size,
    height: size,
    minWidth: size,
    fontSize: size / 2,
  };
  if (image) {
    return (
      <img
        src={`/avatars/${image.replace(".webp", "-min.webp")}`}
        alt={name}
        style={{ ...style, borderRadius: "50%", objectFit: "cover" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }
  return (
    <span
      style={{
        ...style,
        backgroundColor: color,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#172b4d",
        fontWeight: 700,
      }}
    >
      {acronym}
    </span>
  );
};

// Priority icon
const PriorityIcon = ({
  priority,
  size = 16,
}: {
  priority: "low" | "medium" | "high";
  size?: number;
}) => (
  <span
    className={cx(
      "flex",
      priority === "low" && "text-icon-accent-green",
      priority === "medium" && "text-icon-accent-yellow",
      priority === "high" && "text-icon-accent-red"
    )}
  >
    <HiFlag size={size} />
  </span>
);

// Task icon
const TaskIcon = ({ size = 18 }: { size?: number }) => (
  <span className="relative flex items-center before:absolute before:inset-1/2 before:h-3/4 before:w-3/4 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white">
    <FaCheckSquare fill="#4BADE8" className="relative" size={size} />
  </span>
);

// ============================================================
// Header
// ============================================================
const Header = () => (
  <header className="relative z-10 flex w-full items-center justify-between bg-elevation-surface-raised px-5 py-2 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
    <section>
      <div className="flex cursor-pointer items-center rounded px-3 py-2 text-font hover:bg-background-brand-subtlest hover:text-font-brand">
        <img src="/images/logo.png" width={24} height={24} alt="Logo" />
        <span className="ml-2">Jira Clone</span>
      </div>
    </section>
    <section className="flex items-center gap-4">
      <button
        aria-label="About"
        className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <HiQuestionMarkCircle size={24} />
      </button>
      <a
        href="https://github.com/daniserrano7/jira-clone"
        className="flex h-[24px] w-[24px] items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
        aria-label="Go to Github"
      >
        <AiFillGithub size={24} />
      </a>
      <button
        aria-label="Select theme"
        className="group flex h-[30px] w-[30px] rounded-full outline outline-2 outline-icon flex-center hover:bg-background-brand-subtlest hover:outline-border-brand"
      >
        <MdLightMode className="fill-icon group-hover:fill-icon-brand" />
      </button>
      <AvatarFallback name="Daniel Serrano" color="#dae3f9" size={36} />
    </section>
  </header>
);

// ============================================================
// Sidebar
// ============================================================
const Sidebar = ({
  projectName,
  projectDescription,
  projectImage,
}: {
  projectName: string;
  projectDescription: string;
  projectImage: string;
}) => (
  <aside className="flex h-full w-[240px] flex-col bg-elevation-surface-sunken">
    <section className="flex w-full items-start px-5 py-6">
      <img
        src={projectImage}
        width={28}
        height={28}
        alt="project"
        className="rounded-[3px]"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="ml-4 w-full text-font">
        <p className="font-primary-bold text-lg leading-4">{projectName}</p>
        <p className="mt-2 line-clamp-2 whitespace-normal font-primary-light text-sm leading-4">
          {projectDescription}
        </p>
      </div>
    </section>
    <section className="flex-grow p-3">
      <nav className="flex-grow">
        {[
          { icon: <HiOutlineViewBoards size={24} />, name: "Board", active: true },
          { icon: <ImStatsDots size={20} />, name: "Analytics", active: false },
          { icon: <BsListNested size={24} />, name: "Backlog", active: false, disabled: true },
        ].map(({ icon, name, active, disabled }) => (
          <div
            key={name}
            className={cx(
              "group flex w-full cursor-pointer items-center gap-4 rounded border-none p-2 text-sm",
              active ? "bg-background-neutral text-font-brand" : "text-font-subtlest",
              disabled ? "cursor-not-allowed opacity-60" : "hover:bg-background-neutral"
            )}
          >
            {icon}
            <span>{name}</span>
          </div>
        ))}
      </nav>
    </section>
  </aside>
);

// ============================================================
// Issue Card
// ============================================================
const IssueCard = ({
  name,
  priority,
  idPrefix,
}: {
  name: string;
  priority: "low" | "medium" | "high";
  idPrefix: string;
}) => (
  <div className="flex w-full cursor-pointer flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered">
    <p className="line-clamp-2 min-h-[48px] w-full text-font">{name}</p>
    <div className="flex items-center justify-between pt-4">
      <span className="flex items-center">
        <TaskIcon size={18} />
        <span className="ml-1.5 text-2xs text-font-subtlest">{idPrefix}</span>
      </span>
      <PriorityIcon priority={priority} />
    </div>
  </div>
);

// ============================================================
// Category Column
// ============================================================
const CategoryColumn = ({
  title,
  issues,
}: {
  title: string;
  issues: Array<{ name: string; priority: "low" | "medium" | "high"; idPrefix: string }>;
}) => (
  <div className="relative flex h-full w-[260px] max-w-[260px] flex-col rounded-md bg-elevation-surface-sunken">
    <div className="sticky left-0 top-0 flex justify-between px-3 py-2.5 font-primary-light text-xs uppercase text-font-subtlest">
      <span className="flex gap-2">
        <span>{title}</span>
        {issues.length > 0 && <span>( {issues.length} )</span>}
      </span>
      <button className="rounded border-none p-0.5 text-font-subtlest hover:bg-background-neutral hover:text-font">
        <AiOutlinePlus size={16} />
      </button>
    </div>
    <div className="flex flex-col gap-2 overflow-y-auto p-2 pb-4">
      {issues.map((issue, idx) => (
        <IssueCard key={idx} {...issue} />
      ))}
      {issues.length === 0 && (
        <div className="mt-4 flex flex-col items-center justify-center text-font-subtlest opacity-50">
          <span className="text-2xs">No issues</span>
        </div>
      )}
    </div>
  </div>
);

// ============================================================
// Board View
// ============================================================
const BoardView = ({ categories }: { categories: Category[] }) => (
  <div className="box-border flex h-full flex-col">
    <section className="flex items-center">
      {/* Search */}
      <div className="relative w-fit">
        <input
          type="text"
          placeholder="Filter issues"
          className="h-[40px] w-[120px] rounded border-none bg-background-input py-2 pl-2 pr-8 outline outline-2 outline-border-input duration-200 placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest"
        />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2 text-font-subtlest">
          <BiSearch size={16} />
        </span>
      </div>
      {/* Avatars */}
      <span className="ml-4 flex">
        {[
          { name: "Woody", image: "woody.webp" },
          { name: "Buzz Lightyear", image: "buzz-lightyear.webp" },
          { name: "Jessie", image: "jessie.webp" },
          { name: "Daniel Serrano", color: "#dae3f9" },
        ].map((user, i) => (
          <div
            key={i}
            className="-ml-[5px] rounded-full border-2 border-border bg-elevation-surface"
          >
            <AvatarFallback
              {...user}
              size={40}
            />
          </div>
        ))}
      </span>
      {/* Sort select */}
      <div className="ml-4 flex cursor-pointer items-center rounded bg-background-brand-subtlest px-3 py-1.5 text-xs text-font-brand hover:bg-background-brand-subtlest-hovered">
        <FaSortAmountDownAlt size={14} className="mr-2" />
        <span>Sort by date</span>
        <BsClockHistory size={14} className="ml-2" />
      </div>
    </section>
    <section className="mt-12 flex h-full flex-col">
      <span className="mb-2 block font-primary-light text-2xs text-font-subtlest">
        Press <kbd className="rounded bg-background-neutral p-1 font-primary-light text-icon">Shift</kbd>{" "}
        + <kbd className="rounded bg-background-neutral p-1 font-primary-light text-icon">N</kbd> to create a new issue
      </span>
      <div className="flex h-full gap-3">
        {categories.map((cat) => (
          <CategoryColumn key={cat.title} title={cat.title} issues={cat.issues} />
        ))}
      </div>
    </section>
  </div>
);

interface Category {
  title: string;
  issues: Array<{ name: string; priority: "low" | "medium" | "high"; idPrefix: string }>;
}

// ============================================================
// Issue Detail Panel
// ============================================================
const IssuePanel = ({
  issue,
}: {
  issue: {
    id: string;
    name: string;
    description: string;
    status: "TODO" | "IN_PROGRESS" | "DONE";
    priority: "low" | "medium" | "high";
    asignee: { name: string; image?: string; color?: string };
    reporter: { name: string; image?: string; color?: string };
    comments: Array<{ user: { name: string; image?: string; color?: string }; message: string }>;
    createdAt: string;
    updatedAt: string;
  };
}) => {
  const statusColors = {
    TODO: "bg-background-accent-grey-bolder text-font-inverse",
    IN_PROGRESS: "bg-background-accent-blue-bolder text-font-inverse",
    DONE: "bg-background-accent-green-bolder text-font-inverse",
  };
  const statusLabels = {
    TODO: "To do",
    IN_PROGRESS: "In progress",
    DONE: "Done",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative z-50 w-4/5 max-w-[900px] rounded-md bg-elevation-surface py-6 px-8 shadow-lg text-font">
        {/* Header */}
        <div className="flex items-center mb-4">
          <span className="flex flex-grow items-center">
            <TaskIcon size={20} />
            <span className="ml-1 text-font-subtlest">{issue.id}</span>
          </span>
          <button className="flex rounded border-none p-1.5 text-icon hover:bg-background-neutral hover:text-font-danger">
            <MdDeleteOutline size={26} />
          </button>
          <button className="ml-3 flex cursor-pointer rounded border-none p-0.5 text-icon hover:bg-background-neutral">
            <IoCloseOutline size={32} />
          </button>
        </div>
        {/* Body */}
        <div className="grid grid-cols-5 gap-16">
          {/* Left col */}
          <section className="col-span-3">
            <div className="my-5 -ml-3 mb-6">
              <textarea
                className="box-border w-full resize-none overflow-y-hidden rounded-md border-none bg-background-input p-3 text-font font-primary-black text-2xl outline-2 hover:bg-background-input-hovered"
                defaultValue={issue.name}
                rows={2}
              />
            </div>
            <p className="font-primary-black text-font">Description</p>
            <div className="-ml-3 mb-6 mt-1">
              <textarea
                className="box-border w-full resize-none rounded-md border-none bg-background-input p-3 font-primary-light text-font outline-2 hover:bg-background-input-hovered"
                defaultValue={issue.description}
                rows={4}
              />
            </div>
            <div>
              <p className="font-primary-black text-font">Comments</p>
              <div className="mt-4 flex items-start gap-6">
                <AvatarFallback name={issue.reporter.name} image={issue.reporter.image} color={issue.reporter.color} size={36} />
                <div className="flex-1 rounded-md border-none bg-background-input p-3 text-font-subtlest font-primary-light text-sm">
                  Add a comment…
                </div>
              </div>
              <ul className="mt-8 space-y-6">
                {issue.comments.map((comment, idx) => (
                  <li key={idx} className="flex gap-6">
                    <AvatarFallback name={comment.user.name} image={comment.user.image} color={comment.user.color} size={36} />
                    <div>
                      <span className="mr-4 font-primary-bold">{comment.user.name}</span>
                      <p className="mt-2 font-primary-light">{comment.message}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Right col */}
          <section className="col-span-2 space-y-8">
            <div>
              <p className="mb-1">Status</p>
              <div className={cx("flex w-fit cursor-pointer items-center rounded px-3 py-1.5 text-sm font-primary-bold", statusColors[issue.status])}>
                <span>{statusLabels[issue.status]}</span>
                <RiArrowDropDownLine size={22} />
              </div>
            </div>
            <div>
              <p className="mb-1">Priority</p>
              <div className="flex cursor-pointer items-center gap-2 rounded bg-background-neutral px-2 py-1.5 text-sm font-primary-bold text-font hover:bg-background-neutral-hovered">
                <PriorityIcon priority={issue.priority} />
                <span className="capitalize">{issue.priority}</span>
                <RiArrowDropDownLine size={22} />
              </div>
            </div>
            <div>
              <p className="mb-1">Assignee</p>
              <div className="flex cursor-pointer items-center gap-2 rounded bg-background-neutral px-2 py-1.5 text-sm font-primary-bold text-font hover:bg-background-neutral-hovered">
                <AvatarFallback name={issue.asignee.name} image={issue.asignee.image} color={issue.asignee.color} size={32} />
                <span>{issue.asignee.name}</span>
                <RiArrowDropDownLine size={22} />
              </div>
            </div>
            <div>
              <p className="mb-1">Reporter</p>
              <div className="mt-1 flex w-fit items-center gap-2 rounded-full bg-background-neutral py-1 pb-1 pl-1 pr-3.5">
                <AvatarFallback name={issue.reporter.name} image={issue.reporter.image} color={issue.reporter.color} size={36} />
                <p className="m-0">{issue.reporter.name}</p>
              </div>
            </div>
            <div>
              <table>
                <tbody className="text-xs text-font-subtlest">
                  <tr>
                    <td className="pr-4"><p className="mb-2">Created at:</p></td>
                    <td><p className="mb-2">{issue.createdAt}</p></td>
                  </tr>
                  <tr>
                    <td className="pr-4"><p className="mb-2">Updated at:</p></td>
                    <td><p className="mb-2">{issue.updatedAt}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        {/* Footer */}
        <div className="mt-6 grid grid-cols-3 items-end">
          <span className="font-primary-light text-2xs text-font-subtlest">
            Press <kbd className="rounded bg-background-neutral p-1">Shift</kbd> + <kbd className="rounded bg-background-neutral p-1">S</kbd> to accept
          </span>
          <div className="flex justify-center">
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded bg-background-brand-bold px-8 py-2 text-lg text-font-inverse hover:bg-background-brand-bold-hovered">
              Accept
            </button>
          </div>
          <span className="justify-self-end font-primary-light text-2xs text-font-subtlest">
            Press <kbd className="rounded bg-background-neutral p-1">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// Projects View
// ============================================================
const ProjectsView = ({
  projects,
}: {
  projects: Array<{ id: string; name: string; description: string; image: string }>;
}) => (
  <div className="p-6">
    <h1 className="font-primary-black text-2xl">PROJECTS</h1>
    <div className="mt-8">
      <button className="flex w-fit cursor-pointer items-center gap-2 rounded bg-background-neutral py-3 pl-3 pr-4 text-font hover:bg-background-neutral-hovered">
        <AiOutlinePlus size={22} />
        <span className="leading-4">Add Project</span>
      </button>
    </div>
    <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
      {projects.map((project) => (
        <div key={project.id} className="w-[400px]">
          <div className="group flex h-[112px] rounded bg-elevation-surface-raised text-font shadow-sm outline outline-2 outline-transparent duration-100 ease-linear hover:-translate-y-0.5 hover:bg-background-brand-subtlest-hovered hover:text-font-brand hover:shadow-md hover:outline-border-brand">
            <img
              src={project.image}
              alt="Project"
              width="90px"
              height="104px"
              className="h-auto w-[90px] rounded-l object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/images/default-project.png";
              }}
            />
            <div className="flex flex-col gap-1 px-3 pb-4 pt-2">
              <h2 className="text-lg">{project.name}</h2>
              <h3 className="line-clamp-2 min-h-[40px] font-primary-light text-sm text-font-subtle">
                {project.description}
              </h3>
            </div>
          </div>
          <button className="mt-1 flex items-center gap-1 border-none text-sm text-icon hover:text-font-danger cursor-pointer">
            <MdDeleteOutline size={15} />
            Delete project
          </button>
        </div>
      ))}
    </div>
  </div>
);

// ============================================================
// Login View
// ============================================================
const LoginView = () => (
  <div className="mx-auto max-w-[400px] pt-[10vh]">
    <h1 className="font-primary-black text-5xl text-font">Select login user</h1>
    <h2 className="mb-8 mt-3 font-primary-light text-lg text-font-subtle">
      There is no authentication involved. You can login with any user you want!
    </h2>
    <div className="mx-auto w-[300px]">
      <div className="flex w-full cursor-pointer items-center justify-between rounded bg-background-neutral px-2 py-1.5 font-primary-bold text-sm text-font hover:bg-background-neutral-hovered">
        <div className="flex items-center gap-2">
          <AvatarFallback name="Woody" image="woody.webp" size={36} />
          <span>Woody</span>
        </div>
        <RiArrowDropDownLine size={28} />
      </div>
      <button className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-background-brand-bold py-2 text-font-inverse hover:bg-background-brand-bold-hovered">
        Login
      </button>
    </div>
  </div>
);

// ============================================================
// Full Page Layout Wrapper
// ============================================================
const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex h-screen flex-col bg-elevation-surface font-primary text-font">
    <Header />
    <div className="flex h-full flex-grow overflow-hidden">{children}</div>
  </div>
);

// ============================================================
// Main exported component
// ============================================================
export interface ClaudeDesignProps {
  view?: "board" | "issue-panel" | "projects" | "login";
  theme?: "light" | "dark";
}

const CATEGORIES: Category[] = [
  {
    title: "To do",
    issues: [
      {
        name: "HINT: Check network status when navigating to an error page.",
        priority: "medium",
        idPrefix: "4db55",
      },
      {
        name: "Implement keyboard shortcuts for power users",
        priority: "low",
        idPrefix: "a8c12",
      },
      {
        name: "Add support for dark mode in all components",
        priority: "high",
        idPrefix: "f3e91",
      },
    ],
  },
  {
    title: "In progress",
    issues: [
      {
        name: "HINT: Open two tabs to see events in real time.",
        priority: "high",
        idPrefix: "ea07f",
      },
      {
        name: "Fix drag-and-drop issues on mobile devices",
        priority: "medium",
        idPrefix: "bc234",
      },
    ],
  },
  {
    title: "Done",
    issues: [
      {
        name: "HINT: Only the reporter of an issue can edit the title.",
        priority: "medium",
        idPrefix: "7e3f2",
      },
      {
        name: "Set up CI/CD pipeline with GitHub Actions",
        priority: "low",
        idPrefix: "d91a4",
      },
      {
        name: "Write comprehensive unit tests for domain layer",
        priority: "high",
        idPrefix: "2c7b8",
      },
    ],
  },
];

const ISSUE_DETAIL = {
  id: "ea07f7ca-13e9",
  name: "HINT: Open two tabs to see events in real time.",
  description:
    "With the same project open in two different tabs, try making some changes on one of them. The result will be reflected instantly on the other. This will happen with every other user with the app open.",
  status: "IN_PROGRESS" as const,
  priority: "high" as const,
  asignee: { name: "Woody", image: "woody.webp" },
  reporter: { name: "Daniel Serrano", color: "#dae3f9" },
  comments: [
    {
      user: { name: "Jessie", image: "jessie.webp" },
      message:
        "Depending on the user, some features are restricted. For example, only the reporter of an issue can edit the title and description.",
    },
    {
      user: { name: "Little Green Men", image: "little-green-men.webp" },
      message: "And only the original poster of a comment can edit or delete it!",
    },
  ],
  createdAt: "Jan 18, 2022 11:00 AM",
  updatedAt: "Jan 23, 2022 3:28 PM",
};

const PROJECTS = [
  {
    id: "jira-clone",
    name: "JIRA Clone",
    description: "Software project",
    image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge",
  },
  {
    id: "second-project",
    name: "Second project",
    description:
      "Super long description to test how it clamps on project card in the projects page and in the project sidebar",
    image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10401?size=xxlarge",
  },
  {
    id: "marketing",
    name: "Marketing Campaign",
    description: "Q1 2024 product launch marketing campaigns and tracking",
    image: "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10402?size=xxlarge",
  },
];

export const ClaudeDesign = ({
  view = "board",
  theme = "light",
}: ClaudeDesignProps): JSX.Element => {
  if (view === "login") {
    return (
      <div className={`${theme} min-h-screen bg-elevation-surface font-primary`}>
        <Header />
        <LoginView />
      </div>
    );
  }

  if (view === "projects") {
    return (
      <div className={`${theme} min-h-screen bg-elevation-surface font-primary`}>
        <Layout>
          <div className="z-10 flex h-full w-full flex-grow flex-col overflow-auto">
            <ProjectsView projects={PROJECTS} />
          </div>
        </Layout>
      </div>
    );
  }

  if (view === "issue-panel") {
    return (
      <div className={`${theme} relative min-h-screen bg-elevation-surface font-primary`}>
        <Layout>
          <div className="relative flex h-full w-full flex-grow overflow-hidden">
            <Sidebar
              projectName="JIRA Clone"
              projectDescription="Software project"
              projectImage="https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge"
            />
            <div className="z-10 flex h-full w-full flex-grow flex-col px-5 py-6">
              <section>
                <span className="text-font-subtle underline underline-offset-[3px]">Projects</span>
                <span className="mx-2">/</span>
                <span>JIRA Clone</span>
                <h1 className="mb-5 mt-4 font-primary-black text-2xl">Board</h1>
              </section>
              <BoardView categories={CATEGORIES} />
            </div>
          </div>
        </Layout>
        <IssuePanel issue={ISSUE_DETAIL} />
      </div>
    );
  }

  // Default: board view
  return (
    <div className={`${theme} min-h-screen bg-elevation-surface font-primary`}>
      <Layout>
        <div className="relative flex h-full w-full flex-grow overflow-hidden">
          <Sidebar
            projectName="JIRA Clone"
            projectDescription="Software project"
            projectImage="https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge"
          />
          <div className="z-10 flex h-full w-full flex-grow flex-col px-5 py-6 overflow-auto">
            <section>
              <span className="text-font-subtle underline underline-offset-[3px]">Projects</span>
              <span className="mx-2">/</span>
              <span>JIRA Clone</span>
              <h1 className="mb-5 mt-4 font-primary-black text-2xl">Board</h1>
            </section>
            <BoardView categories={CATEGORIES} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ClaudeDesign;
