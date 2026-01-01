import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import authService, { type User } from '../../services/auth.service';

export const StadiumOwnerSidebar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  const userName = user?.user_metadata?.full_name || user?.email || 'User';
  const userInitials = userName
    .split(' ')
    .map((n) => n.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 backdrop-blur-md lg:flex relative z-10">
      <div className="flex h-20 items-center gap-3 px-8 border-b border-slate-200 dark:border-slate-800">
        <img src="/logo.png" alt="DZPlay" className="h-24 w-auto object-contain" />
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6">
        {/* User Profile */}
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-slate-50 dark:bg-slate-800 p-4 shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            {userInitials}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
              {userName}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Stadium Owner</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          <Link
            to="/stadium-owner"
            className={`group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
              isActive('/stadium-owner')
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-semibold">Overview</span>
          </Link>
          <Link
            to="/stadium-owner/stadiums"
            className={`group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
              isActive('/stadium-owner/stadiums')
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">stadium</span>
            <span className="text-sm font-semibold">My Stadiums</span>
          </Link>
          <Link
            to="/stadium-owner/schedule"
            className={`group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
              isActive('/stadium-owner/schedule')
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-sm font-semibold">Schedule</span>
          </Link>
          <Link
            to="/stadium-owner/earnings"
            className={`group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
              isActive('/stadium-owner/earnings')
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">payments</span>
            <span className="text-sm font-semibold">Earnings</span>
          </Link>
          <Link
            to="/stadium-owner/settings"
            className={`group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
              isActive('/stadium-owner/settings')
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-semibold">Settings</span>
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="text-sm font-semibold">Log Out</span>
        </button>
      </div>
    </aside>
  );
};
