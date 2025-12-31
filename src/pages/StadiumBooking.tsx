import { Navbar } from "../components/layout/Navbar";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export default function StadiumBooking() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[800px] mx-auto px-4 md:px-10 py-12">
        <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-highlight rounded-2xl p-6 md:p-10 shadow-xl">
            
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Book Your Match</h1>
                <p className="text-gray-500 dark:text-gray-400">Complete the details below to reserve El Biar Stadium.</p>
            </div>

            <form className="space-y-8">
                
                {/* Date & Time Selection */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">1</span>
                        Select Date & Time
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Date</label>
                            <Input type="date" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Time</label>
                            <Input type="time" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Duration</label>
                        <div className="grid grid-cols-3 gap-2">
                            <button type="button" className="py-2 px-4 rounded-lg border border-primary bg-primary/10 text-primary font-bold text-sm">1 Hour</button>
                            <button type="button" className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-dark-highlight text-gray-700 dark:text-gray-300 font-medium text-sm">1.5 Hours</button>
                            <button type="button" className="py-2 px-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-surface-dark-highlight text-gray-700 dark:text-gray-300 font-medium text-sm">2 Hours</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">2</span>
                        Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                            <Input placeholder="Karim Benzema" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
                            <Input placeholder="+213 555 ..." />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700"></div>

                {/* Summary */}
                <div className="bg-background-light dark:bg-background-dark rounded-xl p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Stadium</span>
                        <span className="font-medium text-gray-900 dark:text-white">El Biar Stadium</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Date & Time</span>
                        <span className="font-medium text-gray-900 dark:text-white">Oct 24, 2023 • 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Duration</span>
                        <span className="font-medium text-gray-900 dark:text-white">1 Hour</span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900 dark:text-white">Total</span>
                        <span className="text-xl font-bold text-primary">2,000 DA</span>
                    </div>
                </div>

                <Button size="lg" className="w-full text-lg">
                    Confirm Booking
                </Button>

            </form>
        </div>
      </main>
    </div>
  );
}
