# K.O.S.H AI

**Sovereign On-Premise Agentic AI Workbench for Confidential Industrial Work**

*Smart India Hackathon 2026 | Problem Statement: SIH26117 | Team ODIN*

> **“An agent that never phones home.”**

[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115%2B-009688.svg)](https://fastapi.tiangolo.com/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite 8](https://img.shields.io/badge/Vite-8.2-646CFF.svg)](https://vitejs.dev/)
[![SQLite](https://img.shields.io/badge/SQLite-Local%20Store-07405E.svg)](https://www.sqlite.org/)
[![Local Embeddings](https://img.shields.io/badge/Sentence--Transformers-all--MiniLM--L6--v2-8E75FF.svg)](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
[![SIH26117](https://img.shields.io/badge/SIH%202026-Problem%20SIH26117-orange.svg)](https://www.sih.gov.in/)

---

## Table of Contents

1. [Overview & Positioning](#overview--positioning)
2. [The Problem (Industrial Context)](#the-problem-industrial-context)
3. [Sovereign On-Premise Architecture](#sovereign-on-premise-architecture)
4. [Implementation Status Matrix](#implementation-status-matrix)
5. [Key Capabilities](#key-capabilities)
6. [Flagship Workflow: Industrial Inspection & Compliance](#flagship-workflow-industrial-inspection--compliance)
7. [Technology Stack](#technology-stack)
8. [Local Deployment & Setup](#local-deployment--setup)
9. [Environment Configuration](#environment-configuration)
10. [Model Registry & Routing](#model-registry--routing)
11. [Security Model](#security-model)
12. [Known Limitations](#known-limitations)
13. [Future Roadmap (ODIN)](#future-roadmap-odin)

---

## Overview & Positioning

**K.O.S.H AI** is a sovereign, on-premise AI workbench engineered specifically for organizations handling confidential and critical infrastructure—such as petroleum refineries, public sector undertakings (PSUs), defence-linked manufacturing units, and government installations.

Generic consumer AI chatbots pose severe data-leakage and compliance risks when operating on proprietary industrial documents (e.g. piping and instrumentation diagrams, ultrasonic thickness logs, boiler inspection reports, and confidential operating manuals).

**K.O.S.H AI operates on the fundamental principle that data stays strictly within the plant boundary**:
- **Air-Gapped / On-Premise Execution**: No telemetry, no external cloud dependencies for core reasoning.
- **Local RAG Grounding**: High-precision semantic search against locally indexed organizational Standard Operating Procedures (SOPs), API/OISD standards, and safety manuals.
- **Model-Agnostic Registry**: Intelligent model routing designed for open-weight models (e.g. Qwen, Llama, DeepSeek).
- **Deterministic Decision Engine**: Critical safety and compliance decisions (APPROVE / REVIEW / REJECT) are evaluated by deterministic Python rule sets outside the LLM, ensuring zero hallucinations in life-critical industrial environments.
- **Auditable Deliverables**: Produces structured, signed DOCX compliance notes with complete provenance traces.

---

## The Problem (Industrial Context)

In refineries, power stations, and defence manufacturing units, engineers and inspectors face critical information bottlenecks:

1. **Information Trapped in Siloed Documents**: Ultrasonic thickness logs, equipment vibration spectra, and maintenance audits arrive as digital or scanned PDFs.
2. **Disconnected Regulatory Standards**: Reviewing inspection findings requires cross-referencing hundreds of pages of governing standards (OISD, API, ISO, IS/IEC standards) that are rarely searched comprehensively.
3. **Subjective & Unrepeatable Decisions**: Manual interpretation varies between inspectors, creating compliance and safety blind spots.
4. **Cloud Prohibitions**: Defence and PSU security mandates strictly forbid sending plant data, floor schematics, or equipment failure logs to third-party cloud LLM APIs.

K.O.S.H AI transforms this manual, error-prone, and security-compromising process into a repeatable, local, and auditable pipeline.

---

## Sovereign On-Premise Architecture

```
                                      OPERATIONS DESK
                                  (Engineer / Supervisor)
                                             │
                                             ▼
                              ┌─────────────────────────────┐
                              │    K.O.S.H AI Web Client    │
                              │   (React 19 + TypeScript)   │
                              └──────────────┬──────────────┘
                                             │ HTTP REST
                                             ▼
                              ┌─────────────────────────────┐
                              │     FastAPI Core Engine     │
                              │      (Local Port 8000)      │
                              └──────────────┬──────────────┘
                                             │
      ┌──────────────────────────────────────┼──────────────────────────────────────┐
      │                                      │                                      │
      ▼                                      ▼                                      ▼
┌──────────────┐                       ┌──────────────┐                       ┌──────────────┐
│  Document    │                       │  Local RAG   │                       │ Model Router │
│  Pipeline    │                       │  Subsystem   │                       │  & Registry  │
└──────┬───────┘                       └──────┬───────┘                       └──────┬───────┘
       │                                      │                                      │
       ├─► pypdf Extraction                   ├─► Sentence-Transformers              ├─► Local Open-Weight
       ├─► PyMuPDF Rasterizer                 │   (all-MiniLM-L6-v2)                 │   Models (Target)
       └─► Tesseract OCR Engine               ├─► SQLite Vector Table                └─► Cloud Fallback
                                              └─► In-Memory Cosine Similarity            (Optional/Configurable)
                                                     │                                       │
                                                     └───────────────────┬───────────────────┘
                                                                         │
                                                                         ▼
                                                              ┌──────────────────────┐
                                                              │ Deterministic Rules  │
                                                              │   (Explainable AI)   │
                                                              └──────────┬───────────┘
                                                                         │
                                                                         ▼
                                                              ┌──────────────────────┐
                                                              │ DOCX Deliverable Gen │
                                                              │  (Signed Audit Note) │
                                                              └──────────────────────┘
```

---

## Implementation Status Matrix

To maintain complete transparency for the Smart India Hackathon evaluation, here is the honest status of every component:

| Subsystem | Feature | Status | Notes |
|---|---|---|---|
| **Document Ingestion** | PDF text extraction (`pypdf`) | **IMPLEMENTED** | Works page-by-page with page-number tracking |
| | Scanned PDF rendering (`PyMuPDF`) | **IMPLEMENTED** | High-DPI page rasterizer |
| | Classical OCR (`pytesseract`) | **PARTIAL** | Pipeline implemented; requires host `tesseract` binary |
| | Non-PDF formats (DOCX, XLSX, PPTX) | **PARTIAL** | Accepted at upload; parsing pipeline currently PDF-focused |
| **Local RAG** | Document normalization & chunking | **IMPLEMENTED** | Page-aware character overlap chunker |
| | Local vector embeddings | **IMPLEMENTED** | Local `all-MiniLM-L6-v2` via PyTorch |
| | Vector similarity & ranking | **IMPLEMENTED** | Exact cosine similarity with relevance thresholds |
| | Vector persistence | **IMPLEMENTED** | Persisted in SQLite (`document_embeddings`) |
| **Model Registry** | Model Router abstraction | **IMPLEMENTED** | Capability-based routing interface (`DOCUMENT`, `CODE`) |
| | Open-weight local LLM provider | **PLANNED** | Integration with Ollama / vLLM / llama.cpp |
| | Cloud model fallback | **IMPLEMENTED** | Configurable Google Gemini (`google-genai`) provider |
| **Decision & Safety**| Finding & severity extractor | **IMPLEMENTED** | Regex-based structured finding extraction |
| | Deterministic decision rules | **IMPLEMENTED** | High &rarr; Reject, Medium &rarr; Review, Clean &rarr; Approve |
| | DOCX deliverable generation | **IMPLEMENTED** | Real `.docx` output with K.O.S.H AI provenance stamp |
| **Governance** | Role-Based Access Control (RBAC) | **PLANNED** | User database and permission gates |
| | Cryptographic Audit Trail | **PARTIAL** | Stored SQLite documents; full immutable run log planned |
| | Interactive Human-in-the-Loop Gate | **PLANNED** | Operator signature & review checkpoint |
| | Sandboxed Code Execution | **PLANNED** | Isolated container runtime for engineering calculations |

---

## Key Capabilities

### 1. Document Intelligence & Text Normalization
- Classifies incoming documents into text-native, scanned image, or mixed-mode PDFs.
- Normalizes disparate formatting, removes noise, and retains structural headings and page numbering.

### 2. Local Knowledge Grounding (RAG)
- Ingests plant SOPs, maintenance guides, and compliance standards into a local on-premise vector store.
- Cross-document and per-document semantic retrieval grounds all prompts with exact page and section citations.
- When no relevant SOP clauses match above the relevance threshold (`0.35`), the system explicitly reports insufficient evidence rather than hallucinating.

### 3. Deterministic Decision Engine
- LLMs in K.O.S.H AI are **only permitted to extract findings and cite evidence**—they are never given autonomous authority to grant plant approvals.
- High-severity findings automatically trigger **REJECT**.
- Medium-severity findings or ambiguous evidence trigger **MANUAL REVIEW REQUIRED**.
- Clean reports with full evidence coverage trigger **APPROVE**.

### 4. Auditable Deliverable Output
- Every compliance run produces an official Microsoft Word `.docx` deliverable with metadata, decision status, extracted findings, and cited SOP evidence clauses.

---

## Flagship Workflow: Industrial Inspection & Compliance

```
[ Inspection PDF ] ──► [ Text/OCR Extraction ] ──► [ Local SOP Retrieval (RAG) ]
                                                            │
                                                            ▼
[ Signed DOCX Note ] ◄── [ Deterministic Rules ] ◄── [ Routed Model Analysis ]
```

1. **Select Document**: Select an uploaded plant inspection log.
2. **Retrieve Standards**: K.O.S.H AI queries the local knowledge base for matching SOP clauses.
3. **Model Analysis**: The routed model parses the inspection findings with assigned severity levels.
4. **Safety Rule Engine**: Evaluates severity levels against plant thresholds.
5. **Compile Deliverable**: Generates and serves `approval_note_<uuid>.docx`.

---

## Technology Stack

- **Backend Framework**: Python 3.10+, FastAPI, Uvicorn, Pydantic v2, Pydantic-Settings
- **Document & Media Pipeline**: `pypdf`, `PyMuPDF` (`fitz`), `pytesseract`, `Pillow`, `python-docx`
- **Embeddings & Vector Search**: `sentence-transformers` (`all-MiniLM-L6-v2`), `torch`
- **Database & Storage**: SQLite3 (`kosh_ai.db`), local on-premise filesystem storage
- **Frontend Architecture**: React 19, TypeScript, Vite 8, React Router v7, Lucide React
- **Test Suite**: Pytest (260+ automated tests)

---

## Local Deployment & Setup

### Prerequisites

- **Python 3.10+**
- **Node.js 18+ & npm 9+**
- *(Optional for scanned documents)*: **Tesseract OCR** binary on system PATH.

### 1. Clone the Repository

```bash
git clone https://github.com/chiragsingh-sd/KOSH-AI.git
cd KOSH-AI
```

### 2. Configure Environment

Copy the example configuration file:

```bash
copy .env.example .env
```

Edit `.env` to configure your settings:
```env
APP_ENV=development
PORT=8000
DATABASE_PATH=./kosh_ai.db
GEMINI_API_KEY=your_api_key_here  # If using cloud fallback
```

### 3. Backend Setup

```bash
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1    # On Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

The backend server will start at `http://localhost:8000`. Interactive OpenAPI documentation is accessible at `http://localhost:8000/api/docs`.

### 4. Frontend Setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend client will launch at `http://localhost:5173`.

---

## Model Registry & Routing

K.O.S.H AI implements a decoupled **Model Provider Interface**:

```python
class ModelProvider(Protocol):
    name: str
    capabilities: tuple[ModelCapability, ...]
    def generate(self, request: ModelRequest) -> ModelResponse: ...
```

Workflows depend strictly on declared capabilities (`ModelCapability.DOCUMENT`, `ModelCapability.CODE`), never on a specific vendor or cloud service.

- **Current Implementation**: Includes `GeminiModelProvider` as a cloud benchmark provider and `DeterministicModelProvider` for testing.
- **Sovereign Roadmap**: Adding local inference adapters (Ollama, vLLM, llama.cpp) allows plugging in models like `Qwen-2.5-Coder`, `Llama-3.3-70B`, or `DeepSeek-R1` without modifying a single line of workflow code.

---

## Security Model

1. **Air-Gap First**: Architected so all document parsing, embeddings, chunk storage, vector search, and deliverable rendering occur on the local machine.
2. **Local Storage Boundary**: Document uploads are stored on the local filesystem under `data/uploads/` with UUID-based directory isolation.
3. **Directory Traversal Prevention**: File download routes resolve target paths against canonical roots and reject path traversal attempts.
4. **Explainable Deterministic Safety**: Critical safety evaluations bypass the stochastic LLM layer completely and execute via auditable, deterministic rule trees.

---

## Known Limitations

- **OCR Dependency**: Tesseract OCR requires an external binary install on the host OS. Without it, image-based scanned PDFs will report an OCR unavailability error (digital/text PDFs work completely out of the box).
- **Office Document Parsing**: DOCX, XLSX, and PPTX uploads are accepted by the storage repository, but the ingestion text-extraction pipeline currently only parses PDF formats.
- **Vector Search Scale**: Vector embeddings are currently stored in SQLite and ranked via in-memory Python cosine similarity. For installations exceeding 50,000 document chunks, an on-premise vector database (e.g. Qdrant or Milvus) is recommended.
- **Single-User Prototype**: The current prototype does not yet enforce active user authentication sessions or multi-tenant authorization partitions.

---

## Future Roadmap (ODIN)

- [ ] **On-Premise Open-Weight LLM Integration**: Bundled Ollama / vLLM local engine with Qwen2.5-7B/14B and DeepSeek-R1-Distill weights.
- [ ] **Interactive Human-in-the-Loop Sign-Off**: Multi-stage supervisor review dashboard with digital signatures.
- [ ] **Native DOCX & Excel Ingestion**: Full document table extraction for refinery equipment schedules and maintenance logs.
- [ ] **Containerized Air-Gap Appliance**: Single-command deployment via `docker-compose.yml` with air-gapped container image bundles.
- [ ] **Role-Based Access Control (RBAC)**: Fine-grained permissions for Plant Engineers, Compliance Officers, and External Auditors.
- [ ] **Sandboxed Code Execution**: Isolated Docker runtime for verifying engineering formulas and flow-rate calculations.

---

*Engineered by Team ODIN for Smart India Hackathon 2026 (Problem Statement: SIH26117).*