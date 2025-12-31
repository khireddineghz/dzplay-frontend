import { DashboardLayout } from "../components/dashboard/DashboardLayout";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-dz-navy dark:text-white tracking-tight">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400">Manage your account preferences.</p>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-soft space-y-6 max-w-2xl">
            <div>
                <h3 className="text-lg font-bold text-dz-navy dark:text-white mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                        <input type="text" defaultValue="Riyad Mahrez" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                        <input type="email" defaultValue="riyad.mahrez@example.com" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                    </div>
                </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <h3 className="text-lg font-bold text-dz-navy dark:text-white mb-4">Preferences</h3>
                 <div className="flex items-center justify-between py-2">
                    <span className="text-slate-700 dark:text-slate-300">Dark Mode</span>
                    <button className="w-11 h-6 bg-slate-200 dark:bg-primary rounded-full relative transition-colors">
                        <span className="absolute top-1 left-1 dark:left-6 w-4 h-4 bg-white rounded-full transition-all"></span>
                    </button>
                </div>
                 <div className="flex items-center justify-between py-2">
                    <span className="text-slate-700 dark:text-slate-300">Email Notifications</span>
                    <button className="w-11 h-6 bg-primary rounded-full relative transition-colors">
                        <span className="absolute top-1 left-6 w-4 h-4 bg-white rounded-full transition-all"></span>
                    </button>
                </div>
            </div>

             <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                    Save Changes
                </button>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
