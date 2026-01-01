import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../components/ui/Input";
import authService from "../services/auth.service";
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateFullName,
  normalizePhoneNumber,
} from "../lib/validation";
import type { ApiError } from "../lib/api";

export default function Signup() {
  const navigate = useNavigate();
  
  // Form state
  const [role, setRole] = useState<'player' | 'stadium'>('player');
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Error states
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    setFullNameError("");
    setGeneralError("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
    setGeneralError("");
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError("");
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

    // Validate full name
    const fullNameValidation = validateFullName(fullName);
    if (!fullNameValidation.isValid) {
      setFullNameError(fullNameValidation.error || "Invalid name");
      isValid = false;
    }

    // Validate email
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.error || "Invalid email");
      isValid = false;
    }

    // Validate phone number
    const phoneValidation = validatePhoneNumber(phoneNumber);
    if (!phoneValidation.isValid) {
      setPhoneNumberError(phoneValidation.error || "Invalid phone number");
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
    
    // Reset messages
    setGeneralError("");
    setSuccessMessage("");
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Normalize phone number to +213 format
      const normalizedPhone = normalizePhoneNumber(phoneNumber);
      
      console.log('Signup attempt:', {
        email,
        fullName,
        phoneNumber: normalizedPhone,
        role: role === 'player' ? 'player' : 'stadiumowner',
      });
      
      const response = await authService.signup({
        email,
        password,
        fullName,
        phoneNumber: normalizedPhone,
        role: role === 'player' ? 'player' : 'stadiumowner',
      });

      console.log('Signup successful:', response);

      // Show success message
      setSuccessMessage(response.message || "Account created successfully!");
      
      // Navigate to appropriate dashboard after a short delay
      setTimeout(() => {
        if (response.role === "player") {
          navigate("/player-dashboard");
        } else if (response.role === "stadiumowner") {
          navigate("/stadium-owner");
        } else {
          navigate("/");
        }
      }, 2000);
    } catch (error) {
      const apiError = error as ApiError;
      console.error('Signup error:', apiError);
      setGeneralError(apiError.error || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Google OAuth
  const handleGoogleSignup = async () => {
    // Validate role is selected
    if (!role) {
      setGeneralError("Please select a role (Player or Stadium Owner) before signing up with Google.");
      return;
    }

    setIsLoading(true);
    setGeneralError("");

    try {
      // Use the selected role for Google signup
      const roleValue = role === 'player' ? 'player' : 'stadiumowner';
      const response = await authService.signInWithGoogle(roleValue);
      // Redirect to Google OAuth page
      window.location.href = response.url;
    } catch (error) {
      const apiError = error as ApiError;
      setGeneralError(apiError.error || "Failed to initiate Google signup.");
      setIsLoading(false);
    }
  };

  // Handle Facebook OAuth
  const handleFacebookSignup = async () => {
    setIsLoading(true);
    setGeneralError("");

    try {
      // TODO: Implement Facebook OAuth backend endpoint
      setGeneralError("Facebook signup coming soon!");
      setIsLoading(false);
    } catch (error) {
      const apiError = error as ApiError;
      setGeneralError(apiError.error || "Failed to initiate Facebook signup.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col font-display bg-gray-100">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFMqgKPq4TOtwI-pgYVX8Yh6_5Lgb_Zs_Sd5ngIJ1FHxRbj_fyd0l0a50vYpXZ0Aqu_-WWlUzDEty_jkvD9jJt3M_tGx6qTeKgTGTV7e4r0bmqaQGCpayrbKCgFgR-LEy_nQ5yXWuPTvU3t7LkDpcp49LhUix7SwS9drGqMhGtuE0oBepwEjzjuPGvnQNwXh-jhCEdTc1MQKUsPdlohnmocAVWGmFbFmT2NrwC4biZpw5J2Ja1wH0T9GDcpIiumYXBmzLt_kYw0jU')",
        }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm dark:bg-black/40"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
           <img src="/logo.png" alt="DZPlay" className="h-24 w-auto object-contain" />
        </div>
        {/* Back to Home */}
        <Link to="/" className="text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="bg-white dark:bg-surface-dark rounded-[2rem] shadow-2xl w-full max-w-[1200px] overflow-hidden flex flex-col lg:flex-row min-h-[750px]">
           
           {/* Left Panel (Purple) */}
           <div className="lg:w-5/12 bg-primary relative overflow-hidden p-12 flex flex-col text-white">
               {/* Background Effects */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark"></div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
               
               {/* Content */}
               <div className="relative z-10 flex flex-col h-full">
                   <h2 className="text-[32px] font-bold mb-6 leading-[1.2]">The #1 Platform for Football in Algeria</h2>
                   <p className="text-lg text-primary-100/90 font-light mb-12 max-w-sm">
                       Join thousands of players and stadium owners organizing matches every day.
                   </p>
                   
                   <div className="flex-1 flex items-center justify-center relative mb-8">
                        {/* Soccer Ball Graphic/Image */}
                        <div className="relative w-64 h-64 opacity-50 mix-blend-overlay">
                             <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg" 
                                alt="Football" 
                                className="w-full h-full object-contain invert drop-shadow-2xl"
                             />
                        </div>
                   </div>

                   {/* Testimonial */}
                   <div className="mt-auto pt-8 border-t border-white/10">
                       <div className="flex text-yellow-400 mb-3 gap-1">
                           {[1,2,3,4,5].map(i => (
                               <span key={i} className="material-symbols-outlined text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                           ))}
                       </div>
                       <p className="text-lg font-medium mb-3 leading-relaxed">
                           "DZPlay made it so easy to fill my empty slots. Revenue is up 30%!"
                       </p>
                       <p className="text-sm font-semibold opacity-80 flex items-center gap-2">
                           <span className="w-6 h-0.5 bg-white/50 rounded-full"></span>
                           Ahmed B., Stadium Owner
                       </p>
                   </div>
               </div>
           </div>

           {/* Right Panel (Form) */}
           <div className="lg:w-7/12 p-8 lg:p-12 xl:p-16 bg-white dark:bg-surface-dark flex flex-col justify-center">
               <div className="max-w-lg mx-auto w-full">
                   <div className="mb-8">
                       <h2 className="text-[32px] font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Create Account</h2>
                       <p className="text-gray-500 dark:text-gray-400 text-lg">Join our community today.</p>
                   </div>

                   {generalError && (
                     <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                       <span className="material-symbols-outlined text-red-500 text-[20px] mt-0.5">error</span>
                       <p className="text-sm text-red-600 dark:text-red-400 flex-1">{generalError}</p>
                     </div>
                   )}

                   {successMessage && (
                     <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3">
                       <span className="material-symbols-outlined text-green-500 text-[20px] mt-0.5">check_circle</span>
                       <p className="text-sm text-green-600 dark:text-green-400 flex-1">{successMessage}</p>
                     </div>
                   )}

                   <form onSubmit={handleSubmit} className="space-y-6">
                       {/* Role Toggle */}
                       <div className="space-y-3">
                           <label className="text-sm font-bold text-gray-900 dark:text-white block">I want to...</label>
                           <div className="grid grid-cols-2 gap-4">
                               <button 
                                 type="button"
                                 onClick={() => setRole('player')}
                                 disabled={isLoading}
                                 className={`h-24 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200 relative group disabled:opacity-50 disabled:cursor-not-allowed ${
                                     role === 'player' 
                                     ? 'border-primary bg-primary/5 text-primary shadow-sm' 
                                     : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-600 bg-white'
                                 }`}
                               >
                                   {role === 'player' && (
                                       <span className="material-symbols-outlined absolute top-3 right-3 text-primary text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                   )}
                                   <div className={`p-2 rounded-full ${role === 'player' ? 'bg-primary/10' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors`}>
                                       <span className="material-symbols-outlined text-[24px]">sports_soccer</span>
                                   </div>
                                   <span className="font-bold text-sm">Play Football</span>
                               </button>
                               <button 
                                 type="button"
                                 onClick={() => setRole('stadium')}
                                 disabled={isLoading}
                                 className={`h-24 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-200 relative group disabled:opacity-50 disabled:cursor-not-allowed ${
                                     role === 'stadium' 
                                     ? 'border-primary bg-primary/5 text-primary shadow-sm' 
                                     : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-600 bg-white'
                                 }`}
                               >
                                   {role === 'stadium' && (
                                       <span className="material-symbols-outlined absolute top-3 right-3 text-primary text-[20px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                   )}
                                   <div className={`p-2 rounded-full ${role === 'stadium' ? 'bg-primary/10' : 'bg-gray-100 group-hover:bg-gray-200'} transition-colors`}>
                                       <span className="material-symbols-outlined text-[24px]">stadium</span>
                                   </div>
                                   <span className="font-bold text-sm">List Stadium</span>
                               </button>
                           </div>
                       </div>

                       {/* Full Name */}
                       <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-900 dark:text-white ml-1">Full Name</label>
                           <Input 
                               icon={<span className="material-symbols-outlined text-[20px]">person</span>} 
                               placeholder="e.g. Riyad Mahrez" 
                               value={fullName}
                               onChange={handleFullNameChange}
                               error={fullNameError}
                               disabled={isLoading}
                           />
                       </div>

                       {/* Email */}
                       <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-900 dark:text-white ml-1">Email Address</label>
                           <Input 
                               type="email"
                               icon={<span className="material-symbols-outlined text-[20px]">mail</span>} 
                               placeholder="name@example.com" 
                               className="h-12 bg-white"
                               value={email}
                               onChange={handleEmailChange}
                               error={emailError}
                               disabled={isLoading}
                           />
                       </div>
                       
                       {/* Phone */}
                       <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-900 dark:text-white ml-1">Phone Number</label>
                           <div className="flex gap-3">
                               <div className="flex items-center justify-center px-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-surface-dark/50 text-gray-900 dark:text-white font-semibold h-14 min-w-[100px]">
                                   <span className="mr-2 text-lg">🇩🇿</span> +213
                               </div>
                               <div className="flex-1">
                                   <Input 
                                     placeholder="5 XX XX XX XX" 
                                     className="h-14 bg-white" 
                                     value={phoneNumber}
                                     onChange={handlePhoneNumberChange}
                                     error={phoneNumberError}
                                     disabled={isLoading}
                                   />
                               </div>
                           </div>
                       </div>

                       {/* Password */}
                       <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-900 dark:text-white ml-1">Password</label>
                           <Input 
                               type={showPassword ? "text" : "password"}
                               icon={<span className="material-symbols-outlined text-[20px]">lock</span>} 
                               placeholder="••••••••" 
                               className="h-12 bg-white"
                               value={password}
                               onChange={handlePasswordChange}
                               error={passwordError}
                               disabled={isLoading}
                               rightElement={
                                   <button 
                                     type="button" 
                                     onClick={() => setShowPassword(!showPassword)}
                                     className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center justify-center"
                                   >
                                       <span className="material-symbols-outlined text-[20px]">
                                         {showPassword ? "visibility_off" : "visibility"}
                                       </span>
                                   </button>
                               }
                           />
                           {!passwordError && (
                             <p className="text-xs text-gray-500 ml-1">Must be at least 8 characters with letters and numbers.</p>
                           )}
                       </div>

                       {/* Submit */}
                       <button 
                         type="submit"
                         disabled={isLoading}
                         className="w-full h-14 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                       >
                         {isLoading ? (
                           <>
                             <span className="animate-spin material-symbols-outlined text-[20px]">progress_activity</span>
                             Creating Account...
                           </>
                         ) : (
                           "Create Account"
                         )}
                       </button>

                       {/* Socials Divider */}
                       <div className="relative my-8">
                           <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-gray-700"></div></div>
                           <div className="relative flex justify-center text-sm"><span className="px-4 bg-white dark:bg-surface-dark text-gray-500">Or continue with</span></div>
                       </div>

                       {/* Social Buttons */}
                       <div className="grid grid-cols-2 gap-4">
                           <button 
                             type="button" 
                             onClick={handleGoogleSignup}
                             disabled={isLoading}
                             className="flex items-center justify-center gap-2 h-12 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                               <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                               </svg>
                               Google
                           </button>
                           <button 
                             type="button" 
                             onClick={handleFacebookSignup}
                             disabled={isLoading}
                             className="flex items-center justify-center gap-2 h-12 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                               </svg>
                               Facebook
                           </button>
                       </div>

                       <p className="text-center text-gray-500 text-sm mt-6">
                           Already have an account? <Link to="/login" className="text-primary font-bold hover:text-primary-dark transition-colors">Log In</Link>
                       </p>
                   </form>
               </div>
           </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm text-gray-500/80 font-medium">
        <div className="flex justify-center gap-8 mb-4">
           <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Help Center</a>
        </div>
        <p>© 2026 DZPlay. All rights reserved.</p>
      </footer>
    </div>
  );
}
