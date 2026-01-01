import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";
import { Input } from "../components/ui/Input";
import authService from "../services/auth.service";
import { validateIdentifier, validatePassword } from "../lib/validation";
import type { ApiError } from "../lib/api";

export default function Login() {
  const navigate = useNavigate();
  
  // Form state
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Error states
  const [identifierError, setIdentifierError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(e.target.value);
    setIdentifierError("");
    setGeneralError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
    setGeneralError("");
  };

  // Validate form
  const validateForm = (): boolean => {
    let isValid = true;

    // Validate identifier
    const identifierValidation = validateIdentifier(identifier);
    if (!identifierValidation.isValid) {
      setIdentifierError(identifierValidation.error || "Invalid input");
      isValid = false;
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      setPasswordError(passwordValidation.error || "Invalid password");
      isValid = false;
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setGeneralError("");
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await authService.login({
        identifier,
        password,
      });

      // Navigate based on user role
      if (response.role === "player") {
        navigate("/player-dashboard");
      } else if (response.role === "stadiumowner") {
        navigate("/stadium-owner");
      } else {
        navigate("/");
      }
    } catch (error) {
      const apiError = error as ApiError;
      setGeneralError(apiError.error || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google OAuth
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setGeneralError("");

    try {
      // For login, we'll default to player role, or you can add a role selector
      const response = await authService.signInWithGoogle('player');
      // Redirect to Google OAuth page
      window.location.href = response.url;
    } catch (error) {
      const apiError = error as ApiError;
      setGeneralError(apiError.error || "Failed to initiate Google login.");
      setIsLoading(false);
    }
  };

  // Handle Facebook OAuth
  const handleFacebookLogin = async () => {
    setIsLoading(true);
    setGeneralError("");

    try {
      // TODO: Implement Facebook OAuth backend endpoint
      setGeneralError("Facebook login coming soon!");
      setIsLoading(false);
    } catch (error) {
      const apiError = error as ApiError;
      setGeneralError(apiError.error || "Failed to initiate Facebook login.");
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="mb-10">
        <h2 className="text-[32px] font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
          Book your pitch, find your match. Enter your details to get back in the game.
        </p>
      </div>

      {generalError && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
          <span className="material-symbols-outlined text-red-500 text-[20px] mt-0.5">error</span>
          <p className="text-sm text-red-600 dark:text-red-400 flex-1">{generalError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 ml-1">
            Email or Phone Number
          </label>
          <Input
            type="text"
            placeholder="name@example.com or +213 5XX XX XX XX"
            value={identifier}
            onChange={handleIdentifierChange}
            error={identifierError}
            disabled={isLoading}
            rightElement={
              <span className="material-symbols-outlined text-[24px] group-focus-within:text-primary transition-colors">
                mail
              </span>
            }
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-sm font-semibold text-gray-900 dark:text-gray-200">
              Password
            </label>
            <a className="text-sm font-bold text-primary hover:text-primary-dark transition-colors" href="#">
              Forgot Password?
            </a>
          </div>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            disabled={isLoading}
            rightElement={
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer focus:outline-none transition-colors"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            }
          />
        </div>
        
        <div className="pt-4">
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full h-14 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <span className="animate-spin material-symbols-outlined text-[20px]">progress_activity</span>
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </div>
        
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-surface-light dark:bg-background-dark text-gray-500 dark:text-gray-400 font-medium z-10">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="flex items-center justify-center gap-3 h-14 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-surface-dark/80 transition-colors bg-white/80 dark:bg-surface-dark text-gray-700 dark:text-gray-200 font-bold text-sm group backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Google
          </button>
          <button 
            type="button"
            onClick={handleFacebookLogin}
            disabled={isLoading}
            className="flex items-center justify-center gap-3 h-14 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-surface-dark/80 transition-colors bg-white/80 dark:bg-surface-dark text-gray-700 dark:text-gray-200 font-bold text-sm group backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            New to the game? 
            <a href="/signup" className="font-bold text-primary hover:text-primary-dark ml-1 underline decoration-primary/30 hover:decoration-primary decoration-2 underline-offset-4 transition-all">
              Create an account
            </a>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
