export type CapabilityState = "available" | "unavailable" | "degraded";

export interface CapabilityStatus {
  id: string;
  state: CapabilityState;
  detail: string;
  checkedAt: string;
  synthetic: false;
}

const ID_RE = /^[a-z][a-z0-9.-]{0,63}$/;
const MAX_CAPABILITIES = 256;

export class HomeStatusRegistry {
  readonly #statuses = new Map<string, CapabilityStatus>();

  set(input: Omit<CapabilityStatus, "synthetic">): CapabilityStatus {
    if (!ID_RE.test(input.id)) throw new Error("invalid capability id");
    const detail = input.detail.trim();
    if (detail.length < 1 || detail.length > 300) throw new Error("invalid detail");
    const checked = new Date(input.checkedAt);
    if (Number.isNaN(checked.valueOf())) throw new Error("invalid checkedAt");
    if (!this.#statuses.has(input.id) && this.#statuses.size >= MAX_CAPABILITIES) throw new Error("capacity exceeded");

    const status = Object.freeze({
      id: input.id,
      state: input.state,
      detail,
      checkedAt: checked.toISOString(),
      synthetic: false as const
    });
    this.#statuses.set(input.id, status);
    return status;
  }

  list(): CapabilityStatus[] {
    return [...this.#statuses.values()].sort((a, b) => a.id.localeCompare(b.id));
  }

  readiness(required: readonly string[]): { ready: boolean; unavailable: readonly string[]; fabricated: false } {
    const unavailable = [...new Set(required)]
      .filter((id) => this.#statuses.get(id)?.state !== "available")
      .sort();
    return Object.freeze({ ready: unavailable.length === 0, unavailable: Object.freeze(unavailable), fabricated: false });
  }
}
