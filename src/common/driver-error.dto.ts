export class DriverError extends Error {
  readonly length: number;
  readonly name: string;
  readonly severity: string;
  readonly code: string;
  readonly detail: string;
  readonly schema: string;
  readonly table: string;
  readonly constraint: string;
  readonly file: string;
  readonly line: string;
  readonly routine: string;
}
