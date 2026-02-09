import { greet } from '../activities/greet';

describe('greet activity', () => {
  it('should return a greeting', async () => {
    const result = await greet('World');
    expect(result).toBe('Hello, World!');
  });

  it('should greet different names', async () => {
    const result = await greet('Alice');
    expect(result).toBe('Hello, Alice!');
  });
});
