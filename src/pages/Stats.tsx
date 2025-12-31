import { DashboardLayout } from "../components/dashboard/DashboardLayout";

export default function Stats() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-dz-navy dark:text-white tracking-tight">Statistics</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Track your performance, growth, and achievements.</p>
          </div>
          <div className="flex gap-3">
             <div className="relative">
                <select className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-2.5 pl-4 pr-10 rounded-lg text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option>Last 30 Days</option>
                    <option>This Season</option>
                    <option>All Time</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined pointer-events-none text-xl">expand_more</span>
             </div>
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-primary">sports_soccer</span>
                 </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Matches</p>
                <p className="text-3xl font-bold text-dz-navy dark:text-white">24</p>
                <div className="mt-2 text-xs font-semibold text-green-500 flex items-center">
                    <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span> +2 this week
                </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-blue-500">scoreboard</span>
                 </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Goals Scored</p>
                <p className="text-3xl font-bold text-dz-navy dark:text-white">12</p>
                <div className="mt-2 text-xs font-semibold text-green-500 flex items-center">
                    <span className="material-symbols-outlined text-sm mr-0.5">trending_up</span> 0.5 goals/match
                </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-orange-500">handshake</span>
                 </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Assists</p>
                <p className="text-3xl font-bold text-dz-navy dark:text-white">8</p>
                <div className="mt-2 text-xs font-semibold text-slate-400 flex items-center">
                     Top 15% of players
                </div>
            </div>
             <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-purple-500">military_tech</span>
                 </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Man of the Match</p>
                <p className="text-3xl font-bold text-dz-navy dark:text-white">3</p>
                <div className="mt-2 text-xs font-semibold text-purple-500 flex items-center">
                    Latest: Oct 20 vs Green Stars
                </div>
            </div>
        </div>

        {/* Detailed Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Attacking Stats */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-dz-navy dark:text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">swords</span> Attacking
                </h3>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-600 dark:text-slate-300">Shot Accuracy</span>
                            <span className="text-slate-900 dark:text-white">65%</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[65%] rounded-full"></div>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-600 dark:text-slate-300">Pass Completion</span>
                            <span className="text-slate-900 dark:text-white">82%</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[82%] rounded-full"></div>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-600 dark:text-slate-300">Dribbles Completed</span>
                            <span className="text-slate-900 dark:text-white">48%</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 w-[48%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Defending Stats */}
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-dz-navy dark:text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500">shield</span> Defending
                </h3>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-600 dark:text-slate-300">Tackle Success</span>
                            <span className="text-slate-900 dark:text-white">70%</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[70%] rounded-full"></div>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-600 dark:text-slate-300">Interceptions</span>
                            <span className="text-slate-900 dark:text-white">14</span>
                        </div>
                         <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-400 w-[40%] rounded-full"></div>
                        </div>
                    </div>
                     <div>
                        <div className="flex justify-between text-sm font-medium mb-2">
                            <span className="text-slate-600 dark:text-slate-300">Blocks</span>
                            <span className="text-slate-900 dark:text-white">5</span>
                        </div>
                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-400 w-[20%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discipline & Other */}
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-dz-navy dark:text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500">warning</span> Discipline
                </h3>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl text-center border border-yellow-100 dark:border-yellow-900/20">
                         <div className="w-8 h-10 bg-yellow-400 rounded mx-auto mb-2 shadow-sm"></div>
                         <p className="text-2xl font-bold text-dz-navy dark:text-white">2</p>
                         <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Yellow Cards</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl text-center border border-red-100 dark:border-red-900/20">
                         <div className="w-8 h-10 bg-red-500 rounded mx-auto mb-2 shadow-sm"></div>
                         <p className="text-2xl font-bold text-dz-navy dark:text-white">0</p>
                         <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Red Cards</p>
                    </div>
                 </div>
                 <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Fair Play Score</span>
                         <span className="font-bold text-dz-navy dark:text-white">4.8/5.0</span>
                     </div>
                     <div className="flex gap-1">
                         {[1, 2, 3, 4, 5].map((star) => (
                             <span key={star} className={`material-symbols-outlined text-lg ${star <= 4 ? 'text-yellow-400 fill-1' : star === 5 ? 'text-slate-300' : ''}`} style={star <= 4 ? { fontVariationSettings: "'FILL' 1" } : {}}>star</span>
                         ))}
                     </div>
                 </div>
            </div>
        </div>

        {/* Match History Table */}
        <section>
             <h3 className="text-lg font-bold text-dz-navy dark:text-white mb-4">Match History</h3>
             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-700/50 text-xs uppercase text-slate-500 font-semibold">
                      <tr>
                        <th className="px-6 py-4 whitespace-nowrap">Date</th>
                        <th className="px-6 py-4 whitespace-nowrap">Match</th>
                        <th className="px-6 py-4 whitespace-nowrap">Score</th>
                        <th className="px-6 py-4 whitespace-nowrap">Performance</th>
                        <th className="px-6 py-4 whitespace-nowrap text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                      {[
                        { date: "Oct 20, 2023", opponent: "Green Stars", score: "3 - 1", result: "WIN", goals: 2, assists: 1, rating: 9.2 },
                        { date: "Oct 15, 2023", opponent: "Red Devils", score: "2 - 2", result: "DRAW", goals: 1, assists: 0, rating: 7.5 },
                        { date: "Oct 10, 2023", opponent: "Blue Waves", score: "1 - 4", result: "LOSS", goals: 0, assists: 0, rating: 6.0 },
                        { date: "Oct 05, 2023", opponent: "City Lions", score: "2 - 0", result: "WIN", goals: 1, assists: 1, rating: 8.5 },
                        { date: "Sep 28, 2023", opponent: "United FC", score: "0 - 0", result: "DRAW", goals: 0, assists: 0, rating: 6.8 },
                      ].map((match, index) => (
                        <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                          <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{match.date}</td>
                          <td className="px-6 py-4 font-medium text-slate-800 dark:text-white whitespace-nowrap">
                            vs {match.opponent}
                          </td>
                          <td className="px-6 py-4 font-mono font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">{match.score}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                             <div className="flex items-center gap-3">
                                <span className={`font-bold ${match.rating >= 8 ? 'text-green-500' : match.rating >= 6 ? 'text-yellow-500' : 'text-red-500'}`}>{match.rating}</span>
                                <div className="flex gap-1 text-xs text-slate-500 dark:text-slate-400">
                                    {match.goals > 0 && <span className="bg-slate-100 dark:bg-slate-700 px-1.5 rounded">{match.goals}G</span>}
                                    {match.assists > 0 && <span className="bg-slate-100 dark:bg-slate-700 px-1.5 rounded">{match.assists}A</span>}
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                match.result === 'WIN' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                match.result === 'DRAW' ? 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300' :
                                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {match.result}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
