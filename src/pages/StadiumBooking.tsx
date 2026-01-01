import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../services/auth.service';
import { UserAvatar } from '../components/shared/UserAvatar';

interface Stadium {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  available: boolean;
}

const StadiumBooking: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'available' | 'unavailable'>('all');
  const [showPriceMenu, setShowPriceMenu] = useState(false);
  const [showRatingMenu, setShowRatingMenu] = useState(false);
  const [showAvailabilityMenu, setShowAvailabilityMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(authService.isAuthenticated());
  }, []);

  const handleViewDetails = (stadiumId: number) => {
    navigate(`/stadiums/details/${stadiumId}`);
  };

  const handleReset = () => {
    setSearchQuery('');
    setPriceRange('all');
    setRatingFilter(0);
    setAvailabilityFilter('all');
  };

  const stadiums: Stadium[] = [
    {
      id: 1,
      name: 'El Bahia Stadium',
      location: '123 Rue de la Liberté, Oran',
      price: 3500,
      rating: 4.8,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ut-V0iRHhFV6K3YUqGBBiQV_u_wuESKlvtEZy-3QjyXAzpAAnLs6O5QGGwk1HeHhg6hBQ4zsXBrnqFhrygsMTsgN_NFQDQgXOtfjpfq0n57DpG86tfnbhf5puQ6Dm7MZAvSOWqsjDqLHY6RqCAQ4lFb530C01DUN7kyItFApvcSaOHiEek4H29ixhL589bM2h6uaInFc20t9aXpBKpDOjkHhdGcPaY2YIiF9j8l8vg-zfbUWuWXXLhbOeXD68WpFgMoSOt4TKrE',
      available: true,
    },
    {
      id: 2,
      name: 'Stade Municipal Constantine',
      location: 'El Khroub, Constantine',
      price: 3200,
      rating: 4.9,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUk34azHB1yf4TEFtyHu1vIyl260Sjw4omNDlarp55ERQfvDaDs7ZTm7Keuo2wDcO47U2-kRldLkZ2CObdsUNS2SQa4mKEXYuEa-n1mzPWxXwYWQvxO8TPttqBmsD4PziNG4j9xPdVj7hhWN-bOdGIoMfZd9sZdy3NEE03NvZQdB9wBMnASqxKr0bhgVBpuPYGGW8bJOI29gm_SChZEfCyVbBoeZY3eoM6-1YdhSHC67H1MOf93mwmFR_hRLb63lHs_hlWd32JPz8',
      available: true,
    },
    {
      id: 3,
      name: 'Arena Sportiva Algiers',
      location: 'Ben Aknoun, Algiers',
      price: 4000,
      rating: 4.7,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj6d732HJaRUKUXYlxmH8icFy2BIj4IxTaCRORcoP9SdadwR-1j2xpEpztdQqOuMLBZM0CfJlX1ZJfEKhQe2FwrzbhY9EmnZLaxvDaFPjUarPn4LO8c_hov8NFm1ERIHY0j112MfKjpM-sTBjWIHp48a7Xs3UkFd9kXuP_zJm1E0fZkgezDEOikTtctQooBPQW_8mQUjeAJSRgL97BC8-CzXeL_oXYq0LJaXI3NsEW3B4K3IkN_tsz3X-2tbGk83oH9_mAMrqtnqI',
      available: false,
    },
    {
      id: 4,
      name: 'Setif Sports Complex',
      location: 'Park Mall Area, Setif',
      price: 2800,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoYIWGoiLuy13rmQe-KHoq92MCimDFZzSedi4AGRjNoMaQjNzTNY3IbIpYe0pq81HDu7R4wAXCCSbeOv5R5A3uWS5hkGtJWWW4qvnYlKsbFitwOcCIuhZYtapGqk7d6V8LbiwH68BdQldeSp0q00cZgJjc4kOkHfauDeJ4PUXAjUzUEBrEn6YIFVZr49qrZw7hcxpgNDhP5w_eBuxPVEx661S0SCqrs2T9UGSxnM6Szt5-VT8TPlOQECVQ_6sQ9QU7C-u3dyHz54g',
      available: true,
    },
    {
      id: 5,
      name: 'Annaba Football Arena',
      location: 'Annaba City Center',
      price: 3800,
      rating: 4.6,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq43nYnyBGCvlkMVOYb8VMW3FvAuB_u3eXcp0Y6dpHlPTf40s4POgx6EcGJHRT3yKcm2hM2G6Wi8yhqDHFsTWnoIkOgXeLKZIuImt38zfA4J7vKg7pHKA-WZEitwbdk0-axSr0zbt1qj84n5pXeXGQQqjNHnKcciw--enrmAKQUn_zIJev4O3i1EitQXv9jYJje69WvYVKj6-5HN3SlEivQShdyP_J1S2UF9t6wf6qOPvXRWxhr7go_objgwP3PDYHT98ggh83fRw',
      available: true,
    },
    {
      id: 6,
      name: 'Tipaza Beach Stadium',
      location: 'Chenoua, Tipaza',
      price: 3000,
      rating: 4.9,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyhM_dQGes7ZZ2KffX2ZYB8rRB9onxKS87w2yFbE2dW5A-H0M_CLS-4sdtZV_Eun4O-cAGmLjNhKjs4s-1i768yRXD1qajG8hcZV3_lZSniikF-WCHkKc2-dnosERVBK0-LKwUrNatQdvqtcjh9tPnECDM_KQ3MTvxlmZ1AQogZv4B6srXafQQECVoUMWAP1l9A2SFH3YjcbXrn9G_xak2koQgWoIoL50vEPAq6dUedUGx8XLg3HUCqkkmXcN_8TXcpdqu4e9Y-YE',
      available: true,
    },
  ];

  // Filter logic
  const filteredStadiums = stadiums.filter((stadium) => {
    // Search filter
    const matchesSearch = stadium.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          stadium.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Price filter
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = stadium.price < 3000;
    else if (priceRange === 'medium') matchesPrice = stadium.price >= 3000 && stadium.price <= 3500;
    else if (priceRange === 'high') matchesPrice = stadium.price > 3500;
    
    // Rating filter
    const matchesRating = ratingFilter === 0 || stadium.rating >= ratingFilter;
    
    // Availability filter
    let matchesAvailability = true;
    if (availabilityFilter === 'available') matchesAvailability = stadium.available;
    else if (availabilityFilter === 'unavailable') matchesAvailability = !stadium.available;
    
    return matchesSearch && matchesPrice && matchesRating && matchesAvailability;
  });

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#1e1b24] dark:text-gray-100 antialiased flex flex-col min-h-screen">
      {/* Header - Same as Home */}
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

      {/* Main Content */}
      <main className="flex-1 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Back to Home Button */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group">
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[#1e1b24] dark:text-white text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em]">Find Your Pitch</h1>
            <p className="text-[#8b7ba3] dark:text-gray-400 text-base font-normal">Book top-rated football stadiums across Algeria.</p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-3xl mx-auto">
              <label className="flex flex-col w-full">
                <div className="flex w-full items-stretch rounded-lg shadow-sm">
                  <div className="text-[#8b7ba3] flex border-none bg-white dark:bg-[#1a1626] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none text-[#1e1b24] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border-none bg-white dark:bg-[#1a1626] placeholder:text-[#8b7ba3] px-4 py-3.5 text-base font-normal leading-normal" 
                    placeholder="Search by location (e.g., Algiers, Oran) or stadium name..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </label>
            </div>

            {/* Filters */}
            <div className="flex gap-3 flex-wrap items-center justify-center">
              {/* Price Range Filter */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowPriceMenu(!showPriceMenu);
                    setShowRatingMenu(false);
                    setShowAvailabilityMenu(false);
                  }}
                  className={`group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#241f33] border pl-4 pr-3 transition-all ${priceRange !== 'all' ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-[#1a1626] border-slate-200 dark:border-slate-800'}`}
                >
                  <p className={`text-sm font-medium ${priceRange !== 'all' ? 'text-white' : 'text-[#1e1b24] dark:text-gray-200'}`}>
                    {priceRange === 'all' ? 'Price Range' : priceRange === 'low' ? '< 3000 DA' : priceRange === 'medium' ? '3000-3500 DA' : '> 3500 DA'}
                  </p>
                  <span className={`material-symbols-outlined text-lg ${priceRange !== 'all' ? 'text-white' : 'text-gray-500'}`}>expand_more</span>
                </button>
                {showPriceMenu && (
                  <div className="absolute top-full mt-2 left-0 bg-white dark:bg-[#1a1626] border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg z-50 min-w-[180px]">
                    <button onClick={() => { setPriceRange('all'); setShowPriceMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">All Prices</button>
                    <button onClick={() => { setPriceRange('low'); setShowPriceMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">Under 3000 DA</button>
                    <button onClick={() => { setPriceRange('medium'); setShowPriceMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">3000 - 3500 DA</button>
                    <button onClick={() => { setPriceRange('high'); setShowPriceMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">Over 3500 DA</button>
                  </div>
                )}
              </div>

              {/* Rating Filter */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowRatingMenu(!showRatingMenu);
                    setShowPriceMenu(false);
                    setShowAvailabilityMenu(false);
                  }}
                  className={`group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#241f33] border pl-4 pr-3 transition-all ${ratingFilter !== 0 ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-[#1a1626] border-slate-200 dark:border-slate-800'}`}
                >
                  <p className={`text-sm font-medium ${ratingFilter !== 0 ? 'text-white' : 'text-[#1e1b24] dark:text-gray-200'}`}>
                    {ratingFilter === 0 ? 'Rating' : `${ratingFilter}+ Stars`}
                  </p>
                  <span className={`material-symbols-outlined text-lg ${ratingFilter !== 0 ? 'text-white' : 'text-gray-500'}`}>expand_more</span>
                </button>
                {showRatingMenu && (
                  <div className="absolute top-full mt-2 left-0 bg-white dark:bg-[#1a1626] border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg z-50 min-w-[160px]">
                    <button onClick={() => { setRatingFilter(0); setShowRatingMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">All Ratings</button>
                    <button onClick={() => { setRatingFilter(4.5); setShowRatingMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">4.5+ Stars</button>
                    <button onClick={() => { setRatingFilter(4.7); setShowRatingMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">4.7+ Stars</button>
                    <button onClick={() => { setRatingFilter(4.9); setShowRatingMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">4.9+ Stars</button>
                  </div>
                )}
              </div>

              {/* Availability Filter */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowAvailabilityMenu(!showAvailabilityMenu);
                    setShowPriceMenu(false);
                    setShowRatingMenu(false);
                  }}
                  className={`group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#241f33] border pl-4 pr-3 transition-all ${availabilityFilter !== 'all' ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-[#1a1626] border-slate-200 dark:border-slate-800'}`}
                >
                  <p className={`text-sm font-medium ${availabilityFilter !== 'all' ? 'text-white' : 'text-[#1e1b24] dark:text-gray-200'}`}>
                    {availabilityFilter === 'all' ? 'Availability' : availabilityFilter === 'available' ? 'Available' : 'Unavailable'}
                  </p>
                  <span className={`material-symbols-outlined text-lg ${availabilityFilter !== 'all' ? 'text-white' : 'text-gray-500'}`}>expand_more</span>
                </button>
                {showAvailabilityMenu && (
                  <div className="absolute top-full mt-2 left-0 bg-white dark:bg-[#1a1626] border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg z-50 min-w-[140px]">
                    <button onClick={() => { setAvailabilityFilter('all'); setShowAvailabilityMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">All</button>
                    <button onClick={() => { setAvailabilityFilter('available'); setShowAvailabilityMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">Available</button>
                    <button onClick={() => { setAvailabilityFilter('unavailable'); setShowAvailabilityMenu(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-[#1e1b24] dark:text-white">Unavailable</button>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
              <button onClick={handleReset} className="text-primary text-sm font-medium hover:underline">Reset</button>
            </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-gray-900 dark:text-white">{filteredStadiums.length}</span> of <span className="font-bold">{stadiums.length}</span> stadiums
            </p>
          </div>

          {/* Stadium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredStadiums.length > 0 ? filteredStadiums.map((stadium) => (
                <div key={stadium.id} className="group flex flex-col rounded-xl bg-card-light dark:bg-card-dark shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800 overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center relative" 
                    style={{ backgroundImage: `url('${stadium.imageUrl}')` }}
                  >
                    <div className="absolute top-3 right-3 bg-white/95 dark:bg-black/80 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-yellow-500 text-sm filled">star</span> {stadium.rating}
                    </div>
                    {stadium.available && (
                      <div className="absolute bottom-3 left-3 bg-primary/90 text-white px-2.5 py-1 rounded-md text-xs font-medium">
                        Available Now
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <div>
                      <h3 className="text-lg font-bold text-[#1e1b24] dark:text-white group-hover:text-primary transition-colors">{stadium.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[18px]">location_on</span> {stadium.location}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-primary font-bold text-xl">{stadium.price} DZD</span>
                        <span className="text-xs text-gray-400 font-medium">/ hour</span>
                      </div>
                      <button 
                        onClick={() => handleViewDetails(stadium.id)}
                        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-16">
                  <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">search_off</span>
                  <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">No stadiums found</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Try adjusting your filters or search query</p>
                  <button onClick={handleReset} className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-10">
              <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#1a1626] border border-slate-200 dark:border-slate-800 rounded-full text-sm font-bold text-[#1e1b24] dark:text-white hover:bg-slate-50 dark:hover:bg-[#241f33] shadow-sm transition-colors">
                Load More Stadiums
                <span className="material-symbols-outlined text-lg">arrow_downward</span>
              </button>
            </div>
        </div>
      </main>

      {/* Footer - Same as Home */}
      <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 py-12">
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
  );
};

export default StadiumBooking;