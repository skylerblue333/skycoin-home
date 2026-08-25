import assert from "node:assert/strict";
import test from "node:test";
import { HomeStatusRegistry } from "../src/home-status.js";

test("reports readiness only from explicit available states", () => {
  const registry = new HomeStatusRegistry();
  registry.set({ id: "auth", state: "available", detail: "configured", checkedAt: "2026-08-25T00:00:00Z" });
  registry.set({ id: "market", state: "unavailable", detail: "provider missing", checkedAt: "2026-08-25T00:00:00Z" });
  assert.deepEqual(registry.readiness(["auth", "market"]), { ready: false, unavailable: ["market"], fabricated: false });
});

test("unknown required capabilities are unavailable", () => {
  const registry = new HomeStatusRegistry();
  assert.deepEqual(registry.readiness(["missing"]), { ready: false, unavailable: ["missing"], fabricated: false });
});

test("rejects malformed status data", () => {
  const registry = new HomeStatusRegistry();
  assert.throws(() => registry.set({ id: "BAD ID", state: "available", detail: "ok", checkedAt: "2026-08-25T00:00:00Z" }));
  assert.throws(() => registry.set({ id: "auth", state: "available", detail: "", checkedAt: "2026-08-25T00:00:00Z" }));
  assert.throws(() => registry.set({ id: "auth", state: "available", detail: "ok", checkedAt: "invalid" }));
});
