import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { useState } from "react";

// Test data for bookings
const testBookings = [
  {
    id: 1,
    stadium: "Stade 1er Novembre",
    location: "Batna, Algeria",
    date: "2026-01-15",
    time: "18:00 - 20:00",
    duration: "2 hours",
    price: 3500,
    status: "confirmed",
    fieldType: "Outdoor",
    surface: "Natural Grass",
    capacity: "22 players",
    amenities: ["Changing Rooms", "Showers", "Parking", "Lighting"],
    bookingRef: "BK-2026-001",
    image: "🏟️"
  },
  {
    id: 2,
    stadium: "Complexe Sportif de Proximité",
    location: "Batna Centre, Algeria",
    date: "2026-01-20",
    time: "16:00 - 17:30",
    duration: "1.5 hours",
    price: 2500,
    status: "confirmed",
    fieldType: "Indoor",
    surface: "Artificial Turf",
    capacity: "14 players",
    amenities: ["Changing Rooms", "Showers", "Air Conditioning"],
    bookingRef: "BK-2026-002",
    image: "⚽"
  },
  {
    id: 3,
    stadium: "Terrain Synthétique Tazoult",
    location: "Tazoult, Algeria",
    date: "2026-01-25",
    time: "14:00 - 16:00",
    duration: "2 hours",
    price: 4000,
    status: "pending",
    fieldType: "Outdoor",
    surface: "Synthetic Turf",
    capacity: "22 players",
    amenities: ["Changing Rooms", "Parking", "Cafeteria"],
    bookingRef: "BK-2026-003",
    image: "🌟"
  },
  {
    id: 4,
    stadium: "Stade Municipal Arris",
    location: "Arris, Algeria",
    date: "2026-01-10",
    time: "10:00 - 12:00",
    duration: "2 hours",
    price: 3000,
    status: "completed",
    fieldType: "Outdoor",
    surface: "Natural Grass",
    capacity: "22 players",
    amenities: ["Changing Rooms", "Parking"],
    bookingRef: "BK-2026-004",
    image: "🏆"
  },
  {
    id: 5,
    stadium: "Centre Omnisports Batna",
    location: "Batna, Algeria",
    date: "2026-01-08",
    time: "20:00 - 22:00",
    duration: "2 hours",
    price: 5000,
    status: "completed",
    fieldType: "Indoor",
    surface: "Artificial Turf",
    capacity: "14 players",
    amenities: ["Changing Rooms", "Showers", "Parking", "Lighting", "Scoreboard"],
    bookingRef: "BK-2026-005",
    image: "🎯"
  },
  {
    id: 6,
    stadium: "Stade Seffouhi",
    location: "Batna, Algeria",
    date: "2026-01-05",
    time: "15:00 - 17:00",
    duration: "2 hours",
    price: 4500,
    status: "cancelled",
    fieldType: "Outdoor",
    surface: "Natural Grass",
    capacity: "22 players",
    amenities: ["Changing Rooms", "Showers", "Parking"],
    bookingRef: "BK-2026-006",
    image: "❌"
  }
];

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const upcomingBookings = testBookings.filter(b => 
    b.status === "confirmed" || b.status === "pending"
  );
  
  const pastBookings = testBookings.filter(b => 
    b.status === "completed" || b.status === "cancelled"
  );

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      completed: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      cancelled: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      confirmed: "check_circle",
      pending: "schedule",
      completed: "task_alt",
      cancelled: "cancel"
    };
    return icons[status as keyof typeof icons] || "schedule";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      weekday: "short", 
      year: "numeric", 
      month: "short", 
      day: "numeric" 
    });
  };

  const BookingCard = ({ booking }: { booking: any }) => (
    <div 
      onClick={() => setSelectedBooking(booking)}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{booking.image}</div>
          <div>
            <h3 className="text-lg font-bold text-dz-navy dark:text-white group-hover:text-primary transition-colors">
              {booking.stadium}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-base">location_on</span>
              {booking.location}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusBadge(booking.status)}`}>
          <span className="material-symbols-outlined text-sm">{getStatusIcon(booking.status)}</span>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="material-symbols-outlined text-primary">calendar_today</span>
          <div>
            <div className="text-slate-500 dark:text-slate-400 text-xs">Date</div>
            <div className="font-semibold text-dz-navy dark:text-white">{formatDate(booking.date)}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="material-symbols-outlined text-primary">schedule</span>
          <div>
            <div className="text-slate-500 dark:text-slate-400 text-xs">Time</div>
            <div className="font-semibold text-dz-navy dark:text-white">{booking.time}</div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">grass</span>
            {booking.surface}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">timer</span>
            {booking.duration}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{booking.price} DA</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{booking.bookingRef}</div>
        </div>
      </div>
    </div>
  );

  const BookingDetails = ({ booking }: { booking: any }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-5xl">{booking.image}</div>
            <div>
              <h2 className="text-2xl font-bold text-dz-navy dark:text-white">{booking.stadium}</h2>
              <p className="text-slate-500 dark:text-slate-400">{booking.location}</p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedBooking(null)}
            className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status */}
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <span className="font-semibold text-dz-navy dark:text-white">Booking Status</span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${getStatusBadge(booking.status)}`}>
              <span className="material-symbols-outlined">{getStatusIcon(booking.status)}</span>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>

          {/* Date & Time Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                <span className="material-symbols-outlined">calendar_today</span>
                <span className="font-semibold">Date</span>
              </div>
              <div className="text-lg font-bold text-dz-navy dark:text-white">{formatDate(booking.date)}</div>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                <span className="material-symbols-outlined">schedule</span>
                <span className="font-semibold">Time</span>
              </div>
              <div className="text-lg font-bold text-dz-navy dark:text-white">{booking.time}</div>
            </div>
          </div>

          {/* Field Details */}
          <div className="space-y-3">
            <h3 className="font-bold text-dz-navy dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">sports_soccer</span>
              Field Details
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Field Type</span>
                <span className="font-semibold text-dz-navy dark:text-white">{booking.fieldType}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Surface</span>
                <span className="font-semibold text-dz-navy dark:text-white">{booking.surface}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Capacity</span>
                <span className="font-semibold text-dz-navy dark:text-white">{booking.capacity}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">Duration</span>
                <span className="font-semibold text-dz-navy dark:text-white">{booking.duration}</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-3">
            <h3 className="font-bold text-dz-navy dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Amenities
            </h3>
            <div className="flex flex-wrap gap-2">
              {booking.amenities.map((amenity: string, idx: number) => (
                <span 
                  key={idx}
                  className="px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="p-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-600 dark:text-slate-400">Booking Reference</span>
              <span className="font-mono font-semibold text-dz-navy dark:text-white">{booking.bookingRef}</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-primary/20">
              <span className="text-lg font-semibold text-dz-navy dark:text-white">Total Amount</span>
              <span className="text-3xl font-bold text-primary">{booking.price} DA</span>
            </div>
          </div>

          {/* Actions */}
          {booking.status === "confirmed" && (
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">directions</span>
                Get Directions
              </button>
              <button className="flex-1 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">cancel</span>
                Cancel Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-dz-navy dark:text-white tracking-tight">My Bookings</h2>
          <p className="text-slate-500 dark:text-slate-400">Manage your upcoming and past bookings</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-100">Total Bookings</span>
              <span className="material-symbols-outlined text-3xl opacity-50">calendar_month</span>
            </div>
            <div className="text-3xl font-black">{testBookings.length}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-100">Confirmed</span>
              <span className="material-symbols-outlined text-3xl opacity-50">check_circle</span>
            </div>
            <div className="text-3xl font-black">{testBookings.filter(b => b.status === "confirmed").length}</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-100">Pending</span>
              <span className="material-symbols-outlined text-3xl opacity-50">schedule</span>
            </div>
            <div className="text-3xl font-black">{testBookings.filter(b => b.status === "pending").length}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-100">Completed</span>
              <span className="material-symbols-outlined text-3xl opacity-50">task_alt</span>
            </div>
            <div className="text-3xl font-black">{testBookings.filter(b => b.status === "completed").length}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-3 font-semibold transition-colors relative ${
              activeTab === "upcoming"
                ? "text-primary"
                : "text-slate-500 dark:text-slate-400 hover:text-dz-navy dark:hover:text-white"
            }`}
          >
            Upcoming ({upcomingBookings.length})
            {activeTab === "upcoming" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-3 font-semibold transition-colors relative ${
              activeTab === "past"
                ? "text-primary"
                : "text-slate-500 dark:text-slate-400 hover:text-dz-navy dark:hover:text-white"
            }`}
          >
            Past ({pastBookings.length})
            {activeTab === "past" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
        </div>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeTab === "upcoming" 
            ? upcomingBookings.map(booking => <BookingCard key={booking.id} booking={booking} />)
            : pastBookings.map(booking => <BookingCard key={booking.id} booking={booking} />)
          }
        </div>

        {/* Empty State */}
        {((activeTab === "upcoming" && upcomingBookings.length === 0) || 
          (activeTab === "past" && pastBookings.length === 0)) && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-700">
            <div className="mx-auto size-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-3xl text-primary">calendar_today</span>
            </div>
            <h3 className="text-xl font-bold text-dz-navy dark:text-white mb-2">
              No {activeTab} bookings
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              {activeTab === "upcoming" 
                ? "You don't have any upcoming bookings. Find a stadium to book!" 
                : "You don't have any past bookings yet."}
            </p>
          </div>
        )}
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && <BookingDetails booking={selectedBooking} />}
    </DashboardLayout>
  );
}
