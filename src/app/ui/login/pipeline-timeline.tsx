export const PipelineTimeline = () => {
  const stages = [
    {
      id: "alert",
      label: "Alert",
      description: "Incident triggered",
      color: "bg-blue-400",
      textColor: "text-blue-400",
    },
    {
      id: "triage",
      label: "Triage",
      description: "AI analyzes",
      color: "bg-amber-400",
      textColor: "text-amber-400",
    },
    {
      id: "fix",
      label: "Fix",
      description: "Auto-remediate",
      color: "bg-emerald-400",
      textColor: "text-emerald-400",
    },
  ];

  return (
    <div className="space-y-6">
      {stages.map((stage, index) => (
        <div key={stage.id} className="flex gap-4">
          {/* Timeline Dot and Line */}
          <div className="flex flex-col items-center">
            {/* Status Dot */}
            <div
              className={`w-4 h-4 rounded-full ${stage.color} flex-shrink-0 ring-4 ring-slate-900`}
            />
            {/* Connecting Line (not shown for last item) */}
            {index < stages.length - 1 && (
              <div className="w-1 h-8 bg-gradient-to-b from-slate-600 to-transparent mt-2" />
            )}
          </div>

          {/* Stage Content */}
          <div className="pb-4">
            <div className={`text-sm font-semibold ${stage.textColor}`}>
              {stage.label}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {stage.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
