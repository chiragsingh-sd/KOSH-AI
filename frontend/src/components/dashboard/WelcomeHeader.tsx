import React from 'react';
import { Shield } from 'lucide-react';

export const WelcomeHeader: React.FC = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? 'Good morning'
      : hour < 17
        ? 'Good afternoon'
        : 'Good evening';

  return (
    <div className="welcome-header">
      <div className="welcome-tag">
        <Shield size={14} />
        <span>K.O.S.H AI · SOVEREIGN INDUSTRIAL WORKBENCH · TEAM ODIN (SIH26117)</span>
      </div>
      <h1>{greeting}, Plant Operations Lead</h1>
      <p className="welcome-subtext">
        An agent that never phones home. Process confidential inspection logs, ground reasoning in organizational SOPs,
        and generate auditable deliverables with zero cloud telemetry.
      </p>
    </div>
  );
};
