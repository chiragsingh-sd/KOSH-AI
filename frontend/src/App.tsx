import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { DashboardPage } from './pages/DashboardPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { KnowledgeBasePage } from './pages/KnowledgeBasePage';
import { ApprovalWorkflowPanel } from './components/dashboard/ApprovalWorkflowPanel';
import { PlaceholderPage } from './pages/PlaceholderPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<DashboardPage />} />
          <Route path="documents" element={<DocumentsPage />} />

          <Route
            path="workflows"
            element={
              <div>
                <ApprovalWorkflowPanel />
              </div>
            }
          />

          <Route path="knowledge" element={<KnowledgeBasePage />} />

          <Route
            path="sops"
            element={
              <PlaceholderPage
                title="SOP &amp; Standards Library"
                description="Central repository for governing plant SOPs, OISD standards, and API engineering specifications. All documents are chunked and embedded into the local on-premise vector index."
              />
            }
          />

          <Route
            path="history"
            element={
              <PlaceholderPage
                title="Audit Trail &amp; Workflow Logs"
                description="Immutable log of K.O.S.H Agent executions, deterministic rule evaluations, operator approvals, and generated deliverable provenance."
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
