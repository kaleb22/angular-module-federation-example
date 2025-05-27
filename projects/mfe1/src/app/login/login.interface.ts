export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    message: string;
    userName: string;
  } | null
  error?: {
    code: number,
    message: string;
  }
}
