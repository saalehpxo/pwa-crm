import { Search, Settings, MoreVertical, ArrowDownUp, Map } from 'lucide-react';
import { Lead } from '../types/Lead';
import { useNavigate } from 'react-router-dom';

const sampleLeads: Lead[] = [
  { id: '1', name: 'Christopher Maclead (Sample)', email: 'christopher-maclead@gmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1' },
  { id: '2', name: 'Carissa Kidman (Sample)', email: 'carissa-kidman@yahoo.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2' },
  { id: '3', name: 'James Merced (Sample)', email: 'james-merced@gmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3' },
  { id: '4', name: 'Tresa Sweely (Sample)', email: 'tresa-sweely@hotmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4' },
  { id: '5', name: 'Felix Hirpara (Sample)', email: 'felix-hirpara@cox.net', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5' },
  { id: '6', name: 'Kayleigh Lace (Sample)', email: 'kayleigh-lace@yahoo.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6' },
  { id: '7', name: 'Yvonne Tjepkema (Sample)', email: 'yvonne-tjepkema@hotmail.com', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=7' },
  { id: '8', name: 'Michael Ruta (Sample)', email: 'michael-gruta@cox.net', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=8' }
];

export default function LeadList() {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Leads</h1>
        <div className="flex gap-4">
          <Search size={24} />
          <Settings size={24} />
          <MoreVertical size={24} />
        </div>
      </header>

      <div className="p-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-lg">All Leads</span>
          <ArrowDownUp size={20} className="text-gray-500" />
        </div>
        <Map size={24} className="text-gray-500" />
      </div>

      <div className="divide-y divide-gray-200">
        {sampleLeads.map((lead) => (
          <div 
            key={lead.id} 
            className="p-4 flex items-center gap-4 active:bg-gray-100"
            onClick={() => navigate(`/leads/${lead.id}`)}
          >
            <img src={lead.avatar} alt={lead.name} className="w-12 h-12 rounded-full" />
            <div>
              <h3 className="font-medium">{lead.name}</h3>
              <p className="text-gray-600 text-sm">{lead.email}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed right-6 bottom-24 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
}