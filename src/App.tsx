import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindOpponents from "./pages/FindOpponents";
import PlayerDashboard from "./pages/PlayerDashboard";
import StadiumDetails from "./pages/StadiumDetails";
import StadiumBooking from "./pages/StadiumBooking";
import MyTeam from "./pages/MyTeam";
import MyBookings from "./pages/MyBookings";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-opponents" element={<FindOpponents />} />
        <Route path="/dashboard" element={<PlayerDashboard />} />
        <Route path="/stadiums/details" element={<StadiumDetails />} />
        <Route path="/stadiums/book" element={<StadiumBooking />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
