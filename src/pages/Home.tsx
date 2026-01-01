import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#141118] dark:text-white overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="DZPlay" className="h-24 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" to="/stadiums/book">Stadiums</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary" to="/login">Login</Link>
            <Link to="/signup" className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
              Join Now
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper with Pattern Background */}
      <div className="bg-subtle-pattern">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 text-center lg:text-left z-10 relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Live in 48 Wilayas</span>
                </div>
                <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl mb-6">
                  The Heart of <br />
                  <span className="text-gradient">Algerian Football.</span>
                </h1>
                <p className="mx-auto lg:mx-0 max-w-lg text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Join the largest community of football enthusiasts in Algeria. Book your next match instantly, find worthy rivals, and manage your team—all in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/stadiums/book" className="flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-dark hover:scale-105 transition-all duration-200">
                    <span className="material-symbols-outlined mr-2">calendar_month</span>
                    Book a Pitch
                  </Link>
                  <Link to="/signup" className="flex h-12 items-center justify-center rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-8 text-base font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    List Your Stadium
                  </Link>
                </div>
                {/* Mini Trust */}
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-2">
                    <img alt="User Avatar 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-surface-dark object-cover" data-alt="Portrait of a smiling young man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNT37PsV4lx4DGcLWNOBZFgxvOMng5dN1Pef5k1GGCjwGiZwZpdFHID3dj4A9oiA14IM6zU1bxlUp3Kshewof2FuXSbzpkQ3X8CKxao4nupobgJmEUnBDYFCxw8mvXDWiw8Qf4H6qrBGIiiVTZUA3VdaxBECUfHH2tj0xyVXxVoMoJsFkMuVOeVSbKJ4BwbOk8dFrRAKO_YdijH3Fw-VKoQIhTIpwRBCgEzjuzlqJdZGI57_GuaucYNfhiPDRHkZVn9jlC2NOl8JA" />
                    <img alt="User Avatar 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-surface-dark object-cover" data-alt="Portrait of a man with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBObL5HQrsh5B1zHDnwa9Qx9APjnTJMF_u7EgjaiTirPdNmtGtZIvJsPjKISkfbYAcxrHlaM8_YpDKkGV9zj-Q7nWm5-aQYRABwcIG4iybHUcr3QqD91dWJRxkJaso2YdMZ70h8kbDxgKfoH1sHtwE4JwozUF8HbZEWLZPMm0rKCN-Mj4u5GR--EQDmBGa5Ei3q_m6FvchDnr3VeOrMPuUwDyws9EyeaxZniSMBvnj-BnBw-aFETxGGSenLqTArn6ftgg4V53nVXaA" />
                    <img alt="User Avatar 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-surface-dark object-cover" data-alt="Portrait of a woman smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3eyyF28mRBcxxLjBPHptf8XRwwNwPfiIY4TXDnhVtE2FSHawSA-iZ2D9URBmKTo61SlymKSoY51eRmBa1JXe2hiTfN1G8vz4ZkXxv8n2IoGIMXWyvPKhims_vqggQCImKpH5DjVIEpvA35sjoucm1C9XllhA3tsPk_ibUvvI93pffCeUV9SMKbVLK-pCMYgrIuMRIm6Nmei4ZRGDcBOYpoMfjFj9Yi2fzPt6l_fwIxt7q15FZCZL5dFjQASZd99ztTVwi38sdO_k" />
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Trusted by <span className="text-gray-900 dark:text-white font-bold">10,000+</span> players</p>
                </div>
              </div>
              {/* Right Visual */}
              <div className="hidden lg:block lg:col-span-6 relative mt-12 lg:mt-0">
                {/* Main Image Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="bg-gray-200 aspect-[4/3] w-full bg-cover bg-center" data-alt="Group of friends playing football at night under stadium lights" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUju-DyNNCmzKqya9UX1vjBCz7uOMDwWSgAlOhl2J5itJpA58gRaEPGn3WZEb-7KpQt7M8Yd4X7WbWRAtZT4_YvPNpo3G0BKS6lqfS3V-90Fp7n-iK7iyiAwuowfOJN1kc51FDyMYVzylThE4-62vBAkQ7DG5WoEbdu0sgxafGRq0fr1cef-I8ROJfY5md4KnTB1sGwNBeWCBaBsCI6USaOQKMQ6_XMPddxbYpaV-HKcVbpsvOnzqWwZ7UnlUpd_Wlcm7eUKQpOZs')" }}></div>
                  <div className="absolute bottom-6 left-6 z-20 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-300 mb-1">Featured Match</p>
                    <h3 className="text-xl font-bold">5 de Juillet Stadium</h3>
                    <p className="text-sm opacity-90 flex items-center mt-1"><span className="material-symbols-outlined text-base mr-1">location_on</span> Algiers, Algeria</p>
                  </div>
                </div>
                {/* Floating UI Elements */}
                <div className="absolute -top-6 -right-6 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hero-floating-card z-30 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                      <span className="material-symbols-outlined text-xl">check_circle</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Booking Status</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Confirmed</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 hero-floating-card z-30" style={{ animationDelay: "1.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">New Rival Found!</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">FC Casbah wants to play.</p>
                    </div>
                    <button className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded">Accept</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <div className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100 dark:divide-gray-800">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-gray-900 dark:text-white mb-1">500+</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Stadiums</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-gray-900 dark:text-white mb-1">10k+</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Active Players</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-gray-900 dark:text-white mb-1">25k+</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Matches Played</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-gray-900 dark:text-white mb-1">48</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Wilayas</span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <section className="py-20 bg-background-light dark:bg-background-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">Simplify Your Football Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">From finding the perfect pitch to kicking off, we've streamlined every step so you can focus on the game.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line for Desktop */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary">person_add</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Register Account</h3>
                <p className="text-gray-600 dark:text-gray-400">Create your profile in seconds. Build your team or join as a solo player.</p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary">map</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Find &amp; Book</h3>
                <p className="text-gray-600 dark:text-gray-400">Search top-rated stadiums nearby, check availability, and book instantly.</p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-primary">sports_soccer</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. Show Up &amp; Play</h3>
                <p className="text-gray-600 dark:text-gray-400">Head to the pitch, show your booking QR code, and enjoy the game.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block: Players */}
        <section className="py-20 bg-white dark:bg-surface-dark overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30 transform -translate-x-10 translate-y-10"></div>
                  <img alt="Players playing football" className="relative rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 w-full" data-alt="Action shot of football players on a green pitch running with the ball" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR6lZbuSmn4bxWtvn3T60V9iRXIyzqNBJkgvlIU_EEp11NVtxAoKR0M0iLnKw4tKbMDtVCPzBH73v96h1ZC-jyIpQyutnnLuzHJvdQIS_T81G-lh3JYS0N3na0t0Zdz3OzJeqMswTCmKhnkvil-upBL98Ym6kWDuXc1CLD8uEKZwA7VEgL3OOav8k7orkepQsKnfsJakbLcV3O7jQzhTZqFA6ihWgrUhEpXBgG_z0_NWT0703x2GYyQiV4ANrUmrt6KaroKONq_TU" />
                  {/* UI Overlay Mockup */}
                  <div className="absolute top-8 left-8 bg-white dark:bg-[#191022] p-4 rounded-lg shadow-lg max-w-xs animate-[pulse_4s_infinite]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-500">location_on</span>
                      <div>
                        <p className="text-xs font-bold text-gray-400">Near You</p>
                        <p className="text-sm font-bold">12 Stadiums Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 mb-6">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase">For Players</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">No more endless phone calls. Just play.</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Finding a pitch used to mean calling 10 different numbers. With DZPlay, see real-time availability, filter by price and surface type, and secure your spot in seconds.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1">check</span>
                    <span className="text-gray-700 dark:text-gray-300">Real-time schedule visibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1">check</span>
                    <span className="text-gray-700 dark:text-gray-300">Find opponents matchmaking system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 mt-1">check</span>
                    <span className="text-gray-700 dark:text-gray-300">Player profiles and statistics</span>
                  </li>
                </ul>
                <a className="inline-flex items-center font-bold text-primary hover:text-primary-dark" href="#">
                  Download the App <span className="material-symbols-outlined ml-2">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Block: Owners */}
        <section className="py-20 bg-background-light dark:bg-[#1e1429]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 mb-6">
                  <span className="text-xs font-bold text-primary uppercase">For Stadium Owners</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">Maximize your pitch occupancy.</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  Stop using paper notebooks. Switch to a digital management system that fills your empty slots automatically and handles payments securely.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">trending_up</span>
                    <h4 className="font-bold text-gray-900 dark:text-white">Increase Revenue</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Fill off-peak hours with dynamic pricing.</p>
                  </div>
                  <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">edit_calendar</span>
                    <h4 className="font-bold text-gray-900 dark:text-white">Auto-Booking</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Let players book 24/7 without calls.</p>
                  </div>
                </div>
                <button className="flex h-11 items-center justify-center rounded-lg bg-gray-900 dark:bg-white px-6 text-sm font-bold text-white dark:text-gray-900 hover:opacity-90 transition-opacity">
                  Partner With Us
                </button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                  {/* Dashboard Mockup */}
                  <div className="bg-white dark:bg-surface-dark rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative z-10">
                    <div className="bg-gray-50 dark:bg-black/20 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs font-bold text-gray-400">DZPlay Dashboard</div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-end mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Total Bookings (This Week)</p>
                          <p className="text-3xl font-black text-gray-900 dark:text-white">124</p>
                        </div>
                        <div className="text-green-500 text-sm font-bold flex items-center">
                          <span className="material-symbols-outlined text-sm">arrow_upward</span> 12%
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[70%]"></div>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[45%] opacity-60"></div>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[90%] opacity-80"></div>
                        </div>
                      </div>
                      <div className="mt-6 flex gap-3">
                        <div className="flex-1 bg-primary/5 rounded p-3">
                          <p className="text-xs text-primary font-bold">Today: 18:00</p>
                          <p className="text-xs text-gray-500">Reserved by Amine</p>
                        </div>
                        <div className="flex-1 bg-green-50 dark:bg-green-900/10 rounded p-3">
                          <p className="text-xs text-green-600 font-bold">Today: 20:00</p>
                          <p className="text-xs text-gray-500">Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img alt="Hand holding a smartphone" className="absolute -bottom-10 -right-10 w-40 h-40 object-cover rounded-xl border-4 border-white dark:border-gray-800 shadow-xl z-20 hidden sm:block" data-alt="Closeup of smartphone showing stats" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Tqn92_lGHobmnMHr7kGxTFlwE5_-X8IJRgM9LsqJhEAsdqvMs1i9_q-UEGU6wazA_MGDIUd607NQYgn7ao2OIrcB-v2PPVG6tAit7xvVTmfm5oEu5zJYX1olS26WC9D110TFw44jojV4HriHj5ajB2Dx178Xxr88nXnz2Qs8N_KfqBS9Yqjo3wXaB8dGj1JFrNUuaL3hka98NipGz7358zdeGQe273bzS_xaFFC74VwnEGdkAEODvCRQnR-NWg5bj8ZtHxfrct0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stadiums */}
        <section className="py-20 bg-white dark:bg-surface-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Trending Pitches</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Booked frequently this week in Algiers</p>
              </div>
              <Link to="/stadiums/book" className="hidden sm:flex items-center text-primary font-bold hover:underline">
                View All <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img alt="Stadium 1" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Indoor soccer field with artificial turf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVnHfWjaq8Q27KJU-WsneGo8PGh_ry0qarlBdwXtPC6Ewm4Rqrcu3AFz3ftqsYCpRyRTkZi4noTwhLxo9owb_Xv10MIB4pdpjb0IqU4Iw64uulSHilSTeuRl6O-eyp_AYpXBNh12O_nM0KX_JJNpmh_wsLTjNwMdEaUlJnULEy31hDu4Cfzpfy9N25X1PGn_gnhMGwz5UzbVHLsmR69sKJjCNWWnOaIsvWQj3em51GSn7czIGtWI2s4V8ikZfa_iLDxl-GwcqEQNo" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Arena 5 - Kouba</h3>
                    <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs font-bold text-yellow-700 dark:text-yellow-400">
                      <span className="material-symbols-outlined text-xs mr-1">star</span> 4.8
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-4">
                    <span className="material-symbols-outlined text-sm mr-1">location_on</span> Kouba, Algiers
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span className="text-sm font-bold text-primary">3000 DA / Hour</span>
                    <button className="rounded-lg bg-gray-900 dark:bg-white px-3 py-1.5 text-xs font-bold text-white dark:text-gray-900 hover:opacity-80">Book</button>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img alt="Stadium 2" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Outdoor soccer field during sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDugvCHuEOchoqbEGcNBdpq-PJ4lJVzOnb3oslAy1hfcrH5pfbadOyz0sKVdaSQ-HoROgYmK-vsIs_7KW5qvVaumnvgV4IDqflAdV3Rq5vEUGpZqPfhyNVBQ4BVQzOMjOl15M_E8DM7TbYwwFsmt9UdhWAErkdtNulNE3uVxyTye49oAdj-rKKPdARYXGqe-NgpBiTaUCmCGOeF3QQf8bpI6sAdGYJ-_paN_IiINnHUYl_MN1vFE8qk8psufepaDTix3yaZhTxzspo" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">El Biar Complex</h3>
                    <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs font-bold text-yellow-700 dark:text-yellow-400">
                      <span className="material-symbols-outlined text-xs mr-1">star</span> 4.5
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-4">
                    <span className="material-symbols-outlined text-sm mr-1">location_on</span> El Biar, Algiers
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span className="text-sm font-bold text-primary">4000 DA / Hour</span>
                    <button className="rounded-lg bg-gray-900 dark:bg-white px-3 py-1.5 text-xs font-bold text-white dark:text-gray-900 hover:opacity-80">Book</button>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img alt="Stadium 3" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="High quality green turf texture close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaMA6oikghv_sQNpJwSD7u7DFUMVtULxeP9PqnZjYfkG0dDNdIuDZyJ04hqpZT84DBqjB9LPx-5VpYO99mQZqw0HW--rAjQu8H_ZQgmPZ46dMZmnNnxOu_qJ4hhuIRNRapPmjZt6mfwWTv3K0ZGmpU6gbczh9n_xRLmnj6taH_iy08yjzBUvLzjirKUSe0-pnY9wyBnL0JD_Qw8v64GZDEFu0oC8fWGo2rca9DyDRfaafMZik7QGJbU9VeOpqloOIsdlZImBHlsI0" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Green Field Hydra</h3>
                    <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-xs font-bold text-yellow-700 dark:text-yellow-400">
                      <span className="material-symbols-outlined text-xs mr-1">star</span> 4.9
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-4">
                    <span className="material-symbols-outlined text-sm mr-1">location_on</span> Hydra, Algiers
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span className="text-sm font-bold text-primary">5000 DA / Hour</span>
                    <button className="rounded-lg bg-gray-900 dark:bg-white px-3 py-1.5 text-xs font-bold text-white dark:text-gray-900 hover:opacity-80">Book</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link to="/stadiums/book" className="inline-flex items-center text-primary font-bold hover:underline">
                View All <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl mb-6">Ready to get on the pitch?</h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">Join thousands of players and stadium owners in the fastest growing football community in Algeria.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="flex h-12 items-center justify-center rounded-xl bg-white px-8 text-base font-bold text-primary shadow-lg hover:bg-gray-100 transition-colors">
                Create Free Account
              </Link>
              <Link to="/signup" className="flex h-12 items-center justify-center rounded-xl bg-transparent border-2 border-white px-8 text-base font-bold text-white hover:bg-white/10 transition-colors">
                List Your Stadium
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/logo.png" alt="DZPlay" className="h-24 w-auto object-contain" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Making football accessible to everyone in Algeria. Book, Play, Repeat.</p>
                <div className="flex gap-4">
                  {/* Social Icons placeholders */}
                  <a className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
                  <a className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Platform</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a className="hover:text-primary" href="#">Find Stadiums</a></li>
                  <li><a className="hover:text-primary" href="#">Community</a></li>
                  <li><a className="hover:text-primary" href="#">Tournaments</a></li>
                  <li><a className="hover:text-primary" href="#">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a className="hover:text-primary" href="#">Help Center</a></li>
                  <li><a className="hover:text-primary" href="#">For Stadium Owners</a></li>
                  <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                  <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 DZPlay. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
