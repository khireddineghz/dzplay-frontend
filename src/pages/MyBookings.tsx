import { DashboardLayout } from "../components/dashboard/DashboardLayout";

export default function MyBookings() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-dz-navy dark:text-white tracking-tight">My Bookings</h2>
        <p className="text-slate-500 dark:text-slate-400">Manage your upcoming and past bookings.</p>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-700 shadow-soft">
          <div className="mx-auto size-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl text-primary">calendar_today</span>
          </div>
          <h3 className="text-xl font-bold text-dz-navy dark:text-white mb-2">No Bookings Yet</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            You haven't booked any stadiums yet. Find a pitch and schedule your next match!
          </p>
          <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
            Find a Stadium
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
