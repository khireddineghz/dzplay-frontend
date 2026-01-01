import React, { useState } from 'react';
import { StadiumOwnerSidebar } from '../../components/dashboard/StadiumOwnerSidebar';

interface BookingRequest {
  id: number;
  name: string;
  avatar: string;
  type: string;
  price: number;
  date: string;
  time: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface ScheduleItem {
  id: number;
  title: string;
  subtitle: string;
  time: string;
  status: 'ongoing' | 'upcoming' | 'scheduled';
}

interface CalendarDay {
  day: number;
  bookings: ('open' | 'reserved' | 'pending' | 'full')[];
  isToday?: boolean;
  isWeekend?: boolean;
  isPreviousMonth?: boolean;
  isClosed?: boolean;
}

const Dashboard: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'month' | 'week' | 'day'>('month');
  const [currentMonth] = useState('October 2023');

  const stats = [
    {
      label: 'Monthly Revenue',
      value: '250,000',
      unit: 'DZD',
      change: '+12%',
      changeLabel: 'vs last month',
      icon: 'trending_up',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      positive: true,
    },
    {
      label: 'Total Bookings',
      value: '142',
      unit: '',
      change: '+5%',
      changeLabel: 'vs last month',
      icon: 'confirmation_number',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      positive: true,
    },
    {
      label: 'Utilization Rate',
      value: '78%',
      unit: '',
      change: '+2%',
      changeLabel: 'efficiency',
      icon: 'analytics',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      positive: true,
    },
    {
      label: 'Pending Requests',
      value: '5',
      unit: '',
      change: '',
      changeLabel: 'Requires attention',
      icon: 'pending_actions',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      positive: false,
    },
  ];

  const bookingRequests: BookingRequest[] = [
    {
      id: 1,
      name: 'Youcef Belaili',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVHsAUpcYG-k8T7D9nJKd0ZSmxgXEhLHE1-ZCnZbvFdccpduIYZdDn7ij8y33kH-G1qxGkkGm0xAuv72tHoqMa2XKtsmhCHlrTflyRYYZa8icY1A3UwPHgQMquqmy7A-Os3WTueie0DxZeydSGxlQBwBxr4LYBe-ApYqvquYB_1tPvNLkjApsK06sxEz2R07wDjOOmx_eDApAVyAdi9uOb-yA0FXOJm3YV-KEUUMoK4Q9sr1OBX7PvqaDsysuwzPl9V0XQy4qB_6I',
      type: 'Football 5v5',
      price: 4000,
      date: 'Oct 15',
      time: '20:00 - 22:00',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Karim Ziani',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuL_C4aXIciKkg_h1HwVOZ1nMPvL13vFLBL1fVEZ1wb7357sTNeVeDXg4J1hUEvut2JPEhjs5CDw7KmrdjGAZhEp9EDbo1IQEI7DxPaURg855Q1zJzIAR2-q-E_qGiAOjVhOLIMs-Dk4EMA2F0LrjlPSkwzO9n5pbmD8h3U0PyCjqOlg8xUqTpzqSein0UG-agxxv0Hw0S1VZ7SJBCLteVD3vmFHgVgBJL4fWQKOeDX0CGCDE13JQ_DC-Ghsf_E4vDFuy9a9R2WG0',
      type: 'Football 7v7',
      price: 6500,
      date: 'Oct 16',
      time: '18:00 - 20:00',
      status: 'pending',
    },
  ];

  const scheduleItems: ScheduleItem[] = [
    {
      id: 1,
      title: 'Match ongoing',
      subtitle: 'Team A vs Team B',
      time: '16:00 - 18:00',
      status: 'ongoing',
    },
    {
      id: 2,
      title: 'Reserved Slot',
      subtitle: 'Client: Mahrez Academy',
      time: '18:30 - 20:00',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Reserved Slot',
      subtitle: 'Private Booking',
      time: '21:00 - 23:00',
      status: 'scheduled',
    },
  ];

  const calendarDays: CalendarDay[] = [
    { day: 29, bookings: [], isPreviousMonth: true },
    { day: 30, bookings: [], isPreviousMonth: true },
    { day: 1, bookings: ['open', 'reserved'] },
    { day: 2, bookings: ['open'] },
    { day: 3, bookings: [] },
    { day: 4, bookings: [], isClosed: true, isWeekend: true },
    { day: 5, bookings: ['full'], isWeekend: true },
    { day: 6, bookings: [] },
    { day: 7, bookings: ['reserved'] },
    { day: 8, bookings: [] },
    { day: 9, bookings: [] },
    { day: 10, bookings: ['open'] },
    { day: 11, bookings: [] },
    { day: 12, bookings: ['full'], isWeekend: true },
    { day: 14, bookings: ['open', 'reserved'], isToday: true },
    { day: 15, bookings: ['pending'] },
  ];

  const handleApproveBooking = (id: number) => {
    console.log('Approve booking:', id);
  };

  const handleRejectBooking = (id: number) => {
    console.log('Reject booking:', id);
  };

  const handlePrevMonth = () => {
    // Logic to navigate to previous month
    console.log('Previous month');
  };

  const handleNextMonth = () => {
    // Logic to navigate to next month
    console.log('Next month');
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
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-8 backdrop-blur-sm z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Stade 5 Juillet 1962</h2>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 border border-emerald-100 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span>Add Slot</span>
            </button>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors shadow-sm">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10" />
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                        {stat.value}{' '}
                        {stat.unit && (
                          <span className="text-sm font-normal text-slate-500">{stat.unit}</span>
                        )}
                      </h3>
                    </div>
                    <div className={`rounded-lg ${stat.iconBg} p-2 ${stat.iconColor}`}>
                      <span className="material-symbols-outlined">{stat.icon}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    {stat.change && (
                      <span
                        className={`flex items-center text-xs font-medium ${
                          stat.positive ? 'text-emerald-600' : 'text-slate-500'
                        }`}
                      >
                        {stat.change}
                      </span>
                    )}
                    <span className="text-xs text-slate-500">{stat.changeLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
              {/* Left Column */}
              <div className="flex flex-col gap-6 xl:col-span-5">
                {/* Booking Requests */}
                <div className="flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 px-5 py-4 bg-gray-50 dark:bg-slate-900/50">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Booking Requests</h3>
                    <button className="text-xs font-semibold text-primary hover:text-primary/80">
                      View All
                    </button>
                  </div>
                  <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-700">
                    {bookingRequests.map((request) => (
                      <div
                        key={request.id}
                        className="flex flex-col gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-10 w-10 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700"
                              style={{ backgroundImage: `url("${request.avatar}")` }}
                            />
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">{request.name}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {request.type} • {request.price} DZD
                              </p>
                            </div>
                          </div>
                          <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-600 border border-amber-100">
                            Pending
                          </span>
                        </div>
                        <div className="flex items-center justify-between pl-[52px]">
                          <div className="text-xs font-medium text-slate-600">
                            <span className="mr-2">{request.date}</span>
                            <span>{request.time}</span>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleRejectBooking(request.id)}
                              aria-label="Reject"
                              className="flex h-8 w-8 items-center justify-center rounded bg-slate-100 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                            >
                              <span className="material-symbols-outlined text-[18px]">close</span>
                            </button>
                            <button
                              onClick={() => handleApproveBooking(request.id)}
                              className="flex h-8 items-center gap-1 rounded bg-primary px-3 text-xs font-bold text-white hover:bg-primary/80 transition-all"
                            >
                              <span className="material-symbols-outlined text-[16px]">check</span>
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Schedule */}
                <div className="flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-1 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 px-5 py-4 bg-gray-50 dark:bg-slate-900/50">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Today's Schedule</h3>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Tuesday, 14 Oct</div>
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    {scheduleItems.map((item, index) => (
                      <div key={item.id} className="relative flex gap-4">
                        <div className="flex flex-col items-center">
                          {item.status === 'ongoing' ? (
                            <div className="h-full w-0.5 bg-slate-200" />
                          ) : (
                            <>
                              <div
                                className={`h-2 w-2 rounded-full mb-1 ${
                                  item.status === 'upcoming' ? 'bg-primary' : 'bg-gray-300'
                                }`}
                              />
                              {index < scheduleItems.length - 1 && (
                                <div
                                  className={`h-full w-0.5 ${
                                    item.status === 'upcoming'
                                      ? 'bg-slate-200'
                                      : 'bg-transparent'
                                  }`}
                                />
                              )}
                            </>
                          )}
                        </div>
                        <div
                          className={`mb-4 flex-1 rounded-lg p-3 ${
                            item.status === 'ongoing'
                              ? 'border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border-r border-y border-slate-200 dark:border-slate-700'
                              : item.status === 'upcoming'
                              ? 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50 transition-colors cursor-pointer shadow-sm'
                              : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 opacity-60'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">{item.subtitle}</p>
                            </div>
                            {item.status === 'ongoing' && (
                              <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                                NOW
                              </span>
                            )}
                            {item.status === 'upcoming' && (
                              <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                                UPCOMING
                              </span>
                            )}
                          </div>
                          <div className="mt-2 text-xs font-medium text-slate-700">{item.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6 xl:col-span-7">
                {/* Calendar */}
                <div className="flex flex-col rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-full shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 px-5 py-4 bg-gray-50 dark:bg-slate-900/50">
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Availability Calendar</h3>
                      <div className="flex rounded-md bg-slate-200 p-0.5">
                        <button
                          onClick={() => setSelectedView('month')}
                          className={`rounded px-3 py-1 text-xs font-medium ${
                            selectedView === 'month'
                              ? 'text-white bg-primary shadow-sm'
                              : 'text-slate-500 hover:text-slate-900'
                          }`}
                        >
                          Month
                        </button>
                        <button
                          onClick={() => setSelectedView('week')}
                          className={`rounded px-3 py-1 text-xs font-medium ${
                            selectedView === 'week'
                              ? 'text-white bg-primary shadow-sm'
                              : 'text-slate-500 hover:text-slate-900'
                          }`}
                        >
                          Week
                        </button>
                        <button
                          onClick={() => setSelectedView('day')}
                          className={`rounded px-3 py-1 text-xs font-medium ${
                            selectedView === 'day'
                              ? 'text-white bg-primary shadow-sm'
                              : 'text-slate-500 hover:text-slate-900'
                          }`}
                        >
                          Day
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrevMonth}
                        className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                      >
                        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                      </button>
                      <span className="text-sm font-bold text-slate-900 dark:text-white self-center">
                        {currentMonth}
                      </span>
                      <button
                        onClick={handleNextMonth}
                        className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_right
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      <div className="text-xs font-medium text-slate-400 uppercase">Mon</div>
                      <div className="text-xs font-medium text-slate-400 uppercase">Tue</div>
                      <div className="text-xs font-medium text-slate-400 uppercase">Wed</div>
                      <div className="text-xs font-medium text-slate-400 uppercase">Thu</div>
                      <div className="text-xs font-medium text-slate-400 uppercase">Fri</div>
                      <div className="text-xs font-medium text-primary uppercase">Sat</div>
                      <div className="text-xs font-medium text-primary uppercase">Sun</div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 auto-rows-fr">
                      {calendarDays.map((day, index) => (
                        <div
                          key={index}
                          className={`h-24 rounded-lg p-2 flex flex-col justify-between ${
                            day.isPreviousMonth
                              ? 'bg-slate-50 dark:bg-slate-900 text-slate-400'
                              : day.isToday
                              ? 'bg-primary/5 ring-2 ring-primary cursor-pointer'
                              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors hover:border-primary/30'
                          } relative`}
                        >
                          <div
                            className={`self-end text-xs font-bold ${
                              day.isToday
                                ? 'text-white bg-primary rounded-full w-5 h-5 flex items-center justify-center'
                                : day.isPreviousMonth
                                ? 'text-slate-400'
                                : 'text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {day.day}
                          </div>
                          {day.isClosed ? (
                            <div className="absolute inset-x-1 bottom-1 flex justify-center">
                              <span className="text-[10px] text-slate-400">Closed</span>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-1">
                              {day.bookings.map((booking, idx) => (
                                <div
                                  key={idx}
                                  className={`h-1.5 rounded-full ${
                                    booking === 'open'
                                      ? 'w-full bg-emerald-500/80'
                                      : booking === 'reserved'
                                      ? 'w-3/4 bg-blue-500/80'
                                      : booking === 'pending'
                                      ? 'w-1/4 bg-amber-500'
                                      : 'w-full bg-red-500/80'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-4 border-t border-slate-200 dark:border-slate-700 pt-3 flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" /> Open
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500" /> Reserved
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-amber-500" /> Pending
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" /> Full
                    </div>
                  </div>
                </div>

                {/* Rates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Standard Rate</span>
                      <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 cursor-pointer hover:text-primary">
                        edit
                      </span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      4,000 DZD{' '}
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">/hour</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                        Peak Rate (18:00+)
                      </span>
                      <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 cursor-pointer hover:text-primary">
                        edit
                      </span>
                    </div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                      6,500 DZD{' '}
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">/hour</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
