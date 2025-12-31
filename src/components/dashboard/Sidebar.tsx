import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-background-light dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 h-full fixed left-0 top-0 z-20">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-xl">sports_soccer</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-dz-navy dark:text-white">DZPlay</h1>
      </div>
      <div className="px-6 py-6">
        <div className="flex items-center gap-3 mb-6">
          <div 
            className="size-10 rounded-full bg-cover bg-center border-2 border-primary" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLNTEJltFyTH1ozd4yYV1hAm8xQqA_Dbeybmd7BA-hyoHx-PcxmIWRh-4WkmzSqGPmZf7atNHPUvZyZc74hI9eBFknJDjaOyPv8vXkyhy0ED63ZSPlNw5bJqDRGAFzXg8P4rz5fygNAAtMvA6r5W2Okc5Gk2qOz15CZScp2_u6qTTAWzoeD0XI-EdU0-BLY0cVaWcAzXuuRwn_Z4eGnhJvqE7l-JlhYyKyMre1czBK-7OUlIWt9TN8CfHLTnNCimtg31-HFYMKo_0')" }}
          ></div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white">Riyad Mahrez</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Pro Player</span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto">
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
              isActive('/dashboard') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="material-symbols-outlined fill-1" style={isActive('/dashboard') ? { fontVariationSettings: "'FILL' 1" } : {}}>dashboard</span>
            Dashboard
          </Link>
          <Link 
            to="/my-bookings" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
              isActive('/my-bookings') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="material-symbols-outlined" style={isActive('/my-bookings') ? { fontVariationSettings: "'FILL' 1" } : {}}>calendar_month</span>
            My Bookings
          </Link>
          <Link 
            to="/find-opponents" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
              isActive('/find-opponents') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="material-symbols-outlined" style={isActive('/find-opponents') ? { fontVariationSettings: "'FILL' 1" } : {}}>search</span>
            Find Match
          </Link>
          <Link 
            to="/my-team" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
              isActive('/my-team') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="material-symbols-outlined" style={isActive('/my-team') ? { fontVariationSettings: "'FILL' 1" } : {}}>groups</span>
            My Team
          </Link>
          <Link 
            to="/stats" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
              isActive('/stats') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="material-symbols-outlined" style={isActive('/stats') ? { fontVariationSettings: "'FILL' 1" } : {}}>analytics</span>
            Stats
          </Link>
          <Link 
            to="/stadiums/details" 
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
              isActive('/stadiums/details') 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="material-symbols-outlined" style={isActive('/stadiums/details') ? { fontVariationSettings: "'FILL' 1" } : {}}>stadium</span>
            Stadiums
          </Link>
          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700">
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Account</p>
            <Link 
              to="/settings" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium ${
                isActive('/settings') 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              <span className="material-symbols-outlined" style={isActive('/settings') ? { fontVariationSettings: "'FILL' 1" } : {}}>settings</span>
              Settings
            </Link>
            <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium text-red-500 hover:text-red-600 hover:bg-red-50">
              <span className="material-symbols-outlined">logout</span>
              Logout
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
