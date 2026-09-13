import React from 'react';
import { ShieldCheck, Terminal } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => {
  return (
    <div className="placeholder-page card">
      <div className="placeholder-icon-wrap">
        <ShieldCheck size={44} style={{ color: 'var(--primary)' }} />
      </div>
      <span className="eyebrow">K.O.S.H AI · SOVEREIGN GOVERNANCE</span>
      <h2>{title}</h2>
      <p className="placeholder-desc">{description}</p>

      <div className="placeholder-audit-box">
        <div className="audit-box-header">
          <Terminal size={15} />
          <span>Sovereign Industrial Subsystem Specification (SIH26117)</span>
        </div>
        <div className="audit-box-grid">
          <div className="audit-box-item">
            <span className="audit-key">Access Control:</span>
            <span className="audit-val">Strict Industrial RBAC (Engineer / Supervisor / Admin)</span>
          </div>
          <div className="audit-box-item">
            <span className="audit-key">Audit Engine:</span>
            <span className="audit-val">Cryptographic Provenance Log · Tamper-evident</span>
          </div>
          <div className="audit-box-item">
            <span className="audit-key">Sovereignty Status:</span>
            <span className="audit-val">100% On-Premise · Air-Gapped · Zero External Cloud</span>
          </div>
          <div className="audit-box-item">
            <span className="audit-key">Human Approval:</span>
            <span className="audit-val">Mandatory Engineering Sign-Off Gateway</span>
          </div>
        </div>
      </div>
    </div>
  );
};
