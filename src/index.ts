/**
 * Main entry point for the E2E test project.
 */
export function hello(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Sum two numbers. Handles negative numbers correctly.
 */
export function sum(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}
