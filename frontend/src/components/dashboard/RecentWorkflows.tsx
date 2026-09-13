import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';

const industrialWorkflows = [
  {
    id: 'wf-9812',
    title: 'Crude Distillation Unit (CDU-II) Piping Inspection',
    status: 'Approved',
    statusType: 'success',
    input: 'cdu2_ultrasonic_thickness_log.pdf',
    output: 'cdu2_approval_note.docx',
    sopStandard: 'OISD-118 / API-570',
    time: '14 mins ago',
  },
  {
    id: 'wf-9811',
    title: 'Boiler Feed Pump 102-B Bearing Vibration Analysis',
    status: 'Manual Review Required',
    statusType: 'warning',
    input: 'bfp102b_vibration_spectrum.pdf',
    output: 'bfp102b_review_action_note.docx',
    sopStandard: 'ISO-10816-3 Category II',
    time: '1 hour ago',
  },
  {
    id: 'wf-9810',
    title: 'Hazardous Zone-1 Flameproof Enclosure Audit',
    status: 'Rejected (Critical Breach)',
    statusType: 'danger',
    input: 'zone1_flameproof_inspection.pdf',
    output: 'zone1_rejection_notice.docx',
    sopStandard: 'IS/IEC 60079-1 Explosive Atmospheres',
    time: '3 hours ago',
  },
];

export const RecentWorkflows: React.FC = () => {
  return (
    <div>
      <div className="section-title">Job History & Industrial Workflow Log</div>
      <div className="workflows-list">
        {industrialWorkflows.map((workflow) => (
          <div key={workflow.id} className="workflow-item">
            <div className="workflow-info">
              <div className="workflow-title-row">
                <h4>{workflow.title}</h4>
                <span className="workflow-time">{workflow.time}</span>
              </div>
              <div className="workflow-meta">
                <span
                  className={`badge ${
                    workflow.statusType === 'success'
                      ? 'badge-success'
                      : workflow.statusType === 'warning'
                        ? 'badge-warning'
                        : 'badge-danger'
                  }`}
                >
                  {workflow.statusType === 'success' && <CheckCircle2 size={12} style={{ marginRight: '4px' }} />}
                  {workflow.statusType === 'warning' && <AlertTriangle size={12} style={{ marginRight: '4px' }} />}
                  {workflow.statusType === 'danger' && <XCircle size={12} style={{ marginRight: '4px' }} />}
                  {workflow.status}
                </span>
                <span className="workflow-sop">
                  <ShieldCheck size={12} style={{ marginRight: '4px' }} />
                  {workflow.sopStandard}
                </span>
              </div>
            </div>
            <div className="workflow-files">
              <span className="file-chip">{workflow.input}</span>
              <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} />
              <span className="file-chip file-output">{workflow.output}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
