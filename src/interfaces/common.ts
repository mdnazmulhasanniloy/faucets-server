export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: IMeta;
  data?: T | null;
};