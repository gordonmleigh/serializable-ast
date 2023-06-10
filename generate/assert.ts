export function assert(cond: unknown, text?: string): asserts cond {
  if (!cond) {
    throw new Error(`assert failed: ${text}`);
  }
}
