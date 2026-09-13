import React from 'react';
import { Server, Database, Cpu, ShieldCheck } from 'lucide-react';

export const StatusBar: React.FC = () => {
  return (
    <footer className="statusbar">
      <div className="statusbar-item status-live" title="Execution operates locally within organizational boundaries">
        <Server size={14} />
        <span>Node: <strong>K.O.S.H On-Premise (Localhost)</strong></span>
      </div>

      <div className="statusbar-item" title="Embeddings generated locally via Sentence-Transformers into SQLite">
        <Database size={14} />
        <span>Vector RAG: <strong>Local Chunks (all-MiniLM-L6-v2)</strong></span>
      </div>

      <div className="statusbar-item" title="Model Router capability dispatcher">
        <Cpu size={14} />
        <span>Model Registry: <strong>Active Router (Document / Code)</strong></span>
      </div>

      <div className="statusbar-item status-sovereignty" title="Confidential industrial telemetry policy">
        <ShieldCheck size={14} />
        <span>Sovereignty: <strong>Data Stays On-Premise</strong></span>
      </div>
    </footer>
  );
};
