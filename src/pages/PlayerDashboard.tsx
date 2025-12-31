import { Navbar } from "../components/layout/Navbar";
import { Button } from "../components/ui/Button";

export default function PlayerDashboard() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-8 flex flex-col gap-8">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Welcome back, <span className="text-primary">Karim</span>
            </h1>
            <p className="text-gray-500 dark:text-text-secondary mt-1">
              Here's what's happening with your football activity.
            </p>
          </div>
          <Button className="w-full md:w-auto gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create Team
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Matches Played", value: "24", icon: "sports_soccer", color: "text-blue-500" },
            { label: "Goals Scored", value: "12", icon: "scoreboard", color: "text-green-500" },
            { label: "Man of the Match", value: "3", icon: "emoji_events", color: "text-yellow-500" },
          ].map((stat, i) => (
            <div key={i} className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-highlight rounded-xl p-6 flex items-center gap-4 shadow-sm">
              <div className={`size-12 rounded-full bg-opacity-10 flex items-center justify-center ${stat.color} bg-current`}>
                <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-gray-500 dark:text-text-secondary text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Matches */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Matches</h2>
            <a href="#" className="text-primary hover:text-primary-hover text-sm font-medium">View all</a>
          </div>
          
          <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-highlight rounded-xl overflow-hidden">
            {[1, 2].map((_, i) => (
              <div key={i} className="p-4 flex flex-col md:flex-row items-center gap-4 border-b last:border-0 border-gray-200 dark:border-surface-dark-highlight hover:bg-gray-50 dark:hover:bg-surface-dark-highlight/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4 w-full md:w-1/3">
                    <div className="size-12 rounded-full bg-gray-200 dark:bg-surface-dark-highlight flex-shrink-0 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Team Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Les Fennecs vs. USMA Fans</h4>
                        <p className="text-sm text-gray-500 dark:text-text-secondary">5 vs 5 • Friendly</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 w-full md:w-1/3 justify-start md:justify-center">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                        <span>Today, 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        <span>El Biar Stadium</span>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex justify-end">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Confirmed
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
          <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-highlight rounded-xl p-6 text-center text-gray-500 dark:text-text-secondary">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">history</span>
            <p>No recent activity to show.</p>
          </div>
        </div>

      </main>
    </div>
  );
}
