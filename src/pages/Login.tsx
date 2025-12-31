import { AuthLayout } from "../components/layout/AuthLayout";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function Login() {
  return (
    <AuthLayout>
      <div className="mb-10">
        <h2 className="text-[32px] font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
          Book your pitch, find your match. Enter your details to get back in the
          game.
        </p>
      </div>
      <form action="#" className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900 dark:text-gray-200 ml-1">
            Email or Phone Number
          </label>
          <Input
            type="text"
            placeholder="name@example.com"
            rightElement={
              <span className="material-symbols-outlined text-[24px]">
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
            <a
              className="text-sm font-bold text-primary hover:text-primary-dark transition-colors"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <Input
            type="password"
            placeholder="Enter your password"
            rightElement={
              <span className="material-symbols-outlined text-[24px]">
                visibility
              </span>
            }
          />
        </div>
        <Button className="w-full h-14 text-lg font-semibold rounded-xl" size="lg">
            Sign In
        </Button>
        
        <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">Or continue with</span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-3 h-14 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-dark-highlight transition-colors bg-white dark:bg-surface-dark/50 text-gray-900 dark:text-white font-semibold">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
                Google
            </button>
            <button type="button" className="flex items-center justify-center gap-3 h-14 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-dark-highlight transition-colors bg-white dark:bg-surface-dark/50 text-gray-900 dark:text-white font-semibold">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-6 h-6" />
                Facebook
            </button>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Don't have an account? 
            <a href="#" className="text-primary font-bold hover:text-primary-dark transition-colors ml-1">Sign up</a>
        </p>
      </form>
    </AuthLayout>
  );
}
