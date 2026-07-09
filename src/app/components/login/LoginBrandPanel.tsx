import React from "react";
import { FaExclamationCircle, FaCheckCircle, FaLightbulb } from "react-icons/fa";

export const LoginBrandPanel = () => {
  return (
    <div className="autonomy-login-brand-panel relative overflow-hidden">
      {/* Film Grain Overlay */}
      <div className="autonomy-film-grain" />

      {/* Wordmark */}
      <div className="relative z-10">
        <div className="autonomy-wordmark mb-16">
          <span className="autonomy-wordmark-text">Autonomy</span>
          <span className="autonomy-wordmark-accent">AI</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <h1 className="autonomy-login-heading mb-8">
          Your on-call engineer that never sleeps
        </h1>

        {/* Timeline */}
        <div className="mb-16">
          <div className="autonomy-timeline-step">
            <FaExclamationCircle className="w-4 h-4 text-[#F25730]" />
            <span className="autonomy-timeline-text">Alert received</span>
          </div>
          <div className="autonomy-timeline-step">
            <FaLightbulb className="w-4 h-4 text-[#F25730]" />
            <span className="autonomy-timeline-text">Incident triaged</span>
          </div>
          <div className="autonomy-timeline-step">
            <FaCheckCircle className="w-4 h-4 text-[#F25730]" />
            <span className="autonomy-timeline-text">Fix deployed</span>
          </div>
        </div>
      </div>

      {/* Trust Badges Footer */}
      <div className="relative z-10 flex flex-wrap gap-2">
        <div className="autonomy-badge">SOC 2 Type II</div>
        <div className="autonomy-badge">Runs in your infra</div>
        <div className="autonomy-badge">150+ teams</div>
      </div>
    </div>
  );
};
