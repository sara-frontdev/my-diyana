// Request
export interface IRequestResults {
  status: number;
  statusTitle: string;
  urlGateWay: string;
}

// Verification
export interface IverificationResult {
  status: number;
  statusTitle: string;
  trackingCode: string;
  errors: Error[];
}
interface Error {
  code: number;
  message: string;
}
