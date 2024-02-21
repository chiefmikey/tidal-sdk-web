// eslint-disable-next-line no-restricted-imports
import { describe, expect, it } from 'vitest';

import { streamingSessionStart } from './streaming-session-start';

describe('streamingSessionStart', () => {
  it('sets values', async () => {
    const before = await streamingSessionStart({
      streamingSessionId: 'the-fitness-gram-pacer-text',
    });

    const after = await streamingSessionStart({
      startReason: 'EXPLICIT',
      streamingSessionId: 'the-fitness-gram-pacer-text',
    });

    if (!after) {
      throw new Error('Event undefined');
    }

    expect(before).not.toBe(after);
    expect(after.payload.startReason).toBe('EXPLICIT');
  });
});
