import { Calendar, Home, Users, Menu, RefreshCw } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center p-3">
        <Link to="/calendar" className={`flex flex-col items-center ${isActive('/calendar') ? 'text-blue-500' : 'text-gray-600'}`}>
          <Calendar size={24} />
          <span className="text-xs mt-1">Calendar</span>
        </Link>
        <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-blue-500' : 'text-gray-600'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/leads" className={`flex flex-col items-center ${isActive('/leads') ? 'text-blue-500' : 'text-gray-600'}`}>
          <RefreshCw size={24} />
          <span className="text-xs mt-1">Leads</span>
        </Link>
        <Link to="/contacts" className={`flex flex-col items-center ${isActive('/contacts') ? 'text-blue-500' : 'text-gray-600'}`}>
          <Users size={24} />
          <span className="text-xs mt-1">Contacts</span>
        </Link>
        <Link to="/more" className={`flex flex-col items-center ${isActive('/more') ? 'text-blue-500' : 'text-gray-600'}`}>
          <Menu size={24} />
          <span className="text-xs mt-1">More</span>
        </Link>
      </div>
    </nav>
  );
}