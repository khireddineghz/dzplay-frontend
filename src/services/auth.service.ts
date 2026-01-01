// Authentication service for handling login, signup, and logout

import apiClient, { type ApiError } from '../lib/api';

export interface User {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
    phone_number?: string;
    role?: 'player' | 'stadiumowner';
  };
}

export interface Session {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface LoginCredentials {
  identifier: string; // email or phone
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  role: 'player' | 'stadiumowner';
}

export interface AuthResponse {
  message: string;
  user: User;
  session?: Session;
  role: string;
}

class AuthService {
  /**
   * Login with email/phone and password
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>(
        '/auth/login',
        credentials
      );
      
      // Store user data in localStorage
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('role', response.role);
        if (response.session) {
          localStorage.setItem('session', JSON.stringify(response.session));
        }
      }
      
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  }

  /**
   * Sign up with email and password
   */
  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<AuthResponse>(
        '/auth/signup',
        credentials
      );
      
      // Store user data in localStorage
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('role', response.role);
        if (response.session) {
          localStorage.setItem('session', JSON.stringify(response.session));
        }
      }
      
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  }

  /**
   * Logout and clear local storage
   */
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('session');
  }

  /**
   * Get current user from localStorage
   */
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  /**
   * Get current user role
   */
  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  /**
   * Sign in with Google OAuth
   */
  async signInWithGoogle(role: 'player' | 'stadiumowner'): Promise<{ url: string }> {
    try {
      const response = await apiClient.post<{ url: string }>(
        '/auth/google',
        { role }
      );
      return response;
    } catch (error) {
      throw error as ApiError;
    }
  }
}

const authService = new AuthService();
export default authService;
