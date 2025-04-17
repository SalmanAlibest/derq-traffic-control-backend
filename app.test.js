const request = require("supertest");
const app = require("./server");

describe("GET /api/v1/traffic/country", () => {
  it("should return 200 OK and an array of traffic data", async () => {
    const res = await request(app).get("/api/v1/traffic/country");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty("country");
    expect(res.body[0]).toHaveProperty("traffic");
  });
});

describe("GET /api/v1/traffic/vehicle", () => {
  it("should return 200 OK and an array of vehicle data", async () => {
    const res = await request(app).get("/api/v1/traffic/vehicle");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    const vehicle = res.body[0];
    expect(vehicle).toHaveProperty("type");
    expect(vehicle).toHaveProperty("vehicle_count");
    expect(typeof vehicle.type).toBe("string");
    expect(typeof vehicle.vehicle_count).toBe("number");
  });
});
