import React from 'react';
import { Cpu, FileSearch, Database, ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';

export const ActivityPanel: React.FC = () => {
  return (
    <div className="card activity-card" style={{ height: '100%' }}>
      <div className="section-title">K.O.S.H Agent Runtime & Security Guard</div>
      <div className="activity-panel">
        <div className="activity-item">
          <div className="activity-indicator active">
            <ShieldCheck size={14} />
          </div>
          <div className="activity-content">
            <div className="activity-title">Sovereign Guard Active</div>
            <div className="activity-time">Zero telemetry · Air-gap boundary enforced</div>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-indicator active">
            <Cpu size={14} />
          </div>
          <div className="activity-content">
            <div className="activity-title">Model Router Engine</div>
            <div className="activity-time">Capability registry: Document & Code</div>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-indicator active">
            <Database size={14} />
          </div>
          <div className="activity-content">
            <div className="activity-title">Local Knowledge Base (RAG)</div>
            <div className="activity-time">Sentence-Transformers (384d, SQLite store)</div>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-indicator active">
            <FileSearch size={14} />
          </div>
          <div className="activity-content">
            <div className="activity-title">Document Intelligence</div>
            <div className="activity-time">pypdf parser + PyMuPDF rasterizer ready</div>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-indicator active">
            <Terminal size={14} />
          </div>
          <div className="activity-content">
            <div className="activity-title">Audit Engine & Deliverables</div>
            <div className="activity-time">Deterministic rule evaluation & DOCX output</div>
          </div>
        </div>
      </div>

      <div className="activity-footer">
        <div className="activity-footer-header">
          <CheckCircle2 size={13} style={{ color: 'var(--success)' }} />
          <span>Security Checklist (SIH26117)</span>
        </div>
        <ul className="security-checklist">
          <li>✓ Air-gapped on-premise operation</li>
          <li>✓ Grounded prompts with SOP provenance</li>
          <li>✓ Deterministic rules outside LLM</li>
          <li>✓ Human-verifiable DOCX deliverable</li>
        </ul>
      </div>
    </div>
  );
};
