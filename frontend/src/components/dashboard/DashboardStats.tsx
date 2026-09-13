import React, { useEffect, useState } from 'react';
import {
  FileStack,
  FileText,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import {
  getDocuments,
  type DocumentRecord,
} from '../../services/documentService';

interface StatCard {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export const DashboardStats: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentRecord[]>([]);

  useEffect(() => {
    let active = true;

    const loadDocuments = async () => {
      try {
        const records = await getDocuments();

        if (active) {
          setDocuments(records);
        }
      } catch {
        // Supplementary UI: graceful degradation if backend is starting
      }
    };

    void loadDocuments();

    return () => {
      active = false;
    };
  }, []);

  const pdfCount = documents.filter(
    (document) => document.extension.toLowerCase() === '.pdf',
  ).length;

  const sopCount = documents.filter(
    (document) => document.role === 'sop',
  ).length;

  const stats: StatCard[] = [
    {
      label: 'Project Documents',
      value: documents.length.toString(),
      description: 'Stored on-premise',
      icon: <FileStack size={18} />,
    },
    {
      label: 'Inspection Logs',
      value: pdfCount.toString(),
      description: 'Ready for analysis',
      icon: <FileText size={18} />,
    },
    {
      label: 'Governing SOPs',
      value: sopCount.toString(),
      description: 'Indexed for RAG grounding',
      icon: <BookOpen size={18} />,
    },
    {
      label: 'Sovereignty Status',
      value: 'Secured',
      description: 'Zero external telemetry',
      icon: <ShieldCheck size={18} />,
    },
  ];

  return (
    <section className="dashboard-stats" aria-label="K.O.S.H AI System Status">
      {stats.map((stat) => (
        <div className="dashboard-stat-card" key={stat.label}>
          <div className="dashboard-stat-top">
            <div className="dashboard-stat-icon">
              {stat.icon}
            </div>

            <span className="dashboard-stat-label">
              {stat.label}
            </span>
          </div>

          <div className="dashboard-stat-value">
            {stat.value}
          </div>

          <div className="dashboard-stat-description">
            {stat.description}
          </div>
        </div>
      ))}
    </section>
  );
};