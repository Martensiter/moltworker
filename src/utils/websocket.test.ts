import { describe, it, expect } from 'vitest';
import { sanitizeCloseCode, sanitizeCloseReason } from './websocket';

describe('sanitizeCloseCode', () => {
  it('defaults to 1000 for non-numbers', () => {
    expect(sanitizeCloseCode(undefined)).toBe(1000);
    expect(sanitizeCloseCode(null)).toBe(1000);
    expect(sanitizeCloseCode('1000')).toBe(1000);
    expect(sanitizeCloseCode(NaN)).toBe(1000);
  });

  it('maps reserved/invalid codes to 1000', () => {
    expect(sanitizeCloseCode(1004)).toBe(1000);
    expect(sanitizeCloseCode(1005)).toBe(1000);
    expect(sanitizeCloseCode(1006)).toBe(1000);
    expect(sanitizeCloseCode(1015)).toBe(1000);
  });

  it('maps out-of-range codes to 1000', () => {
    expect(sanitizeCloseCode(999)).toBe(1000);
    expect(sanitizeCloseCode(5000)).toBe(1000);
    expect(sanitizeCloseCode(-1)).toBe(1000);
  });

  it('keeps valid codes', () => {
    expect(sanitizeCloseCode(1000)).toBe(1000);
    expect(sanitizeCloseCode(1001)).toBe(1001);
    expect(sanitizeCloseCode(1011)).toBe(1011);
    expect(sanitizeCloseCode(4000)).toBe(4000);
  });
});

describe('sanitizeCloseReason', () => {
  it('returns empty string for non-strings', () => {
    expect(sanitizeCloseReason(undefined)).toBe('');
    expect(sanitizeCloseReason(null)).toBe('');
    expect(sanitizeCloseReason(123)).toBe('');
  });

  it('does not exceed 123 bytes (utf-8)', () => {
    const long = 'a'.repeat(1000);
    const reason = sanitizeCloseReason(long);
    expect(new TextEncoder().encode(reason).length).toBeLessThanOrEqual(123);
  });

  it('handles multibyte characters', () => {
    const long = 'あ'.repeat(200); // 3 bytes each in UTF-8
    const reason = sanitizeCloseReason(long);
    expect(new TextEncoder().encode(reason).length).toBeLessThanOrEqual(123);
  });
});

