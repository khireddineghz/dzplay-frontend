import React, { useState } from 'react';
import { StadiumOwnerSidebar } from '../../components/dashboard/StadiumOwnerSidebar';

interface Stadium {
  id: number;
  name: string;
  location: string;
  image: string;
  type: string;
  capacity: string;
  rating: number;
  price: number;
  status: 'active' | 'inactive' | 'maintenance';
  totalBookings: number;
  revenue: number;
  facilities: string[];
}

const MyStadiums: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'maintenance'>('all');

  const stadiums: Stadium[] = [
    {
      id: 1,
      name: 'Stade 5 Juillet 1962',
      location: 'Algiers, Algeria',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop',
      type: 'Football 11v11',
      capacity: '64,000',
      rating: 4.8,
      price: 8500,
      status: 'active',
      totalBookings: 142,
      revenue: 1250000,
      facilities: ['Parking', 'Locker Rooms', 'LED Lighting', 'VIP Section', 'Cafe'],
    },
    {
      id: 2,
      name: 'Stade Mustapha Tchaker',
      location: 'Blida, Algeria',
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop',
      type: 'Football 7v7',
      capacity: '35,000',
      rating: 4.6,
      price: 6500,
      status: 'active',
      totalBookings: 98,
      revenue: 637000,
      facilities: ['Parking', 'Locker Rooms', 'LED Lighting', 'Cafe'],
    },
    {
      id: 3,
      name: 'Stade 19 Mai 1956',
      location: 'Annaba, Algeria',
      image: 'https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=800&auto=format&fit=crop',
      type: 'Football 5v5',
      capacity: '50,000',
      rating: 4.5,
      price: 4500,
      status: 'maintenance',
      totalBookings: 76,
      revenue: 342000,
      facilities: ['Parking', 'Locker Rooms', 'Natural Grass'],
    },
    {
      id: 4,
      name: 'Stade Chahid Hamlaoui',
      location: 'Constantine, Algeria',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&auto=format&fit=crop',
      type: 'Football 11v11',
      capacity: '50,000',
      rating: 4.7,
      price: 7500,
      status: 'active',
      totalBookings: 115,
      revenue: 862500,
      facilities: ['Parking', 'Locker Rooms', 'LED Lighting', 'VIP Section'],
    },
    {
      id: 5,
      name: 'Stade Ahmed Zabana',
      location: 'Oran, Algeria',
      image: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=800&auto=format&fit=crop',
      type: 'Football 7v7',
      capacity: '40,000',
      rating: 4.4,
      price: 5500,
      status: 'inactive',
      totalBookings: 45,
      revenue: 247500,
      facilities: ['Parking', 'Locker Rooms'],
    },
  ];

  const filteredStadiums = stadiums.filter(stadium => {
    const matchesSearch = stadium.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          stadium.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || stadium.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: Stadium['status']) => {
    switch (status) {
      case 'active':
        return <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
        </span>;
      case 'inactive':
        return <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          Inactive
        </span>;
      case 'maintenance':
        return <span className="rounded-full bg-amber-50 dark:bg-amber-900/30 px-3 py-1 text-xs font-bold text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-800">
          Maintenance
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
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">My Stadiums</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage your stadium portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span>Add Stadium</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="mx-auto max-w-7xl flex flex-col gap-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined">search</span>
                <input
                  type="text"
                  placeholder="Search stadiums..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white placeholder:text-slate-400 transition-all outline-none"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    filterStatus === 'all'
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('active')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    filterStatus === 'active'
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilterStatus('maintenance')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    filterStatus === 'maintenance'
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  Maintenance
                </button>
              </div>
            </div>

            {/* Stadiums Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredStadiums.map((stadium) => (
                <div
                  key={stadium.id}
                  className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={stadium.image}
                      alt={stadium.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      {getStatusBadge(stadium.status)}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 dark:text-white">
                        {stadium.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{stadium.name}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {stadium.location}
                      </p>
                    </div>

                    <div className="flex items-center justify-between py-3 border-t border-b border-slate-100 dark:border-slate-700">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-amber-500 text-[18px]">star</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{stadium.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[18px]">group</span>
                        <span className="text-sm font-medium">{stadium.capacity}</span>
                      </div>
                      <div className="text-sm font-bold text-primary">
                        {stadium.price.toLocaleString()} DZD
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {stadium.facilities.slice(0, 3).map((facility, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs font-medium"
                        >
                          {facility}
                        </span>
                      ))}
                      {stadium.facilities.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs font-medium">
                          +{stadium.facilities.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Bookings</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">{stadium.totalBookings}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Revenue</p>
                        <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          {(stadium.revenue / 1000).toFixed(0)}K
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all">
                        Manage
                      </button>
                      <button className="px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredStadiums.length === 0 && (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">stadium</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No stadiums found</h3>
                <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyStadiums;
