import { FC } from 'react';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Tabs: FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['RELATED', 'EMAILS', 'DETAILS'];
  
  return (
    <div className="flex border-b bg-blue-500 text-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-1 py-3 text-center ${activeTab === tab ? 'border-b-2 border-white font-medium' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}