import { DashboardLayout } from "../components/dashboard/DashboardLayout";

export default function MyTeam() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-dz-navy dark:text-white tracking-tight">My Team</h2>
        <p className="text-slate-500 dark:text-slate-400">Manage your squad, lineup, and team stats.</p>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-700 shadow-soft">
          <div className="mx-auto size-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl text-blue-500">groups</span>
          </div>
          <h3 className="text-xl font-bold text-dz-navy dark:text-white mb-2">Create Your Team</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            Assemble your dream team, invite players, and challenge opponents.
          </p>
          <button className="px-6 py-3 bg-dz-navy text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
            Create Team
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
