# Applied AI Lab

> Building production-grade AI systems from first principles.

This repository documents my journey into Applied AI Engineering by implementing core concepts, architectures, and real-world AI systems from scratch.

The focus is not on using AI tools as black boxes, but on understanding how they work internally, why they fail, and how to build reliable systems around them.

---

## What This Repository Covers

### Foundations

Understanding the building blocks that power modern AI systems.

#### Transformers

* What happens when you send a message to an LLM
* How transformers process text internally
* Tokenization and text representation
* Attention mechanisms
* Embeddings and vector spaces
* Context windows and limitations
* Temperature, Top-P, and sampling strategies

#### LLM APIs

* OpenAI APIs
* Claude APIs
* Gemini APIs
* Ollama and local models
* Embedding generation
* Streaming responses
* Model selection trade-offs

#### Prompt Engineering

* Zero-shot prompting
* Few-shot prompting
* Role prompting
* Chain-of-Thought prompting
* Self-consistency
* ReAct prompting
* Structured outputs
* Prompt chaining
* Reliability patterns
* Common failure modes

---

## Building AI Applications

### Streaming ChatGPT Clone

Building a fully functional ChatGPT-style application with:

* Real-time streaming responses
* Conversation persistence
* Markdown rendering
* Code block rendering
* Context management
* Token counting
* Context window handling

---

## AI System Design

### Retrieval Augmented Generation (RAG)

Understanding and implementing modern retrieval systems.

Topics include:

* Indexing pipelines
* Query pipelines
* Fixed-size chunking
* Recursive chunking
* Semantic chunking
* Document parsing
* Embedding generation
* Retrieval strategies

### Vector Search

Using vector databases to power retrieval.

Topics include:

* Qdrant
* Similarity search
* Metadata filtering
* Reranking
* Retrieval optimization

### Production Ingestion Systems

Building scalable ingestion pipelines.

Topics include:

* Queue-based architectures
* Background workers
* Retry mechanisms
* Failure recovery
* Progress tracking
* Large-scale document processing

---

## Beyond Traditional RAG

Exploring where vector search succeeds and where it fails.

Topics include:

* Vectorless Retrieval
* PageIndex Retrieval
* LLM Generated Wikis
* Agent Memory Systems
* Hybrid Retrieval Architectures
* Retrieval Trade-offs

---

## AI-Powered Projects

### NotebookLM Clone

* Document uploads
* Multi-document retrieval
* Cross-document reasoning
* Large file handling

### AI Pitch Deck Generator

* Prompt to outline generation
* Outline to slides pipeline
* Structured outputs
* Exportable presentations

### Coding Harness

Building a local coding assistant capable of:

* Tool calling
* File operations
* Code understanding
* Agent workflows
* Local model support

---

## Agent Engineering

### Agent Fundamentals

Learning how modern AI agents operate.

Topics include:

* Agent architectures
* Planning loops
* Tool calling
* Parallel execution
* Sequential execution
* Guardrails
* Error recovery
* Safe execution patterns

### CLI Agent From Scratch

Building a coding agent similar to Claude Code.

Features include:

* File tools
* Shell tools
* Directory navigation
* Agent loops
* Interactive terminal interface

### Agent Frameworks

Exploring:

* OpenAI Agents SDK
* Claude Agent SDK
* Multi-agent systems
* Handoffs
* Shared state
* Tracing
* Session management

### Voice Agents

* Realtime APIs
* Audio streaming
* Speech-to-speech workflows
* Interactive voice assistants

---

## Memory Systems

Building persistent memory layers for AI agents.

Topics include:

* Short-term memory
* Long-term memory
* Episodic memory
* Semantic memory
* Memory retrieval
* Memory updates
* Forget policies

Implementations include:

* Mem0
* Neo4j
* Knowledge Graphs
* Personalized AI systems

---

## MCP Ecosystem

Understanding how AI tools communicate.

Topics include:

* Model Context Protocol (MCP)
* MCP servers
* MCP clients
* Tool exposure
* Protocol design
* Server publishing

### Skills & Plugins

* Claude Skills
* Plugin development
* AI ecosystem integrations
* Capability packaging

---

## Advanced RAG Topics

The topics that differentiate production systems from demos.

* Hybrid Search (BM25 + Vector Search)
* Reranking Models
* Metadata Filtering
* Parent-Child Retrieval
* Multi-Vector Retrieval
* Context Compression
* Graph RAG
* Agentic RAG
* Query Rewriting
* Evaluation Frameworks (RAGAS, DeepEval)

---

## Goal

The goal of this repository is to build a deep understanding of:

* AI System Design
* Retrieval Systems
* Agent Engineering
* Memory Architectures
* MCP Ecosystem
* Production AI Infrastructure
* Evaluation Frameworks
* Real-World AI Applications
