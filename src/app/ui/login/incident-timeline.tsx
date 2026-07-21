import { Fragment } from "react";

interface TimelineStep {
  title: string;
  time: string;
  description: string;
  status: "info" | "warning" | "success";
}

const STEPS: TimelineStep[] = [
  {
    title: "Detect",
    time: "in <30s",
    description: "Intelligently detect and classify incidents",
    status: "info",
  },
  {
    title: "Route",
    time: "<2m",
    description: "Route to the right on-call engineer",
    status: "warning",
  },
  {
    title: "Resolve",
    time: "<5m",
    description: "Get resolution context and runbooks",
    status: "success",
  },
];

const getStatusColor = (status: "info" | "warning" | "success") => {
  switch (status) {
    case "info":
      return "bg-background-info-bold"; // Blue
    case "warning":
      return "bg-background-warning-bold"; // Yellow/Amber
    case "success":
      return "bg-background-success-bold"; // Green
  }
};

export const IncidentTimeline = () => {
  return (
    <div className="space-y-6">
      {STEPS.map((step, index) => (
        <Fragment key={step.title}>
          <div className="flex gap-4">
            {/* Timeline indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`h-8 w-8 rounded-full ${getStatusColor(
                  step.status
                )} flex items-center justify-center text-font-inverse text-sm font-primary-bold`}
              >
                {index + 1}
              </div>
              {index < STEPS.length - 1 && (
                <div className="mt-2 h-12 w-0.5 bg-background-neutral-bold" />
              )}
            </div>

            {/* Step content */}
            <div className="pb-2">
              <div className="flex items-baseline gap-2">
                <h3 className="font-primary-bold text-lg text-font">
                  {step.title}
                </h3>
                <span className="text-xs font-primary-bold text-font-subtle uppercase tracking-wider">
                  {step.time}
                </span>
              </div>
              <p className="mt-1 text-sm text-font-subtle">{step.description}</p>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
