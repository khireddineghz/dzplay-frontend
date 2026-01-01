import React, { useState } from 'react';
import { StadiumOwnerSidebar } from '../../components/dashboard/StadiumOwnerSidebar';

interface Booking {
  id: number;
  stadium: string;
  client: string;
  avatar: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  type: string;
}

const Schedule: React.FC = () => {
  const [viewMode, setViewMode] = useState<'day' | 'week' | 'month'>('week');

  const bookings: Booking[] = [
    {
      id: 1,
      stadium: 'Stade 5 Juillet 1962',
      client: 'Youcef Belaili',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVHsAUpcYG-k8T7D9nJKd0ZSmxgXEhLHE1-ZCnZbvFdccpduIYZdDn7ij8y33kH-G1qxGkkGm0xAuv72tHoqMa2XKtsmhCHlrTflyRYYZa8icY1A3UwPHgQMquqmy7A-Os3WTueie0DxZeydSGxlQBwBxr4LYBe-ApYqvquYB_1tPvNLkjApsK06sxEz2R07wDjOOmx_eDApAVyAdi9uOb-yA0FXOJm3YV-KEUUMoK4Q9sr1OBX7PvqaDsysuwzPl9V0XQy4qB_6I',
      date: '2024-10-15',
      time: '14:00',
      duration: '2 hours',
      price: 8500,
      status: 'confirmed',
      type: 'Football 11v11',
    },
    {
      id: 2,
      stadium: 'Stade 5 Juillet 1962',
      client: 'Karim Ziani',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuL_C4aXIciKkg_h1HwVOZ1nMPvL13vFLBL1fVEZ1wb7357sTNeVeDXg4J1hUEvut2JPEhjs5CDw7KmrdjGAZhEp9EDbo1IQEI7DxPaURg855Q1zJzIAR2-q-E_qGiAOjVhOLIMs-Dk4EMA2F0LrjlPSkwzO9n5pbmD8h3U0PyCjqOlg8xUqTpzqSein0UG-agxxv0Hw0S1VZ7SJBCLteVD3vmFHgVgBJL4fWQKOeDX0CGCDE13JQ_DC-Ghsf_E4vDFuy9a9R2WG0',
      date: '2024-10-15',
      time: '18:00',
      duration: '2 hours',
      price: 8500,
      status: 'confirmed',
      type: 'Football 11v11',
    },
    {
      id: 3,
      stadium: 'Stade Mustapha Tchaker',
      client: 'Ahmed Mansouri',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop',
      date: '2024-10-15',
      time: '16:00',
      duration: '1.5 hours',
      price: 6500,
      status: 'pending',
      type: 'Football 7v7',
    },
    {
      id: 4,
      stadium: 'Stade Chahid Hamlaoui',
      client: 'Mohamed Bencherif',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop',
      date: '2024-10-16',
      time: '10:00',
      duration: '2 hours',
      price: 7500,
      status: 'confirmed',
      type: 'Football 11v11',
    },
    {
      id: 5,
      stadium: 'Stade 5 Juillet 1962',
      client: 'Ryad Mahrez Academy',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop',
      date: '2024-10-16',
      time: '15:00',
      duration: '3 hours',
      price: 25500,
      status: 'confirmed',
      type: 'Football 11v11',
    },
    {
      id: 6,
      stadium: 'Stade Mustapha Tchaker',
      client: 'Sofiane Feghouli',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop',
      date: '2024-10-16',
      time: '20:00',
      duration: '2 hours',
      price: 13000,
      status: 'completed',
      type: 'Football 7v7',
    },
    {
      id: 7,
      stadium: 'Stade 19 Mai 1956',
      client: 'Islam Slimani',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop',
      date: '2024-10-17',
      time: '09:00',
      duration: '1 hour',
      price: 4500,
      status: 'cancelled',
      type: 'Football 5v5',
    },
  ];

  const getStatusBadge = (status: Booking['status']) => {
    switch (status) {
      case 'confirmed':
        return <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
          Confirmed
        </span>;
      case 'pending':
        return <span className="rounded-full bg-amber-50 dark:bg-amber-900/30 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
          Pending
        </span>;
      case 'completed':
        return <span className="rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
          Completed
        </span>;
      case 'cancelled':
        return <span className="rounded-full bg-red-50 dark:bg-red-900/30 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800">
          Cancelled
        </span>;
    }
  };

  const timeSlots = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
  const weekDays = ['Mon 14', 'Tue 15', 'Wed 16', 'Thu 17', 'Fri 18', 'Sat 19', 'Sun 20'];

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
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Schedule</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage your bookings timeline</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex rounded-md bg-slate-200 dark:bg-slate-700 p-0.5">
              <button
                onClick={() => setViewMode('day')}
                className={`rounded px-3 py-1 text-xs font-medium ${
                  viewMode === 'day' ? 'text-white bg-primary shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setViewMode('week')}
                className={`rounded px-3 py-1 text-xs font-medium ${
                  viewMode === 'week' ? 'text-white bg-primary shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setViewMode('month')}
                className={`rounded px-3 py-1 text-xs font-medium ${
                  viewMode === 'month' ? 'text-white bg-primary shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Month
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            {/* Weekly Calendar View */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">October 2024</h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">chevron_left</span>
                  </button>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all">
                    Today
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">chevron_right</span>
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <div className="grid grid-cols-8 gap-2 mb-2">
                    <div className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase">Time</div>
                    {weekDays.map((day, idx) => (
                      <div key={idx} className="text-center text-xs font-medium text-slate-600 dark:text-slate-300 uppercase">
                        {day}
                      </div>
                    ))}
                  </div>
                  {timeSlots.map((time) => (
                    <div key={time} className="grid grid-cols-8 gap-2 mb-2">
                      <div className="text-sm font-medium text-slate-500 dark:text-slate-400 py-2">{time}</div>
                      {weekDays.map((_, idx) => (
                        <div
                          key={idx}
                          className="min-h-[60px] bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bookings List */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Bookings</h3>
              </div>
              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {bookings.map((booking) => (
                  <div key={booking.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className="h-14 w-14 rounded-full bg-cover bg-center border-2 border-slate-200 dark:border-slate-600"
                          style={{ backgroundImage: `url("${booking.avatar}")` }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">{booking.client}</h4>
                            {getStatusBadge(booking.status)}
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{booking.stadium}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined text-[18px]">schedule</span>
                              <span>{booking.time} ({booking.duration})</span>
                            </div>
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                              <span className="material-symbols-outlined text-[18px]">sports_soccer</span>
                              <span>{booking.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary mb-2">{booking.price.toLocaleString()} DZD</p>
                        <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
                            Details
                          </button>
                          {booking.status === 'pending' && (
                            <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-primary/90 transition-all">
                              Confirm
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Schedule;
