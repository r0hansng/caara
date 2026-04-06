# Getting Started

## Prerequisites

The following are required for development:

- **Node.js** 20.19, 22.12, or 24.0+
- **Bun** 1.3+
- **PostgreSQL** 12+ (local instance or managed service)
- **Redis** 6+ (optional for local development)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/caara.git
cd caara
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
# Database connection
DATABASE_URL="postgresql://user:password@localhost:5432/caara?schema=public"

# Redis cache
REDIS_URL="redis://localhost:6379"

# LLM service
OPENAI_API_KEY="sk-..."

# Application configuration
NODE_ENV="development"
PORT="3000"
```

### 4. Initialize the Database

```bash
bun run prisma migrate dev
```

### 5. Start the Development Server

```bash
bun run dev
```

The application will be accessible at `http://localhost:3000`

## Project Structure

```
src/
├── api/
│   ├── routes/              # Endpoint definitions
│   ├── controllers/         # Request handlers
│   └── middleware/          # Request/response middleware
├── services/                # Business logic layer
├── agents/
│   ├── executor.ts         # Task execution engine
│   ├── planner.ts          # Query planning and decomposition
│   ├── memory.context.ts   # Memory and context management
│   └── tools/              # Tool and capability definitions
├── retrieval/
│   ├── hybrid.retriever.ts # Hybrid search orchestration
│   ├── keyword.search.ts   # Keyword-based retrieval
│   ├── vector.store.ts     # Vector similarity matching
│   └── reranker.ts         # Result reranking logic
├── verification/
│   ├── verifier.ts         # Output verification
│   └── confidence.scorer.ts # Confidence scoring
├── db/
│   └── repositories/       # Data access patterns
├── cache/                  # Caching clients and utilities
├── queues/                 # Background job workers
├── llm/                    # LLM clients and prompt templates
├── memory/                 # Embedding and memory services
└── utils/                  # Logging, metrics, and helpers

prisma/
├── schema.prisma           # Database schema definition
└── migrations/             # Versioned SQL migrations

tests/
└── agent.test.ts          # Integration and unit tests
```

## Next Steps

- Review the [API Reference](./api-reference.md) for endpoint documentation
- See [Development Commands](./development.md) for available scripts
- Check out the [Architecture Guide](./architecture.md) for system design details
