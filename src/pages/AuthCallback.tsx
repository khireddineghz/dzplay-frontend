import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiClient from "../lib/api";

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Processing authentication...");

  useEffect(() => {
    const handleCallback = async () => {
      // Check for error in URL params
      const error = searchParams.get("error");
      const roleParam = searchParams.get("role");

      if (error) {
        setStatus("error");
        setMessage(error);
        setTimeout(() => navigate("/login"), 3000);
        return;
      }

      // Get the hash fragment which contains the OAuth tokens
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");

      if (accessToken) {
        try {
          console.log('OAuth callback - roleParam:', roleParam);
          
          // Fetch complete user data from Supabase using the access token
          const response = await apiClient.get<{ user: any }>("/auth/user", {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });

          let user = response.user;
          let userRole = user?.user_metadata?.role;
          
          console.log('User fetched:', user?.id, 'Current role:', userRole);

          // If role is not in user_metadata but is in URL params, update it
          if (!userRole && roleParam && ['player', 'stadiumowner'].includes(roleParam)) {
            console.log('Role not found in user_metadata, updating with role:', roleParam);
            
            try {
              const updateResponse = await apiClient.patch<{ user: any }>(
                "/auth/user/metadata",
                { role: roleParam },
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`
                  }
                }
              );
              
              user = updateResponse.user;
              userRole = roleParam;
              console.log('User metadata updated successfully, new role:', userRole);
            } catch (updateError) {
              console.error('Failed to update user metadata:', updateError);
              // Show error to user
              setStatus("error");
              setMessage("Failed to save your role. Please try again or contact support.");
              setTimeout(() => navigate("/signup"), 3000);
              return;
            }
          }

          console.log('Final userRole:', userRole);

          if (!userRole) {
            console.error('No role found after all attempts. roleParam:', roleParam);
            setStatus("error");
            setMessage("Role not found. Please sign up again and select your role.");
            setTimeout(() => navigate("/signup"), 3000);
            return;
          }

          // Store user data and session
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("role", userRole);
          localStorage.setItem("session", JSON.stringify({
            access_token: accessToken,
            refresh_token: refreshToken,
          }));

          setStatus("success");
          setMessage("Authentication successful! Redirecting...");

          // Redirect based on role
          setTimeout(() => {
            if (userRole === "player") {
              navigate("/player-dashboard");
            } else if (userRole === "stadiumowner") {
              navigate("/stadium-owner");
            } else {
              navigate("/");
            }
          }, 1500);
        } catch (err) {
          console.error("Error fetching user data:", err);
          setStatus("error");
          setMessage("Failed to fetch user data. Please try again.");
          setTimeout(() => navigate("/login"), 3000);
        }
      } else {
        setStatus("error");
        setMessage("Authentication failed. No access token received.");
        setTimeout(() => navigate("/login"), 3000);
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background-dark p-4">
      <div className="max-w-md w-full bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8 text-center">
        {status === "loading" && (
          <>
            <div className="mb-6 flex justify-center">
              <span className="material-symbols-outlined text-primary text-[64px] animate-spin">
                progress_activity
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Processing...
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{message}</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mb-6 flex justify-center">
              <span className="material-symbols-outlined text-green-500 text-[64px]">
                check_circle
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Success!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{message}</p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mb-6 flex justify-center">
              <span className="material-symbols-outlined text-red-500 text-[64px]">
                error
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Error
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors"
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
