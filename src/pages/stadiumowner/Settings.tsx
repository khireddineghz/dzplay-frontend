import React, { useState, useEffect } from 'react';
import { StadiumOwnerSidebar } from '../../components/dashboard/StadiumOwnerSidebar';
import authService from '../../services/auth.service';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'account' | 'notifications' | 'security'>('profile');
  
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  
  // Load user data from Supabase
  useEffect(() => {
    const loadUserData = async () => {
      const user = await authService.getCurrentUser();
      if (user) {
        setFullName(user.user_metadata?.full_name || '');
        setEmail(user.email || '');
        setPhone(user.user_metadata?.phone_number || '');
        // Company and address not in user_metadata type, leave empty for now
      }
    };
    loadUserData();
  }, []);
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [bookingAlerts, setBookingAlerts] = useState(true);
  const [paymentAlerts, setPaymentAlerts] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

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
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Settings</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage your account preferences</p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="mx-auto max-w-5xl flex flex-col gap-6">
            {/* Tabs */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-2 shadow-sm">
              <div className="flex gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'profile'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">person</span>
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('account')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'account'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
                  Account
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'notifications'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeTab === 'security'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                  Security
                </button>
              </div>
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Profile Information</h3>
                
                <div className="flex items-center gap-6 mb-8">
                  <div
                    className="h-24 w-24 rounded-full bg-cover bg-center border-4 border-slate-200 dark:border-slate-700"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdI4yUC0x0rJTF5vcIGkNURTa_CnuEXyvJwggSVoXcBJhVWIcfkyGMhCj41GoG7vwee0kx8tDDZtjZxi3sOTEVvsEgMVlFrYLARJ7OWft_nLan4AZH1_dv__tE9vIS8YZvngf4X3eOwhdTXkp5mwhJHZSYEx684VEywZvJ46q08_XWMFQXeCUARJ6R93-IFBE7gE87odrws7YIEa8fug36iYWijAxO6u9yvsRxzZF_8ry6PPKxIHsyb7cKTYQWSRX79ApsIpnAwSc")`,
                    }}
                  />
                  <div>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all mb-2">
                      Change Photo
                    </button>
                    <p className="text-xs text-slate-500 dark:text-slate-400">JPG, PNG or GIF. Max size 2MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-8">
                  <button className="px-6 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
                    Cancel
                  </button>
                  <button className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Account Tab */}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Payment Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <span className="material-symbols-outlined text-primary">credit_card</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">•••• •••• •••• 4242</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="text-sm font-semibold text-primary hover:text-primary/80">Edit</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Bank Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                          <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">account_balance</span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">BNP Paribas</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">••••••••1234</p>
                        </div>
                      </div>
                      <button className="text-sm font-semibold text-primary hover:text-primary/80">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Notification Preferences</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Email Notifications</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive notifications via email</p>
                    </div>
                    <button
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        emailNotifications ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">SMS Notifications</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive notifications via SMS</p>
                    </div>
                    <button
                      onClick={() => setSmsNotifications(!smsNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        smsNotifications ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          smsNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Booking Alerts</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Get notified about new bookings</p>
                    </div>
                    <button
                      onClick={() => setBookingAlerts(!bookingAlerts)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        bookingAlerts ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          bookingAlerts ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Payment Alerts</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Get notified about payments</p>
                    </div>
                    <button
                      onClick={() => setPaymentAlerts(!paymentAlerts)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        paymentAlerts ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          paymentAlerts ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Marketing Emails</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive promotional content</p>
                    </div>
                    <button
                      onClick={() => setMarketingEmails(!marketingEmails)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        marketingEmails ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          marketingEmails ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      />
                    </div>
                    <button className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                      Update Password
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    Add an extra layer of security to your account
                  </p>
                  <button className="px-6 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
                    Enable 2FA
                  </button>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800 p-6">
                  <h3 className="text-lg font-bold text-red-900 dark:text-red-400 mb-2">Danger Zone</h3>
                  <p className="text-sm text-red-600 dark:text-red-400 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
