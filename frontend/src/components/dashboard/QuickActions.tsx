import React from 'react';
import {
  FileSearch,
  BookOpenCheck,
  History,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

const actions: QuickAction[] = [
  {
    title: 'Run Compliance Analysis',
    description: 'Evaluate equipment logs against governing SOP evidence',
    icon: <FileSearch size={20} />,
    to: '/workflows',
  },
  {
    title: 'Manage Knowledge Sources',
    description: 'Index plant SOPs, specifications, and safety guidelines',
    icon: <BookOpenCheck size={20} />,
    to: '/knowledge',
  },
  {
    title: 'Audit Trail & Provenance',
    description: 'Inspect execution logs, model decisions, and generated deliverables',
    icon: <History size={20} />,
    to: '/history',
  },
];

export const QuickActions: React.FC = () => {
  return (
    <section aria-labelledby="quick-actions-title">
      <div className="section-title" id="quick-actions-title">
        Controlled Operations
      </div>

      <div className="quick-actions-grid">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.to}
            className="card action-card"
            aria-label={`${action.title}: ${action.description}`}
          >
            <div className="action-card-top">
              <div className="action-icon">
                {action.icon}
              </div>

              <ArrowUpRight
                size={16}
                className="action-arrow"
                aria-hidden="true"
              />
            </div>

            <div>
              <div className="action-title">{action.title}</div>

              <div className="action-description">
                {action.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};