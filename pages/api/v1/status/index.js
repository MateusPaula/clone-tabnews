import database from "infra/database.js";

async function status(request, response) {
  const versionResult = await database.query("SELECT version()");
  const connectionsResult = await database.query(
    "SELECT count(distinct(numbackends)) FROM pg_stat_database"
  );
  const maxConnectionsResult = await database.query("SHOW max_connections");
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAt,
    version: versionResult.rows[0].version,
    max_connections: maxConnectionsResult.rows[0].max_connections,
    connections: connectionsResult.rows[0].count,
  });
}

export default status;
