const DEFAULT_CLOSE_CODE = 1000;

/**
 * Sanitize WebSocket close codes for use with ws.close(code, reason).
 *
 * Note: Some codes can appear in close events (e.g. 1006) but MUST NOT be sent.
 */
export function sanitizeCloseCode(code: unknown): number {
  if (typeof code !== 'number' || !Number.isFinite(code)) return DEFAULT_CLOSE_CODE;

  const c = Math.trunc(code);

  // Reserved/invalid codes that MUST NOT be sent in a close frame.
  // 1004: reserved
  // 1005: no status received (never sent)
  // 1006: abnormal closure (never sent)
  // 1015: TLS handshake failure (never sent)
  if (c === 1004 || c === 1005 || c === 1006 || c === 1015) return DEFAULT_CLOSE_CODE;

  if (c < 1000 || c > 4999) return DEFAULT_CLOSE_CODE;

  return c;
}

/**
 * Truncate a WebSocket close reason to <= 123 bytes (UTF-8), per spec.
 */
export function sanitizeCloseReason(reason: unknown): string {
  if (typeof reason !== 'string') return '';
  if (reason.length === 0) return '';

  // Workers and Node 18+ have TextEncoder/TextDecoder.
  const enc = new TextEncoder();
  const bytes = enc.encode(reason);
  if (bytes.length <= 123) return reason;

  const sliced = bytes.slice(0, 123);
  const dec = new TextDecoder('utf-8', { fatal: false });
  return dec.decode(sliced);
}

/**
 * Close a WebSocket without throwing on invalid close codes.
 */
export function safeWebSocketClose(ws: WebSocket, code: unknown, reason: unknown): void {
  const safeCode = sanitizeCloseCode(code);
  const safeReason = sanitizeCloseReason(reason);

  try {
    ws.close(safeCode, safeReason);
  } catch (e) {
    // Last resort: never let close throw and crash the Worker request.
    try {
      ws.close(DEFAULT_CLOSE_CODE, '');
    } catch {
      // ignore
    }
  }
}

