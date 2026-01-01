import React, { useState } from 'react';
import { StadiumOwnerSidebar } from '../../components/dashboard/StadiumOwnerSidebar';

interface Transaction {
  id: number;
  stadium: string;
  client: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  type: string;
}

interface EarningsStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

const Earnings: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');

  const stats: EarningsStat[] = [
    {
      label: 'Total Revenue',
      value: '3,487,500',
      change: '+12.5%',
      trend: 'up',
      icon: 'payments',
    },
    {
      label: 'This Month',
      value: '450,000',
      change: '+8.2%',
      trend: 'up',
      icon: 'trending_up',
    },
    {
      label: 'Avg. Booking',
      value: '6,250',
      change: '+3.1%',
      trend: 'up',
      icon: 'receipt_long',
    },
    {
      label: 'Pending Payments',
      value: '45,000',
      change: '-5.3%',
      trend: 'down',
      icon: 'pending',
    },
  ];

  const transactions: Transaction[] = [
    {
      id: 1,
      stadium: 'Stade 5 Juillet 1962',
      client: 'Youcef Belaili',
      date: '2024-10-15',
      amount: 8500,
      status: 'completed',
      type: 'Football 11v11',
    },
    {
      id: 2,
      stadium: 'Stade Mustapha Tchaker',
      client: 'Karim Ziani',
      date: '2024-10-15',
      amount: 6500,
      status: 'completed',
      type: 'Football 7v7',
    },
    {
      id: 3,
      stadium: 'Stade 5 Juillet 1962',
      client: 'Ryad Mahrez Academy',
      date: '2024-10-14',
      amount: 25500,
      status: 'pending',
      type: 'Football 11v11',
    },
    {
      id: 4,
      stadium: 'Stade Chahid Hamlaoui',
      client: 'Mohamed Bencherif',
      date: '2024-10-14',
      amount: 7500,
      status: 'completed',
      type: 'Football 11v11',
    },
    {
      id: 5,
      stadium: 'Stade Mustapha Tchaker',
      client: 'Sofiane Feghouli',
      date: '2024-10-13',
      amount: 13000,
      status: 'completed',
      type: 'Football 7v7',
    },
    {
      id: 6,
      stadium: 'Stade 19 Mai 1956',
      client: 'Islam Slimani',
      date: '2024-10-13',
      amount: 4500,
      status: 'failed',
      type: 'Football 5v5',
    },
    {
      id: 7,
      stadium: 'Stade 5 Juillet 1962',
      client: 'Ahmed Mansouri',
      date: '2024-10-12',
      amount: 17000,
      status: 'completed',
      type: 'Football 11v11',
    },
    {
      id: 8,
      stadium: 'Stade Ahmed Zabana',
      client: 'Rachid Ghezzal',
      date: '2024-10-12',
      amount: 5500,
      status: 'pending',
      type: 'Football 7v7',
    },
  ];

  const monthlyData = [
    { month: 'Jan', amount: 280000 },
    { month: 'Feb', amount: 320000 },
    { month: 'Mar', amount: 290000 },
    { month: 'Apr', amount: 350000 },
    { month: 'May', amount: 380000 },
    { month: 'Jun', amount: 420000 },
    { month: 'Jul', amount: 450000 },
    { month: 'Aug', amount: 410000 },
    { month: 'Sep', amount: 390000 },
    { month: 'Oct', amount: 450000 },
  ];

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
          Completed
        </span>;
      case 'pending':
        return <span className="rounded-full bg-amber-50 dark:bg-amber-900/30 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
          Pending
        </span>;
      case 'failed':
        return <span className="rounded-full bg-red-50 dark:bg-red-900/30 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800">
          Failed
        </span>;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-overlay"
        style={{ 
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCayGQRLQ-QABR-fd1toRarSLcamLYXp44v5d0zQOt-lT0mWqruwT0rzcEbaTrhhL6RuTqrvLNa9n4MVybswevGWZW46jKwhOCLBnYo07dBao_H6yHbdyQqTSEKUsyv5Q_gsGYEDqaD65fOmOZMeyv8VILpglc2-1XC2DwjQ81p4z2ZOnohe4oq0cDXt5c_kfbfSCVKJ9Hb1AX6vbhIsG2cmBWE9Dn5qt71qJ4EAxp9Kojdii99-PMx-yLcUjHA-Rg07BmJMH1qT2U')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      {/* Sidebar */}
      <StadiumOwnerSidebar />

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden relative z-10">
        <header className="flex h-20 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-8 backdrop-blur-sm z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Earnings</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Track your revenue and transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex rounded-md bg-slate-200 dark:bg-slate-700 p-0.5">
              <button
                onClick={() => setSelectedPeriod('week')}
                className={`rounded px-3 py-1 text-xs font-medium ${
                  selectedPeriod === 'week' ? 'text-white bg-primary shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setSelectedPeriod('month')}
                className={`rounded px-3 py-1 text-xs font-medium ${
                  selectedPeriod === 'month' ? 'text-white bg-primary shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setSelectedPeriod('year')}
                className={`rounded px-3 py-1 text-xs font-medium ${
                  selectedPeriod === 'year' ? 'text-white bg-primary shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Year
              </button>
            </div>
            <button className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-[20px]">file_download</span>
              <span>Export</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                    <span className={`flex items-center text-xs font-semibold ${
                      stat.trend === 'up' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      <span className="material-symbols-outlined text-xs mr-0.5">
                        {stat.trend === 'up' ? 'trending_up' : 'trending_down'}
                      </span>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value} <span className="text-sm font-normal text-slate-500">DZD</span>
                  </h3>
                </div>
              ))}
            </div>

            {/* Revenue Chart */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Overview</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Monthly earnings trend</p>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-2">
                {monthlyData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-t-lg relative group cursor-pointer hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                      style={{ height: `${(data.amount / maxAmount) * 100}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {(data.amount / 1000).toFixed(0)}K DZD
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Stadium
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{transaction.client}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-500 dark:text-slate-400">{transaction.stadium}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-500 dark:text-slate-400">{transaction.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-slate-500 dark:text-slate-400">{transaction.type}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-primary">{transaction.amount.toLocaleString()} DZD</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(transaction.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Earnings;
