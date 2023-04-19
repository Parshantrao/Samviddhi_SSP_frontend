import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header'
import Landing from './pages/landing/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Result from './pages/result/Result';
import Velocity from './pages/result/Velocity';
import Acceleration from './pages/result/Acceleration';
import Bus from './pages/result/Bus';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/result" element={<Result />} />
          <Route path="/VelocityGraph" element={<Velocity />} />
          <Route path="/AccelerationGraph" element={<Acceleration />} />
          <Route path="/BatteryBusGraph" element={<Bus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
