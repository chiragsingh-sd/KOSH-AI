import React from 'react';
import { ShieldCheck, Lock, ShieldAlert } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-logo">
          <div className="topbar-logo-mark">
            <Lock size={18} className="topbar-logo-icon" />
          </div>
          <div className="topbar-branding">
            <div className="topbar-title">
              <span className="brand-name">K.O.S.H AI</span>
              <span className="brand-team">ODIN</span>
            </div>
            <span className="topbar-subtitle">Sovereign Industrial AI Workbench · SIH26117</span>
          </div>
        </div>

        <div className="sovereignty-badge" title="Data remains strictly confined to on-premise infrastructure">
          <ShieldCheck size={14} className="sovereignty-icon" />
          <span>AIR-GAPPED SOVEREIGN RUNTIME</span>
        </div>
      </div>

      <div className="topbar-right">
        <div className="system-health-pill">
          <div className="status-dot pulsing"></div>
          <span className="health-label">Node Status: <strong>Online / Air-Gapped</strong></span>
        </div>

        <div className="classification-pill" title="Security clearance for confidential PSU/industrial data">
          <ShieldAlert size={13} />
          <span>CONFIDENTIAL // PSU-GRADE</span>
        </div>

        <div className="operator-profile">
          <div className="operator-avatar">PSU</div>
          <div className="operator-info">
            <span className="operator-name">Refinery Supervisor</span>
            <span className="operator-role">Role: Lead Engineer (RBAC)</span>
          </div>
        </div>
      </div>
    </header>
  );
};
