import { proxyActivities } from '@temporalio/workflow';
import type * as activities from '../activities/greet';

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/**
 * Sample workflow that greets someone
 */
export async function greetingWorkflow(name: string): Promise<string> {
  return await greet(name);
}
