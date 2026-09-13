import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Activity,
  Database,
  BookOpen,
  History,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <nav className="sidebar-nav">
        <div>
          <div className="sidebar-section-title">AI Workspace</div>
          <NavLink to="/" end className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={18} />
            <span>Operations Dashboard</span>
          </NavLink>
          <NavLink to="/documents" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <FileText size={18} />
            <span>Project Documents</span>
          </NavLink>
          <NavLink to="/workflows" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <Activity size={18} />
            <span>Job Workflows</span>
          </NavLink>
        </div>

        <div>
          <div className="sidebar-section-title">Knowledge & Compliance</div>
          <NavLink to="/knowledge" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <Database size={18} />
            <span>Knowledge Sources</span>
          </NavLink>
          <NavLink to="/sops" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <BookOpen size={18} />
            <span>SOP & Standards Library</span>
          </NavLink>
        </div>

        <div>
          <div className="sidebar-section-title">Governance & Security</div>
          <NavLink to="/history" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <History size={18} />
            <span>Audit Trail & Logs</span>
          </NavLink>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-sovereign-tag">
          <ShieldCheck size={14} />
          {!collapsed && <span>Zero Telemetry · On-Prem</span>}
        </div>
        <button className="icon-btn" onClick={onToggle} aria-label="Toggle Sidebar" style={{ width: '100%', marginTop: '6px' }}>
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </aside>
  );
};
