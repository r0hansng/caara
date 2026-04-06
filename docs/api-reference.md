# API Reference

## Query Endpoint

### POST `/query`

Process a query through the CAARA pipeline.

#### Request Body

```json
{
  "query": "Evaluate SaaS market viability",
  "context": "tech industry",
  "options": {
    "include_sources": true,
    "confidence_threshold": 0.8
  }
}
```

#### Request Parameters

| Parameter                      | Type    | Required | Description                                            |
| ------------------------------ | ------- | -------- | ------------------------------------------------------ |
| `query`                        | string  | Yes      | The main research query to process                     |
| `context`                      | string  | No       | Additional context or domain information               |
| `options`                      | object  | No       | Query processing options                               |
| `options.include_sources`      | boolean | No       | Include source information in response (default: true) |
| `options.confidence_threshold` | number  | No       | Minimum confidence score for results (default: 0.0)    |

#### Success Response (200 OK)

```json
{
  "id": "query_abc123xyz",
  "result": "Market analysis result...",
  "confidence": 0.92,
  "metadata": {
    "execution_time_ms": 2500,
    "estimated_cost_usd": 0.15,
    "sources_count": 3,
    "sources": ["source_1", "source_2", "source_3"],
    "decomposed_tasks": 3
  }
}
```

#### Response Fields

| Field                         | Type   | Description                          |
| ----------------------------- | ------ | ------------------------------------ |
| `id`                          | string | Unique identifier for the query      |
| `result`                      | string | The synthesized research result      |
| `confidence`                  | number | Confidence score (0.0 to 1.0)        |
| `metadata`                    | object | Additional execution metadata        |
| `metadata.execution_time_ms`  | number | Total execution time in milliseconds |
| `metadata.estimated_cost_usd` | number | Estimated API costs for this query   |
| `metadata.sources_count`      | number | Number of sources used               |
| `metadata.sources`            | array  | List of source identifiers           |
| `metadata.decomposed_tasks`   | number | Number of sub-tasks created          |

#### Error Responses

**400 Bad Request**

```json
{
  "error": "Invalid query format",
  "details": "Query parameter is required"
}
```

**500 Internal Server Error**

```json
{
  "error": "Processing failed",
  "details": "Error message describing what went wrong",
  "request_id": "req_xyz789"
}
```

## Example Usage

### JavaScript/Node.js

```javascript
const response = await fetch('http://localhost:3000/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'What are the latest trends in AI?',
    context: 'technology industry',
    options: {
      include_sources: true,
      confidence_threshold: 0.75
    }
  })
});

const result = await response.json();
console.log(result);
```

### cURL

```bash
curl -X POST http://localhost:3000/query \
  -H "Content-Type: application/json" \
  -d '{
    "query": "What are the latest trends in AI?",
    "context": "technology industry",
    "options": {
      "include_sources": true,
      "confidence_threshold": 0.75
    }
  }'
```

## Rate Limiting

Currently, rate limiting is not enforced. This will be added in a future release.

## Error Codes

| Code | Meaning               | Description                                       |
| ---- | --------------------- | ------------------------------------------------- |
| 400  | Bad Request           | Invalid request format or missing required fields |
| 500  | Internal Server Error | Server error during query processing              |
| 503  | Service Unavailable   | Service is temporarily unavailable                |
