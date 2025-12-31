import { DashboardLayout } from "../components/dashboard/DashboardLayout";

export default function PlayerDashboard() {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-dz-navy dark:text-white tracking-tight">Dashboard Overview</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Welcome back, Riyad. Ready for the next match?</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Calendar
          </button>
          <button className="px-4 py-2.5 bg-dz-navy text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/20">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create Team
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Matches Played */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-primary">sports_soccer</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Matches Played</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-dz-navy dark:text-white">12</span>
                <span className="text-xs font-semibold text-green-500 flex items-center bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded">
                  <span className="material-symbols-outlined text-xs mr-0.5">trending_up</span> +2
                </span>
              </div>
            </div>

            {/* Goals Scored */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-blue-500">scoreboard</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Goals Scored</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-dz-navy dark:text-white">8</span>
              </div>
            </div>

            {/* Win Rate */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-orange-500">military_tech</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Win Rate</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-dz-navy dark:text-white">65%</span>
                <span className="text-xs font-semibold text-orange-500 flex items-center bg-orange-50 dark:bg-orange-900/30 px-1.5 py-0.5 rounded">
                   Avg
                </span>
              </div>
            </div>

            {/* Fair Play */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 flex flex-col justify-between h-32 relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-purple-500">thumb_up</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Fair Play</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-dz-navy dark:text-white">4.8</span>
                <span className="text-sm text-slate-400">/ 5.0</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Next Match & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Next Match */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dz-navy dark:text-white">Next Match</h3>
                  <a href="#" className="text-sm font-medium text-primary hover:text-purple-400 transition-colors">View details</a>
                </div>
                <div className="bg-gradient-to-br from-dz-navy to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-900/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold border border-white/10 text-white flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">trophy</span>
                          Friendly League
                        </span>
                        <span className="text-white/60 text-sm">Match #24</span>
                      </div>
                      <div className="text-right flex flex-col md:items-end">
                        <span className="text-2xl font-bold font-mono tracking-wider">18:00</span>
                        <span className="text-white/60 text-sm">Today, Oct 24</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-col items-center gap-3 flex-1">
                        <div 
                          className="size-16 md:size-20 rounded-full bg-white p-1 shadow-lg bg-cover bg-center" 
                          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOcxOSPAsLTHGXZLekI02HfgBLTWQoFUExbrdNZnPnnn1Z5WHNSaLydorgu0vK6D4eg81MSXHpooh7a88aNEAErfYeloe2C9wg4Kizo2zQoHRjmFceH8RC8e6kfypCY8Hif7HmfzS8tMoZ3w9ECpw0Z0DZZceCbYbRWEOodVyUKTS4Y16MJwSMU7d-FBoU_q2WbIHMHohi1eQSAfhNhNLfPm6FVsYSuUenC3_o8oNLO4_qBi6QuGeRzXHZaFKpdqnKdrMRpS05qzU')" }}
                        ></div>
                        <span className="font-bold text-lg md:text-xl text-center">Fennecs FC</span>
                      </div>
                      <div className="flex flex-col items-center justify-center px-4">
                        <span className="text-4xl font-black text-white/20 italic">VS</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 flex-1">
                        <div 
                          className="size-16 md:size-20 rounded-full bg-white p-1 shadow-lg bg-cover bg-center" 
                          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQ8MEHd0vrN5npZMJskhaFq0zLbSW5A7fZ4k4wZDxMMqZnk__IM7nhb0_qAWjOoU1xE0hbfSO3JwMHH5eHprUDMRXuEnEB6CbckiYPrlxCl8xV2uouUVooRjSpyOAfQ7AuxPDtcG6W73EdsgzbR_IBrH6_I5ZOPnYW5OoYNVqrqTMZ8gSOOLTSnRRiyEfX7O9KlBAXw_fwGdDCcoLL1iXuCamPScx7HHdpOFz8FUzrElIk9cBMzCNBPSjEj2kFGwtMcU_JcLpI-M4')" }}
                        ></div>
                        <span className="font-bold text-lg md:text-xl text-center">Lions Club</span>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-white/80">
                        <span className="material-symbols-outlined">location_on</span>
                        <span className="font-medium">El Biar Stadium, Algiers</span>
                      </div>
                      <button className="w-full md:w-auto px-6 py-2 bg-primary hover:bg-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-900/20 active:scale-95">
                        Check In
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quick Actions */}
              <section>
                <h3 className="text-lg font-bold text-dz-navy dark:text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 flex flex-col gap-4 group hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">stadium</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_forward</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">Book a Stadium</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Find available pitches near you and reserve instantly.</p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 flex flex-col gap-4 group hover:border-blue-500/50 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-3xl">diversity_3</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-300 group-hover:text-blue-500 transition-colors">arrow_forward</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">Find Opponent</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Challenge other teams for a friendly or competitive match.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recent Matches */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dz-navy dark:text-white">Recent Matches</h3>
                  <button className="text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">View All</button>
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-700/50 text-xs uppercase text-slate-500 font-semibold">
                      <tr>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Opponent</th>
                        <th className="px-6 py-4">Score</th>
                        <th className="px-6 py-4 text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Oct 20, 2023</td>
                        <td className="px-6 py-4 font-medium text-slate-800 dark:text-white flex items-center gap-2">
                          <div 
                            className="size-6 rounded-full bg-slate-200 bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIgG3BwkKEe29tN6i-_9_GEdOqe1t_BLmXhn-t52LKZ_ZVbEgIC24TkpgHUzGeK-OKCPSE5MkvJTNl4nHhGX3gEpv9CLyF2lbB6t77MJNAUEY9o35LM09GCxlCzfAAFcHW-xlPoNPaef-4bzCu7Jkz5_SFVVExM-WO_iQ9q-5yeFHQGBWDZTxTrZ4pGEb3qwLNyTrY8QL7CfqN3Wp98sgij0vTASrT7yRC3ck5NPHfdZ61TTG_IN6XNe4tLzSQlhUtRqtRyMm6zfM')" }}
                          ></div>
                          Green Stars
                        </td>
                        <td className="px-6 py-4 font-mono font-bold text-slate-700 dark:text-slate-300">3 - 1</td>
                        <td className="px-6 py-4 text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            WIN
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">Oct 15, 2023</td>
                        <td className="px-6 py-4 font-medium text-slate-800 dark:text-white flex items-center gap-2">
                          <div 
                            className="size-6 rounded-full bg-slate-200 bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSJjwvQIDoMAkU0XcJx4itbYN1vIgKwz7rzRQjaokDjM44StE1LXPzsrT5bbvTCWi4IqYfFkWLPYXFhlA5KrEvtIXuPnOw_qM_QGKu1SUWWbDBhAB6PwHl5K1o1pseyf-yrhF2HIEbXDOtLAMuKpvLMug_PYcuKHy6aT8HAuZpHBUFQpDC3y1v8h0CgCi0CwB-NUIqxX_bydotn-FSsDXr2honElecOq1ARkYFrALcpNYA3F-3D0gdKIp6rEjM-QtvjddLRu1rT3g')" }}
                          ></div>
                          Red Devils
                        </td>
                        <td className="px-6 py-4 font-mono font-bold text-slate-700 dark:text-slate-300">2 - 2</td>
                        <td className="px-6 py-4 text-right">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                            DRAW
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Upcoming Bookings */}
              <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-dz-navy dark:text-white">Upcoming Bookings</h3>
                  <button className="text-primary hover:bg-primary/10 p-1 rounded-full transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-12 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl text-center">
                      <span className="text-xs text-slate-500 font-semibold uppercase pt-1">Oct</span>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-none pb-1">25</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-800 dark:text-white truncate">Training Session</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 truncate">Zeralda Arena, Pitch A</p>
                      <span className="inline-block mt-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">20:00 - 21:30</span>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start pt-2">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-12 h-14 bg-slate-100 dark:bg-slate-700 rounded-xl text-center">
                      <span className="text-xs text-slate-500 font-semibold uppercase pt-1">Oct</span>
                      <span className="text-lg font-bold text-slate-800 dark:text-slate-200 leading-none pb-1">28</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-800 dark:text-white truncate">5-a-side Friendly</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 truncate">Sidi Abdellah Sport</p>
                      <span className="inline-block mt-1 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">17:00 - 18:00</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  View All Bookings
                </button>
              </section>

              {/* Featured Stadium */}
              <section className="relative rounded-2xl overflow-hidden h-64 shadow-soft group">
                <img alt="High angle view of a professional green football stadium at night" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe8qJGKvf3Yb37hoil6HJL1XS6GqMUX8iyOtTYIym9DEi88009VPhj7GEigYyJls56CxL68ga07a-HsMv-Am6KAZH7LJeywVYU5rnGjmiwMGRm3jcaFGPUM2v_4UiDyr8vgovtLyT1Dw4NUMji2ISlg2rzxGE5DyDNbHGkP-5YrQYrbetT1w2b2N5oGNGeoLRo0tqwWuInwgECnaA3E5Sp6lmziCJ8jJk6DtnAFn9ymAWYVz0i58MzmqCUjyvrdNtx5VPuPvPULd8"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-primary text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Featured</span>
                  <h3 className="text-xl font-bold mb-1">5th of July Stadium</h3>
                  <p className="text-white/80 text-sm mb-3">Experience the pro atmosphere.</p>
                  <button className="text-sm font-semibold hover:underline flex items-center gap-1">
                    Book Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </section>

              {/* My Team */}
              <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-dz-navy dark:text-white">My Team</h3>
                  <span className="text-xs font-medium text-slate-400">12 Members</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="size-12 rounded-full bg-slate-200 border-2 border-white shadow-sm bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs57oUQlyIqf8B1M-NutA_UIk29oDcx07RtwMRKMDr8hjobKY1uEWQY59ovQYrVj8blTegftyMuko2aFv5TUXLHcKKJpmGbeQ15AAR8KMUimRF5iprswWilAQMSkAlMUV1bMk59ohCUQoYENljp-Aoo1nkTJdtmFfhZEkbMhtVqtp84bwm1gJOqcUqf4kUMUbOMMIFN8vFEqVgrPXnF7la3sJTjBLJcLLME_RNyIm6pRfjDYPT8z4w5SXyvlKkhYuOTLkBmUlDqRk')" }}
                  ></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">Fennecs FC</h4>
                    <p className="text-xs text-primary font-medium">Captain</p>
                  </div>
                </div>
                <div className="flex -space-x-2 overflow-hidden py-2 pl-1">
                  <img alt="Team member 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUqdk_LfAk_07lyABooguvR6H9btQi1oP-P59RUHIHwDtXKFuoTiME6EuPsfwgCaGkvO-iG4J3dexz_2ECCtzxqNBeEou_jY-OVMUDUbr4qKjjYm6oRhs4IWXDBslje4xSWJxYSiy40_mJk6eo8U6wraib48HTeiQ8d9OWxjFh3lsjqJLv_Xd7Z4zblYPvb2cpczAV5Dd4uBOF7SQLTfODB79s2wcCLUHirP4HbkpbjBIMyvS80-9fIrw_YazvPHE-bfIlTdWF1LM"/>
                  <img alt="Team member 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSPmwmVwNfiSNTqlrdIT_TS6BxUb4zCAyO5sg-zkF3HLwoh_zX-XQ6A_UuvNiBjgWZWr6BC3ULnG82ljvYFn0PFtHRyeOYuXP3kz5rjUbdwqt9_n_mG3EuEpAlyZff7s3ooOH9lVnz9IZA16Uhbxmw-K5we3vILVPAeXhT2yvwUCiRyVbBzbT7gr-Nq652Ey4RH76MCquu6y11xfvUa4w9mddy9gR5PsaCGjm-TzbNNRmqIq17XfM8IXRcOzoBsYNTTEKkl2wxkew"/>
                  <img alt="Team member 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy8UyGnVC_o7iqe0eA9ddNrKZKJ_VE_8JQPM71bpGF3SZDoEwJGJ_yhnrT_V5zUtxeZ-_TW63K8L4jP67X0Lc21lAq0WUkNVlO-uK0V8a9ccXlCc7MKvxhRWUcMMWiQz44sF9D3VNVafWX6YBury26udloAvvuP_-LdZy9-tdKHh-V6oyOhnUAE1s8qaq_7ZWTnQEjv6QVNa-5V6RcLPHwPHc-2pL4N0jnfm5fKt-fQ8G0jA3a9aStpikPAIXfwerVE4PD7920Uoo"/>
                  <img alt="Team member 4" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6_fB7JeyCO_0Y0Y_MZUcAFCEOxUZS2Bid141CNUxnKlRwB-Sn8M2a8gelg1NvXOpSNaLQk6IUWoW0Y0BK0CCwXZm3ceOS0knqX3rTdp4DtcsppYegwZ7NXPUbCG8Y9JBc7QnFLAqLvPRqNu-UIV76U3QDdt3e7Qjk3vjQKfE6p0M9DuKd2CiftNPCmeD14wWnDB8hY4w5sLeq3v7usU-UmHrewK04DjhP10kNA9k9_WHp8qD65sMGFjL3MJo_kjVGUleLDlLf3xo"/>
                  <div className="h-8 w-8 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-800 flex items-center justify-center text-xs font-medium text-slate-500 hover:bg-slate-200 cursor-pointer">+8</div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex gap-2">
                  <button className="flex-1 py-2 text-xs font-semibold bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                    Manage
                  </button>
                  <button className="flex-1 py-2 text-xs font-semibold bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                    Invite
                  </button>
                </div>
              </section>
            </div>
          </div>
    </DashboardLayout>
  );
}
