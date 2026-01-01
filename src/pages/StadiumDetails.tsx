import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import authService from '../services/auth.service';
import { UserAvatar } from '../components/shared/UserAvatar';
import { StadiumMap } from '../components/shared/StadiumMap';

const StadiumDetails = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
  }, []);

  return (
    <div className="font-['Lexend'] text-[#1e293b] dark:text-white transition-colors duration-200 min-h-screen flex flex-col relative bg-background-light dark:bg-background-dark">

      {/* Navbar - Same as Home */}
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
            {isAuthenticated ? (
              <UserAvatar />
            ) : (
              <>
                <Link className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary" to="/login">Login</Link>
                <Link to="/signup" className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
                  Join Now
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="layout-container flex flex-col min-h-screen">
        <div className="px-4 md:px-10 lg:px-20 py-5 mx-auto w-full max-w-7xl">
          {/* Back to Stadiums Button */}
          <div className="py-4">
            <Link to="/stadiums/book" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="text-sm font-medium">Back to Stadiums</span>
            </Link>
          </div>

          <div className="flex flex-wrap justify-between items-start gap-4 py-4 bg-white dark:bg-[#312e81] rounded-xl p-6 shadow-sm border border-purple-100 dark:border-indigo-900 mb-6">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-[#1e293b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">El Bahia Stadium</h1>
              <div className="flex items-center gap-2 text-[#64748b]">
                <span className="material-symbols-outlined text-[20px] fill text-[#8b5cf6]">location_on</span>
                <p className="text-base font-normal leading-normal">123 Rue de la Liberté, Oran, Algeria</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex text-yellow-400">
                  <span className="material-symbols-outlined text-[18px] fill">star</span>
                  <span className="material-symbols-outlined text-[18px] fill">star</span>
                  <span className="material-symbols-outlined text-[18px] fill">star</span>
                  <span className="material-symbols-outlined text-[18px] fill">star</span>
                  <span className="material-symbols-outlined text-[18px] fill">star_half</span>
                </div>
                <span className="text-[#1e293b] dark:text-gray-300 font-bold text-sm">4.8</span>
                <span className="text-[#64748b] text-sm">(120 reviews)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button aria-label="Share" className="flex min-w-[40px] h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-purple-100 dark:border-indigo-800 bg-white dark:bg-indigo-950 text-[#1e293b] dark:text-white hover:bg-purple-50 dark:hover:bg-indigo-900 transition-colors">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-indigo-950 border border-purple-100 dark:border-indigo-800 text-[#1e293b] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-purple-50 dark:hover:bg-indigo-900 transition-colors">
                <span className="material-symbols-outlined text-[20px] text-red-500 fill">favorite</span>
                <span className="truncate">Favorite</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[300px] md:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden mb-8 shadow-md">
            <div className="col-span-1 md:col-span-2 row-span-2 relative group cursor-pointer">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Wide shot of a professional green football field under bright stadium lights" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_ut-V0iRHhFV6K3YUqGBBiQV_u_wuESKlvtEZy-3QjyXAzpAAnLs6O5QGGwk1HeHhg6hBQ4zsXBrnqFhrygsMTsgN_NFQDQgXOtfjpfq0n57DpG86tfnbhf5puQ6Dm7MZAvSOWqsjDqLHY6RqCAQ4lFb530C01DUN7kyItFApvcSaOHiEek4H29ixhL589bM2h6uaInFc20t9aXpBKpDOjkHhdGcPaY2YIiF9j8l8vg-zfbUWuWXXLhbOeXD68WpFgMoSOt4TKrE")' }}></div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Closeup of artificial grass turf texture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUk34azHB1yf4TEFtyHu1vIyl260Sjw4omNDlarp55ERQfvDaDs7ZTm7Keuo2wDcO47U2-kRldLkZ2CObdsUNS2SQa4mKEXYuEa-n1mzPWxXwYWQvxO8TPttqBmsD4PziNG4j9xPdVj7hhWN-bOdGIoMfZd9sZdy3NEE03NvZQdB9wBMnASqxKr0bhgVBpuPYGGW8bJOI29gm_SChZEfCyVbBoeZY3eoM6-1YdhSHC67H1MOf93mwmFR_hRLb63lHs_hlWd32JPz8")' }}></div>
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="View of the stadium seating area" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj6d732HJaRUKUXYlxmH8icFy2BIj4IxTaCRORcoP9SdadwR-1j2xpEpztdQqOuMLBZM0CfJlX1ZJfEKhQe2FwrzbhY9EmnZLaxvDaFPjUarPn4LO8c_hov8NFm1ERIHY0j112MfKjpM-sTBjWIHp48a7Xs3UkFd9kXuP_zJm1E0fZkgezDEOikTtctQooBPQW_8mQUjeAJSRgL97BC8-CzXeL_oXYq0LJaXI3NsEW3B4K3IkN_tsz3X-2tbGk83oH9_mAMrqtnqI")' }}></div>
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Football on the penalty spot ready for a kick" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoYIWGoiLuy13rmQe-KHoq92MCimDFZzSedi4AGRjNoMaQjNzTNY3IbIpYe0pq81HDu7R4wAXCCSbeOv5R5A3uWS5hkGtJWWW4qvnYlKsbFitwOcCIuhZYtapGqk7d6V8LbiwH68BdQldeSp0q00cZgJjc4kOkHfauDeJ4PUXAjUzUEBrEn6YIFVZr49qrZw7hcxpgNDhP5w_eBuxPVEx661S0SCqrs2T9UGSxnM6Szt5-VT8TPlOQECVQ_6sQ9QU7C-u3dyHz54g")' }}></div>
            </div>
            <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
              <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" data-alt="Evening view of the stadium with players warming up" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAq43nYnyBGCvlkMVOYb8VMW3FvAuB_u3eXcp0Y6dpHlPTf40s4POgx6EcGJHRT3yKcm2hM2G6Wi8yhqDHFsTWnoIkOgXeLKZIuImt38zfA4J7vKg7pHKA-WZEitwbdk0-axSr0zbt1qj84n5pXeXGQQqjNHnKcciw--enrmAKQUn_zIJev4O3i1EitQXv9jYJje69WvYVKj6-5HN3SlEivQShdyP_J1S2UF9t6wf6qOPvXRWxhr7go_objgwP3PDYHT98ggh83fRw")' }}></div>
              <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#1e293b] text-xs font-bold px-3 py-2 rounded-lg shadow-lg flex items-center gap-1 hover:bg-white transition-colors">
                <span className="material-symbols-outlined text-[16px]">grid_view</span>
                Show all photos
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8 bg-white dark:bg-[#312e81] p-6 md:p-8 rounded-2xl shadow-sm border border-purple-100 dark:border-indigo-900">
              <section>
                <h2 className="text-2xl font-bold text-[#1e293b] dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#8b5cf6] rounded-full"></span>
                  About the Stadium
                </h2>
                <div className="prose dark:prose-invert text-[#64748b] dark:text-gray-300 leading-relaxed text-base">
                  <p className="mb-4">
                    Experience the thrill of the game at El Bahia Stadium, one of Oran's premier 5-a-side football facilities. Located conveniently in the city center, our pitch features state-of-the-art FIFA Quality Pro artificial turf, ensuring a consistent and safe playing surface in all weather conditions.
                  </p>
                  <p>
                    Whether you're organizing a competitive league match or a friendly kick-about with colleagues, El Bahia Stadium offers professional-grade floodlights for evening games, clean changing rooms, and a dedicated spectator area. Join the community of passionate footballers today!
                  </p>
                </div>
              </section>
              <hr className="border-purple-100 dark:border-indigo-900" />
              <section>
                <h2 className="text-2xl font-bold text-[#1e293b] dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#8b5cf6] rounded-full"></span>
                  What this place offers
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">grass</span>
                    </div>
                    <span className="text-base font-medium">Artificial Turf</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">light_mode</span>
                    </div>
                    <span className="text-base font-medium">Floodlights</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">shower</span>
                    </div>
                    <span className="text-base font-medium">Showers</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">directions_car</span>
                    </div>
                    <span className="text-base font-medium">Free Parking</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">checkroom</span>
                    </div>
                    <span className="text-base font-medium">Changing Rooms</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">wifi</span>
                    </div>
                    <span className="text-base font-medium">Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">local_cafe</span>
                    </div>
                    <span className="text-base font-medium">Cafeteria</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1e293b] dark:text-gray-200">
                    <div className="p-2 bg-purple-50 dark:bg-indigo-900/50 rounded-lg">
                      <span className="material-symbols-outlined text-[#8b5cf6] text-[24px]">medical_services</span>
                    </div>
                    <span className="text-base font-medium">First Aid</span>
                  </div>
                </div>
              </section>
              <hr className="border-purple-100 dark:border-indigo-900" />
              <section>
                <h2 className="text-2xl font-bold text-[#1e293b] dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#8b5cf6] rounded-full"></span>
                  Where you'll be
                </h2>
                <p className="text-[#64748b] dark:text-gray-400 mb-4">123 Rue de la Liberté, Oran, Algeria</p>
                <StadiumMap 
                  latitude={35.6976}
                  longitude={-0.6337}
                  stadiumName="El Bahia Stadium"
                  address="123 Rue de la Liberté, Oran, Algeria"
                />
              </section>
              <hr className="border-purple-100 dark:border-indigo-900" />
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-[28px] fill text-yellow-500">star</span>
                  <h2 className="text-2xl font-bold text-[#1e293b] dark:text-white">4.8 · 120 Reviews</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="grid w-full grid-cols-[20px_1fr_40px] items-center gap-y-2">
                    <p className="text-[#1e293b] dark:text-white text-sm font-medium">5</p>
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-purple-100 dark:bg-indigo-900"><div className="rounded-full bg-[#8b5cf6]" style={{ width: '75%' }}></div></div>
                    <p className="text-[#64748b] dark:text-gray-400 text-sm font-medium text-right">75%</p>
                    <p className="text-[#1e293b] dark:text-white text-sm font-medium">4</p>
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-purple-100 dark:bg-indigo-900"><div className="rounded-full bg-[#8b5cf6]" style={{ width: '15%' }}></div></div>
                    <p className="text-[#64748b] dark:text-gray-400 text-sm font-medium text-right">15%</p>
                    <p className="text-[#1e293b] dark:text-white text-sm font-medium">3</p>
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-purple-100 dark:bg-indigo-900"><div className="rounded-full bg-[#8b5cf6]" style={{ width: '5%' }}></div></div>
                    <p className="text-[#64748b] dark:text-gray-400 text-sm font-medium text-right">5%</p>
                    <p className="text-[#1e293b] dark:text-white text-sm font-medium">2</p>
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-purple-100 dark:bg-indigo-900"><div className="rounded-full bg-[#8b5cf6]" style={{ width: '3%' }}></div></div>
                    <p className="text-[#64748b] dark:text-gray-400 text-sm font-medium text-right">3%</p>
                    <p className="text-[#1e293b] dark:text-white text-sm font-medium">1</p>
                    <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-purple-100 dark:bg-indigo-900"><div className="rounded-full bg-[#8b5cf6]" style={{ width: '2%' }}></div></div>
                    <p className="text-[#64748b] dark:text-gray-400 text-sm font-medium text-right">2%</p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="space-y-3 bg-purple-50/50 dark:bg-indigo-900/20 p-4 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-white dark:ring-indigo-800" data-alt="Avatar of reviewer Ahmed K." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw1iPNw7K06nZJyFu9d60-I44ojedUZBhkP-OS5u4iZ9AqQTacCGlqMxMCtTrLRrL0VSGGemS1tTHzi303l5elWsJuPVsQPbCPjKyP4rvmMRcJ4ebJBYUSQmCYEd5oRXYqD65OB1lK2Cw-m-HroAwW6Hthba3N1oeJYI3fl54NvD5syrDWpovrfeQXosDYMj6pNWJU_eW4vSGL-BlT1S5IeOdsQGL7fidq2S5cywXkeayoW8_5cJLhyQFrpIrTi-bmCpF5hANSMTA")' }}></div>
                        <div>
                          <p className="font-bold text-[#1e293b] dark:text-white text-sm">Ahmed K.</p>
                          <p className="text-xs text-[#64748b]">October 2023</p>
                        </div>
                      </div>
                      <p className="text-[#1e293b] dark:text-gray-300 text-sm leading-relaxed italic">
                        "Great pitch! The turf is really good quality and the floodlights are perfect for night games. Changing rooms were clean too."
                      </p>
                    </div>
                    <div className="space-y-3 bg-purple-50/50 dark:bg-indigo-900/20 p-4 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 bg-cover bg-center ring-2 ring-white dark:ring-indigo-800" data-alt="Avatar of reviewer Sarah B." style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiGZX4GyC2y94zWsxtfWaUq5Nz6fZKVwOaMr0P-y-U9vh4nQhcSKWemlMiC2o7-cvD0DS4aTYu5PN7drBryCUxoxMIKeLgb9cIma0CPBS3MkAjzTTriYw1KIMd30RNSqUBz552FC3BgAJTI27jRT2qLIiuUfcRUVUKu73hRw54SmuIzMsTnnNmcqOr0oAS9bfCbPiiOmABpCQ0j9j1RAzhZi7lTKZ9kQbC5GqotYk5ED9UBoNWnW8TdvpNesYGhfZChu7fBnQyYSU")' }}></div>
                        <div>
                          <p className="font-bold text-[#1e293b] dark:text-white text-sm">Sarah B.</p>
                          <p className="text-xs text-[#64748b]">September 2023</p>
                        </div>
                      </div>
                      <p className="text-[#1e293b] dark:text-gray-300 text-sm leading-relaxed italic">
                        "Easy booking process. The location is very central. Only downside is parking can be tight during peak hours."
                      </p>
                    </div>
                  </div>
                </div>
                <button className="mt-6 px-6 py-2 border border-purple-200 dark:border-indigo-700 rounded-lg text-[#8b5cf6] dark:text-white font-semibold text-sm hover:bg-purple-50 dark:hover:bg-indigo-900 transition-colors">
                  Show all 120 reviews
                </button>
              </section>
            </div>

            <div className="lg:col-span-1 relative">
              <div className="sticky top-24 rounded-2xl border border-purple-100 dark:border-indigo-800 shadow-xl bg-white dark:bg-[#312e81] p-6 flex flex-col gap-6">
                <div className="absolute -top-3 -right-3">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">POPULAR</span>
                </div>
                <div className="flex items-end justify-between border-b border-gray-100 dark:border-indigo-900 pb-4">
                  <div>
                    <span className="text-3xl font-bold text-[#8b5cf6]">3000 DZD</span>
                    <span className="text-[#64748b] text-sm"> / hour</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Available Now</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Date</label>
                  <div className="flex items-center justify-between bg-purple-50 dark:bg-indigo-900/50 rounded-lg p-2 border border-purple-100 dark:border-indigo-800">
                    <button className="p-1 hover:bg-white dark:hover:bg-indigo-800 rounded text-[#64748b] transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                    </button>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-[#1e293b] dark:text-white">Fri, Oct 24</span>
                      <span className="text-[10px] text-[#8b5cf6] font-medium">Today</span>
                    </div>
                    <button className="p-1 hover:bg-white dark:hover:bg-indigo-800 rounded text-[#1e293b] dark:text-white transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Select Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="py-2 px-1 text-xs font-medium rounded border border-transparent bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed" disabled>16:00</button>
                    <button className="py-2 px-1 text-xs font-medium rounded border border-transparent bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed" disabled>17:00</button>
                    <button className="py-2 px-1 text-xs font-bold rounded bg-[#8b5cf6] text-white shadow-md shadow-purple-500/30 ring-2 ring-[#8b5cf6] ring-offset-1 ring-offset-white dark:ring-offset-gray-900">18:00</button>
                    <button className="py-2 px-1 text-xs font-medium rounded border border-purple-100 dark:border-indigo-800 hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-colors text-[#1e293b] dark:text-gray-300 bg-white dark:bg-transparent">19:00</button>
                    <button className="py-2 px-1 text-xs font-medium rounded border border-purple-100 dark:border-indigo-800 hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-colors text-[#1e293b] dark:text-gray-300 bg-white dark:bg-transparent">20:00</button>
                    <button className="py-2 px-1 text-xs font-medium rounded border border-purple-100 dark:border-indigo-800 hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-colors text-[#1e293b] dark:text-gray-300 bg-white dark:bg-transparent">21:00</button>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-indigo-900/30 rounded-lg p-4 flex flex-col gap-2 text-sm border border-purple-100 dark:border-indigo-800">
                  <div className="flex justify-between text-[#64748b] dark:text-gray-400">
                    <span>18:00 - 19:00 (1 hr)</span>
                    <span>3000 DZD</span>
                  </div>
                  <div className="flex justify-between text-[#64748b] dark:text-gray-400">
                    <span>Service Fee</span>
                    <span>200 DZD</span>
                  </div>
                  <div className="h-px bg-purple-200 dark:bg-indigo-800 my-1"></div>
                  <div className="flex justify-between font-bold text-[#1e293b] dark:text-white text-base">
                    <span>Total</span>
                    <span>3200 DZD</span>
                  </div>
                </div>
                <button className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-base py-3 rounded-xl shadow-lg shadow-purple-500/30 transition-all active:scale-[0.98] flex justify-center items-center gap-2">
                  <span>Book Now</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
                <div className="flex justify-center items-center gap-1 text-xs text-[#64748b]">
                  <span className="material-symbols-outlined text-[14px] text-green-600">lock</span>
                  <span>Secure transaction powered by DZPay</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a className="text-sm font-medium text-[#64748b] hover:text-[#8b5cf6] underline decoration-dotted transition-colors" href="#">Contact Stadium Owner</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="DZPlay" className="h-24 w-auto object-contain" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Making football accessible to everyone in Algeria. Book, Play, Repeat.</p>
              <div className="flex gap-4">
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
  );
};

export default StadiumDetails;
