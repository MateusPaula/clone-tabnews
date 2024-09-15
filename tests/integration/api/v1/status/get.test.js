test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return the timestamp of the update", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const parsedResponse = await response.json();
  const convertedUpdatedAt = new Date(parsedResponse.updated_at).toISOString();

  expect(parsedResponse.updated_at).toBeDefined();
  expect(parsedResponse.updated_at).toEqual(convertedUpdatedAt);
});

test("GET to /api/v1/status should return the postgres version", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const parsedResponse = await response.json();
  const convertedUpdatedAt = new Date(parsedResponse.updated_at).toISOString();

  expect(parsedResponse.updated_at).toBeDefined();
  expect(parsedResponse.updated_at).toEqual(convertedUpdatedAt);
});

test("GET to /api/v1/status should return the postgres version", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const parsedResponse = await response.json();
  expect(parsedResponse.version).toBeDefined();
  expect(parsedResponse.version).toEqual(
    "PostgreSQL 16.0 on x86_64-pc-linux-musl, compiled by gcc (Alpine 12.2.1_git20220924-r10) 12.2.1 20220924, 64-bit"
  );
});

test("GET to /api/v1/status should return the maximum connections allowed to the database", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const parsedResponse = await response.json();
  expect(parsedResponse.max_connections).toBeDefined();
  expect(parsedResponse.max_connections).toEqual("100");
});

test("GET to /api/v1/status should return how many instances are connected to the database", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const parsedResponse = await response.json();
  expect(parsedResponse.connections).toBeDefined();
  expect(parsedResponse.connections).toEqual("2");
});
