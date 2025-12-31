import { Navbar } from "../components/layout/Navbar";
import { Button } from "../components/ui/Button";

export default function StadiumDetails() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555862124-a4ebf04cd250?q=80&w=2000&auto=format&fit=crop")' }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 flex flex-col justify-end pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white">
                            Top Rated
                        </span>
                        <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                            <span className="material-symbols-outlined text-[18px] fill-1">star</span>
                            4.8 (124 reviews)
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">El Biar Stadium</h1>
                    <div className="flex items-center gap-2 text-gray-300">
                        <span className="material-symbols-outlined">location_on</span>
                        <span>12 Rue des Frères, El Biar, Algiers</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 min-w-[200px]">
                    <div className="text-right md:text-right">
                        <span className="text-3xl font-bold text-white">2,000 DA</span>
                        <span className="text-gray-400 text-sm"> / hour</span>
                    </div>
                    <Button size="lg" className="w-full">Book Now</Button>
                </div>
            </div>
        </div>
      </div>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-10 flex flex-col md:flex-row gap-10">
        
        {/* Main Content */}
        <div className="flex-1 space-y-8">
            
            {/* About */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About the Stadium</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Experience top-tier football at El Biar Stadium. Recently renovated with high-quality artificial turf (Generation 5), 
                    LED floodlights for perfect night games, and secure changing rooms. Perfect for 5v5 and 7v7 matches. 
                    Refreshments and parking available on-site.
                </p>
            </section>

            {/* Amenities */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { icon: "grass", label: "Artificial Turf" },
                        { icon: "lightbulb", label: "Floodlights" },
                        { icon: "local_parking", label: "Free Parking" },
                        { icon: "checkroom", label: "Changing Rooms" },
                        { icon: "shower", label: "Showers" },
                        { icon: "water_drop", label: "Water Available" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-highlight rounded-lg">
                            <span className="material-symbols-outlined text-primary">{item.icon}</span>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location Map Placeholder */}
            <section>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Location</h3>
                <div className="w-full h-64 bg-surface-dark rounded-xl border border-surface-dark-highlight flex items-center justify-center text-gray-500">
                    Map View Placeholder
                </div>
            </section>

        </div>

        {/* Sidebar */}
        <div className="w-full md:w-[350px] space-y-6">
            <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-highlight rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Opening Hours</h3>
                <div className="space-y-3">
                    {[
                        { day: "Monday - Friday", hours: "08:00 AM - 12:00 AM" },
                        { day: "Saturday", hours: "08:00 AM - 02:00 AM" },
                        { day: "Sunday", hours: "08:00 AM - 12:00 AM" },
                    ].map((time, i) => (
                        <div key={i} className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">{time.day}</span>
                            <span className="font-medium text-gray-900 dark:text-white">{time.hours}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button variant="outline" className="w-full gap-2">
                        <span className="material-symbols-outlined">call</span>
                        Contact Owner
                    </Button>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}
