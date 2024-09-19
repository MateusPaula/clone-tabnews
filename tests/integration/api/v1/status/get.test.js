test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const parsedResponse = await response.json();
  const convertedUpdatedAt = new Date(parsedResponse.updated_at).toISOString();

  expect(response.status).toBe(200);
  expect(parsedResponse.updated_at).toBeDefined();
  expect(parsedResponse.updated_at).toEqual(convertedUpdatedAt);
  expect(parsedResponse.dependencies.database.version).toEqual("16.0");
  expect(parsedResponse.dependencies.database.max_connections).toEqual("100");
  expect(parsedResponse.dependencies.database.connections).toEqual(1);
  expect(parsedResponse).toHaveProperty("updated_at");
  expect(parsedResponse).toHaveProperty("dependencies.database.version");
  expect(parsedResponse).toHaveProperty(
    "dependencies.database.max_connections"
  );
  expect(parsedResponse).toHaveProperty("dependencies.database.connections");
});
