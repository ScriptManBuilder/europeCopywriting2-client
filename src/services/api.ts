// Static mode - No backend API calls
// This file is kept for compatibility but all functions are disabled for static mode

export interface User {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface SignupData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface ProfileResponse {
  user: User;
  message: string;
}

// Static authentication - managed by AuthContext
export const authAPI = {
  signup: async (userData: SignupData): Promise<AuthResponse> => {
    throw new Error('Static mode: Use AuthContext for authentication');
  },

  signin: async (credentials: SigninData): Promise<AuthResponse> => {
    throw new Error('Static mode: Use AuthContext for authentication');
  },

  signout: (): void => {
    // Compatibility - does nothing in static mode
  },

  getProfile: (): Promise<ProfileResponse> => {
    throw new Error('Static mode: Use AuthContext for user data');
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('static_user');
  },

  test: (): Promise<any> => {
    throw new Error('Static mode: Backend test not available');
  },
};

// Static mode - users API disabled
export const usersAPI = {
  getAll: (): Promise<User[]> => {
    throw new Error('Static mode: Users API not available');
  },

  getById: (id: number): Promise<User> => {
    throw new Error('Static mode: Users API not available');
  },

  create: (userData: Partial<User>): Promise<User> => {
    throw new Error('Static mode: Users API not available');
  },

  update: (id: number, userData: Partial<User>): Promise<User> => {
    throw new Error('Static mode: Users API not available');
  },

  delete: (id: number): Promise<void> => {
    throw new Error('Static mode: Users API not available');
  },
};

// Static mode - health check disabled
export const healthAPI = {
  check: (): Promise<{
    status: string;
    timestamp: string;
    uptime: number;
    message: string;
  }> => {
    throw new Error('Static mode: Health check not available');
  },
};

// Token utilities for static mode
export const tokenUtils = {
  getToken: (): string | null => null,
  setToken: (token: string): void => {},
  removeToken: (): void => {},
  isTokenValid: (): boolean => {
    return !!localStorage.getItem('static_user');
  },
};

export default {
  authAPI,
  usersAPI,
  healthAPI,
  tokenUtils,
};