import { FC, useState } from 'react';
import { ArrowLeft, Edit, MoreVertical } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Lead } from '../../types/Lead';
import { Tabs } from './Tabs';
import { DetailField } from './DetailField';

const sampleLeadDetails: Lead = {
  id: '6',
  leadOwner: 'Saleh Pxo',
  company: 'Printing Dimensions',
  name: 'Ms. Kayleigh Lace (Sample)',
  title: 'Cost Accountant',
  email: 'kayleigh-lace@yahoo.com',
  phone: '555-555-5555',
  mobile: '555-555-5555',
  website: 'http://www.printingdimensions.com',
  leadSource: 'Partner',
  leadStatus: 'Not Contacted',
  industry: 'Optical Networking',
  annualRevenue: '$270,000.00',
  createdBy: 'Saleh Pxo',
  skypeId: 'kayleigh-lace',
  modifiedBy: 'Saleh Pxo',
  createdTime: 'May 11, 2022 7:55 PM',
  modifiedTime: 'May 11, 2022 7:55 PM',
  twitter: 'kayleighlace_sample',
  lastActivityTime: 'Today 3:06 PM',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6'
};

const LeadDetailPage: FC = () => {
  const [activeTab, setActiveTab] = useState('DETAILS');
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl">Leads</h1>
        </div>
        <div className="flex gap-4">
          <Edit size={24} />
          <MoreVertical size={24} />
        </div>
      </header>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'DETAILS' && (
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Lead Information</h2>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <DetailField label="Lead Owner" value={sampleLeadDetails.leadOwner || ''} />
            <DetailField label="Company" value={sampleLeadDetails.company || ''} />
            <DetailField label="Lead Name" value={sampleLeadDetails.name} />
            <DetailField label="Title" value={sampleLeadDetails.title || ''} />
            <DetailField label="Email" value={sampleLeadDetails.email} isLink />
            <DetailField label="Phone" value={sampleLeadDetails.phone || ''} isLink />
            <DetailField label="Mobile" value={sampleLeadDetails.mobile || ''} isLink />
            <DetailField label="Website" value={sampleLeadDetails.website || ''} isLink />
            <DetailField label="Lead Source" value={sampleLeadDetails.leadSource || ''} />
            <DetailField label="Lead Status" value={sampleLeadDetails.leadStatus || ''} />
            <DetailField label="Industry" value={sampleLeadDetails.industry || ''} />
            <DetailField label="Annual Revenue" value={sampleLeadDetails.annualRevenue || ''} />
            <DetailField label="Created By" value={sampleLeadDetails.createdBy || ''} />
            <DetailField label="Skype ID" value={sampleLeadDetails.skypeId || ''} isLink />
            <DetailField label="Modified By" value={sampleLeadDetails.modifiedBy || ''} />
            <DetailField label="Created Time" value={sampleLeadDetails.createdTime || ''} />
            <DetailField label="Modified Time" value={sampleLeadDetails.modifiedTime || ''} />
            <DetailField label="Twitter" value={sampleLeadDetails.twitter || ''} isLink />
            <DetailField label="Last Activity Time" value={sampleLeadDetails.lastActivityTime || ''} />
          </div>

          <h2 className="text-xl font-semibold my-4">Address Information</h2>
          <div className="bg-white rounded-lg p-4 shadow-sm mb-20">
            {/* Address fields would go here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadDetailPage;