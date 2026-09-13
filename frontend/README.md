# K.O.S.H AI — Frontend Client

**Sovereign On-Premise Agentic AI Workbench for Confidential Industrial Work**  
*Problem Statement: SIH26117 | Team ODIN*

---

## Overview

This is the web frontend client for **K.O.S.H AI**, engineered specifically for refinery engineers, maintenance supervisors, plant operators, and compliance officers. It provides an intuitive, high-visibility control surface for:

- **Project Documents**: On-premise storage and inspection document catalog.
- **Sovereign Inspection Workflows**: End-to-end execution of compliance workflows against governing SOPs.
- **Knowledge Sources (Local RAG)**: Ingestion and indexing of plant standard operating procedures (SOPs), API/OISD standards, and equipment specifications.
- **Audit Trail & Governance**: Complete tracking of model execution, deterministic rule evaluations, and downloadable `.docx` deliverables.
- **Sovereignty Telemetry**: Real-time indication of local node status, ensuring confidential data never leaves the plant perimeter.

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Routing**: React Router v7
- **Iconography**: Lucide React
- **Linter**: Oxlint

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation & Execution

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

The frontend will start locally on `http://localhost:5173`.

### Environment Configuration

Configure the backend API URL in `.env` (or project root `.env`):

```env
VITE_API_BASE_URL=http://localhost:8000
```
