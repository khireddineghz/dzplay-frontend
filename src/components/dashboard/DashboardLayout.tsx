import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 h-screen flex overflow-hidden font-display">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 lg:ml-64 bg-background-light dark:bg-background-dark h-full relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-overlay"
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCayGQRLQ-QABR-fd1toRarSLcamLYXp44v5d0zQOt-lT0mWqruwT0rzcEbaTrhhL6RuTqrvLNa9n4MVybswevGWZW46jKwhOCLBnYo07dBao_H6yHbdyQqTSEKUsyv5Q_gsGYEDqaD65fOmOZMeyv8VILpglc2-1XC2DwjQ81p4z2ZOnohe4oq0cDXt5c_kfbfSCVKJ9Hb1AX6vbhIsG2cmBWE9Dn5qt71qJ4EAxp9Kojdii99-PMx-yLcUjHA-Rg07BmJMH1qT2U')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        {/* Header */}
        <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between">
          <button className="lg:hidden text-slate-500 hover:text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="hidden md:flex flex-1 max-w-lg relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined">search</span>
            <input 
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 text-slate-800 dark:text-white placeholder:text-slate-400 transition-all outline-none" 
              placeholder="Find stadium, team or opponent..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-3 ml-4">
            <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
              <span className="material-symbols-outlined">chat</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full animate-pulse"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80"
              onClick={() => setIsProfileOpen(true)}
            >
              <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGfX16r3MahUlEADRbTU_0GaknDmaCDEKUeqrKEr5ivkaTQs42yrrAdDJGPdpAo_vNyQkTW-qg_6tZMAHVfWqtoCcotXyDK45kxxbVIm4MnGyFQaftZW7FestJEL-Bas5-FK9lz7Gma-hyu0cQ2TWUmDkXOL0RV0BqNLjJxGF4fGvd3PspITTR6lawHuChmi_5v5A3ZaqqisAJhKAxyHPr1Yxmm6jFK6aIy7M7hf1SoFCLsisLF-sj60UpsL6VhHDrywVcneI0bRA"/>
              </div>
            </div>
          </div>
        </header>

        {/* User Profile Mini Sidebar */}
        {isProfileOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsProfileOpen(false)}
            ></div>
            <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-background-dark border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 p-6 flex flex-col transform transition-transform duration-300 ease-in-out animate-in slide-in-from-right">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-dz-navy dark:text-white">Profile</h3>
                <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex flex-col items-center mb-8">
                <div className="size-24 rounded-full bg-slate-200 overflow-hidden mb-4 border-4 border-white dark:border-slate-700 shadow-lg">
                  <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGfX16r3MahUlEADRbTU_0GaknDmaCDEKUeqrKEr5ivkaTQs42yrrAdDJGPdpAo_vNyQkTW-qg_6tZMAHVfWqtoCcotXyDK45kxxbVIm4MnGyFQaftZW7FestJEL-Bas5-FK9lz7Gma-hyu0cQ2TWUmDkXOL0RV0BqNLjJxGF4fGvd3PspITTR6lawHuChmi_5v5A3ZaqqisAJhKAxyHPr1Yxmm6jFK6aIy7M7hf1SoFCLsisLF-sj60UpsL6VhHDrywVcneI0bRA"/>
                </div>
                <h2 className="text-xl font-bold text-dz-navy dark:text-white">Riyad Mahrez</h2>
                <p className="text-slate-500 dark:text-slate-400">Pro Player</p>
              </div>

              <div className="flex-1 space-y-2">
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 font-medium">
                  <span className="material-symbols-outlined text-slate-400">person</span>
                  View Profile
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 font-medium">
                  <span className="material-symbols-outlined text-slate-400">settings</span>
                  Account Settings
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 font-medium">
                  <span className="material-symbols-outlined text-slate-400">notifications</span>
                  Notifications
                </Link>
                <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 font-medium">
                  <span className="material-symbols-outlined text-slate-400">help</span>
                  Help Center
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <Link to="/login" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-500 font-medium transition-colors">
                  <span className="material-symbols-outlined">logout</span>
                  Sign Out
                </Link>
              </div>
            </div>
          </>
        )}

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 pb-20 relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}
