import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-dark-highlight bg-background-dark/95 backdrop-blur-md">
      <div className="px-6 md:px-10 lg:px-40 py-3 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-4 text-white">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">sports_soccer</span>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">DZPlay</h2>
        </Link>
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          <Link 
            className={cn("text-sm font-medium transition-colors", isActive("/dashboard") ? "text-white" : "text-text-secondary hover:text-white")} 
            to="/dashboard"
          >
            Home
          </Link>
          <Link 
            className={cn("text-sm font-medium transition-colors", isActive("/find-opponents") ? "text-white" : "text-text-secondary hover:text-white")} 
            to="/find-opponents"
          >
            Find Opponent
          </Link>
          <Link 
            className={cn("text-sm font-medium transition-colors", isActive("/my-team") ? "text-white" : "text-text-secondary hover:text-white")} 
            to="/dashboard"
          >
            My Team
          </Link>
          <Link 
            className={cn("text-sm font-medium transition-colors", isActive("/stadiums/details") ? "text-white" : "text-text-secondary hover:text-white")} 
            to="/stadiums/details"
          >
            Stadiums
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-surface-dark-highlight text-text-secondary hover:text-white transition-colors relative">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border border-background-dark"></span>
          </button>
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-surface-dark-highlight cursor-pointer"
            data-alt="User profile avatar image"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOct5xGmu8Ynz5d_6KLgnwOoZGHQtnye4LEilG6ZCQDgl9Ho9XbHVtsazggR8DAgFn8tp5DfhJ-BEOXVd_5E_8zqjpq8VqkKEhGS1nUwu-ljkORGqjXrPZRcmD2NGy50hbhr5BK4NfqdOkrFuVy4T8DtR8IecDdkGATR50B0kr0IiiidBu3oSdTgkVOlZ1Y4pVoEOTR1y0DXxx9SlhJLxWKTTN_dLS1_2Ym8dKafPLZ5OYbJpDEAe0ziUNda1I5hRIto74OF4Mzmw")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}
