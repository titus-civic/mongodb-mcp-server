import type { McpServer } from "database";

// MongoDB server
export const mongodbServer: McpServer = {
  logoName: null,
  id: "mongodb",
  serverUrl: null,
  version: "1.0.0",
  name: "MongoDB",
  description: "A Model Context Protocol server to connect to MongoDB databases and MongoDB Atlas Clusters",
  type: "PUBLIC",
  transportType: "stdio-hosted",
  tags: ["database", "mongodb", "atlas", "nosql", "aggregation"],
  publisher: {
    name: "MongoDB Inc",
    url: "https://github.com/mongodb-js/mongodb-mcp-server"
  },
  toolsSchema: {
    tools: [
      {
        name: "connect",
        description: "Connect to a MongoDB instance",
        inputSchema: {
          type: "object",
          properties: {
            connectionString: {
              type: "string",
              description: "MongoDB connection string",
            }
          },
          required: ["connectionString"],
        }
      },
      {
        name: "find",
        description: "Run a find query against a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            filter: {
              type: "object",
              description: "The query filter, matching the syntax of the query argument of db.collection.find()",
            },
            projection: {
              type: "object",
              description: "The projection, matching the syntax of the projection argument of db.collection.find()",
            },
            limit: {
              type: "number",
              description: "The maximum number of documents to return",
              default: 10,
            },
            sort: {
              type: "object",
              description: "A document, describing the sort order, matching the syntax of the sort argument of cursor.sort()",
            }
          },
          required: ["database", "collection"],
        }
      },
      {
        name: "aggregate",
        description: "Run an aggregation against a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            pipeline: {
              type: "array",
              description: "The aggregation pipeline stages",
              items: {
                type: "object"
              }
            }
          },
          required: ["database", "collection", "pipeline"],
        }
      },
      {
        name: "count",
        description: "Get the number of documents in a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            filter: {
              type: "object",
              description: "The query filter for counting documents",
            }
          },
          required: ["database", "collection"],
        }
      },
      {
        name: "insert-many",
        description: "Insert multiple documents into a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            documents: {
              type: "array",
              description: "Array of documents to insert",
              items: {
                type: "object"
              }
            }
          },
          required: ["database", "collection", "documents"],
        }
      },
      {
        name: "update-many",
        description: "Update multiple documents in a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            filter: {
              type: "object",
              description: "The query filter for documents to update",
            },
            update: {
              type: "object",
              description: "The update operations to perform",
            },
            options: {
              type: "object",
              description: "Additional options for the update operation",
            }
          },
          required: ["database", "collection", "filter", "update"],
        }
      },
      {
        name: "delete-many",
        description: "Delete multiple documents from a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            filter: {
              type: "object",
              description: "The query filter for documents to delete",
            }
          },
          required: ["database", "collection", "filter"],
        }
      },
      {
        name: "create-index",
        description: "Create an index for a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            keys: {
              type: "object",
              description: "The index specification",
            },
            options: {
              type: "object",
              description: "Additional options for index creation",
            }
          },
          required: ["database", "collection", "keys"],
        }
      },
      {
        name: "create-collection",
        description: "Create a new MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection to create",
            },
            options: {
              type: "object",
              description: "Collection creation options",
            }
          },
          required: ["database", "collection"],
        }
      },
      {
        name: "drop-collection",
        description: "Remove a collection from a MongoDB database",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection to drop",
            }
          },
          required: ["database", "collection"],
        }
      },
      {
        name: "drop-database",
        description: "Remove a MongoDB database",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database to drop",
            }
          },
          required: ["database"],
        }
      },
      {
        name: "list-databases",
        description: "List all databases for a MongoDB connection",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        }
      },
      {
        name: "list-collections",
        description: "List all collections for a given database",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            }
          },
          required: ["database"],
        }
      },
      {
        name: "collection-indexes",
        description: "Describe the indexes for a collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            }
          },
          required: ["database", "collection"],
        }
      },
      {
        name: "collection-schema",
        description: "Describe the schema for a collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            }
          },
          required: ["database", "collection"],
        }
      },
      {
        name: "collection-storage-size",
        description: "Get the size of a collection in MB",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            }
          },
          required: ["database", "collection"],
        }
      },
      {
        name: "db-stats",
        description: "Return statistics about a MongoDB database",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            }
          },
          required: ["database"],
        }
      },
      {
        name: "rename-collection",
        description: "Rename a MongoDB collection",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The current name of the collection",
            },
            newName: {
              type: "string",
              description: "The new name for the collection",
            }
          },
          required: ["database", "collection", "newName"],
        }
      },
      {
        name: "explain",
        description: "Explain a MongoDB query execution plan",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            operation: {
              type: "string",
              description: "The operation to explain (find, aggregate, etc.)",
            },
            query: {
              type: "object",
              description: "The query or pipeline to explain",
            }
          },
          required: ["database", "collection", "operation", "query"],
        }
      },
      {
        name: "logs",
        description: "Retrieve MongoDB logs",
        inputSchema: {
          type: "object",
          properties: {
            lines: {
              type: "number",
              description: "Number of log lines to retrieve",
              default: 100,
            }
          },
          required: [],
        }
      },
      {
        name: "export",
        description: "Export query or aggregation results to EJSON format",
        inputSchema: {
          type: "object",
          properties: {
            database: {
              type: "string",
              description: "The name of the database",
            },
            collection: {
              type: "string",
              description: "The name of the collection",
            },
            operation: {
              type: "string",
              description: "The operation type (find or aggregate)",
              enum: ["find", "aggregate"]
            },
            query: {
              type: "object",
              description: "The query parameters for the export operation",
            }
          },
          required: ["database", "collection", "operation", "query"],
        }
      }
    ],
  },
  deployment: {
    image: "civic-mcp/mongodb:latest",
    originalEntrypoint: ["mongodb-mcp-server"],
    originalCommand: [],
    env: {
      "MDB_MCP_CONNECTION_STRING": "REQUIRED_ENV_VALUE",
      "MDB_MCP_API_CLIENT_ID": "OPTIONAL_ENV_VALUE",
      "MDB_MCP_API_CLIENT_SECRET": "OPTIONAL_ENV_VALUE",
      "MDB_MCP_READ_ONLY": "true",
      "MDB_MCP_LOGGERS": "stderr,mcp"
    },
    authMapping: {
      type: "connection_string",
      format: "env",
      envMapping: {
        "MDB_MCP_CONNECTION_STRING": "$.connection_string"
      }
    }
  },
  authConfig: {
    type: "connection_string",
    scopes: ["database.read", "database.write", "collections.read", "collections.write"],
    toolScopes: {
      connect: ["database.connect"],
      find: ["database.read", "collections.read"],
      aggregate: ["database.read", "collections.read"],
      count: ["database.read", "collections.read"],
      "insert-many": ["database.write", "collections.write"],
      "update-many": ["database.write", "collections.write"],
      "delete-many": ["database.write", "collections.write"],
      "create-index": ["database.write", "collections.write"],
      "create-collection": ["database.write", "collections.write"],
      "drop-collection": ["database.write", "collections.write"],
      "drop-database": ["database.write"],
      "list-databases": ["database.read"],
      "list-collections": ["database.read", "collections.read"],
      "collection-indexes": ["database.read", "collections.read"],
      "collection-schema": ["database.read", "collections.read"],
      "collection-storage-size": ["database.read", "collections.read"],
      "db-stats": ["database.read"],
      "rename-collection": ["database.write", "collections.write"],
      explain: ["database.read", "collections.read"],
      logs: ["database.read"],
      export: ["database.read", "collections.read"]
    },
    provider: "mongodb"
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};