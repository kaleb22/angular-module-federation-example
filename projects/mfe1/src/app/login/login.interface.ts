export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    message: string;
  } | null
  error?: {
    code: number,
    message: string;
  }
}
