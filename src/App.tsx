import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthCallback from "./pages/AuthCallback";
import FindOpponents from "./pages/FindOpponents";
import PlayerDashboard from "./pages/PlayerDashboard";
import StadiumDetails from "./pages/StadiumDetails";
import StadiumBooking from "./pages/StadiumBooking";
import MyTeam from "./pages/MyTeam";
import MyBookings from "./pages/MyBookings";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Dashboard from "./pages/stadiumowner/Dashboard";
import MyStadiums from "./pages/stadiumowner/MyStadiums";
import Schedule from "./pages/stadiumowner/Schedule";
import Earnings from "./pages/stadiumowner/Earnings";
import StadiumOwnerSettings from "./pages/stadiumowner/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/find-opponents" element={<FindOpponents />} />
        <Route path="/dashboard" element={<PlayerDashboard />} />
        <Route path="/player-dashboard" element={<PlayerDashboard />} />
        <Route path="/stadium-dashboard" element={<PlayerDashboard />} />
        <Route path="/stadiums/details" element={<StadiumDetails />} />
        <Route path="/stadiums/details/:id" element={<StadiumDetails />} />
        <Route path="/stadiums/book" element={<StadiumBooking />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/stadium-owner" element={<Dashboard />} />
        <Route path="/stadium-owner/stadiums" element={<MyStadiums />} />
        <Route path="/stadium-owner/schedule" element={<Schedule />} />
        <Route path="/stadium-owner/earnings" element={<Earnings />} />
        <Route path="/stadium-owner/settings" element={<StadiumOwnerSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
