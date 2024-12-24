import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LeadList from './components/LeadList';
import LeadDetailPage from './components/LeadDetail/LeadDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/leads/:id" element={<LeadDetailPage />} />
          <Route path="/leads" element={<LeadList />} />
          <Route path="/" element={<LeadList />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;