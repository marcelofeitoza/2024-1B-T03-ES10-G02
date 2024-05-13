import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

// Pages
import Login from './pages/login/Login';
import Management from './pages/Management';
import DashboardPage from './pages/dashboardPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/management" element={<Management />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
      <GlobalStyles />
    </Router>
  );
}

export default App;
