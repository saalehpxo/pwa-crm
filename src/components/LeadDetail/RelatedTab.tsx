import { FC } from 'react';
import { Plus, Mic } from 'lucide-react';

interface RelatedTabProps {
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  leadAvatar: string;
  leadOwnerName: string;
  leadOwnerRole: string;
  leadOwnerAvatar: string;
}

const RelatedTab: FC<RelatedTabProps> = ({
  leadName,
  leadEmail,
  leadPhone,
  leadAvatar,
  leadOwnerName,
  leadOwnerRole,
  leadOwnerAvatar,
}) => {
  return (
    <div className="bg-gray-50">
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm mb-4">
          <div className="p-4 border-b">
            <div className="flex items-center gap-4">
              <img src={leadAvatar} alt={leadName} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{leadName}</h3>
                <a href={`mailto:${leadEmail}`} className="text-blue-500 block">{leadEmail}</a>
                <a href={`tel:${leadPhone}`} className="text-blue-500">{leadPhone}</a>
              </div>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="flex items-center gap-4">
              <img src={leadOwnerAvatar} alt={leadOwnerName} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-medium">{leadOwnerName}</h3>
                <p className="text-gray-600">{leadOwnerRole}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="font-medium">Notes</h3>
              <div className="flex gap-2">
                <button className="p-2 text-blue-500"><Mic size={20} /></button>
                <button className="p-2 text-blue-500"><Plus size={20} /></button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-3">
                <img src={leadOwnerAvatar} alt="" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="font-medium">Test</p>
                  <p className="text-sm text-gray-500">Just now by {leadOwnerName}</p>
                </div>
              </div>
            </div>
          </div>

          <ExpandableSection title="Closed Calls">
            <div className="p-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Follow up</h4>
                  <p className="text-sm text-gray-500">Today 3:06 PM</p>
                </div>
                <span>00:00</span>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection title="Attachments" />
          <ExpandableSection title="Open Tasks" />
          <ExpandableSection title="Open Meetings" />
          <ExpandableSection title="Open Calls" />
          <ExpandableSection title="Closed Tasks" />
        </div>

        <button className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg">
          Related List
        </button>
      </div>
    </div>
  );
};

const ExpandableSection: FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 flex justify-between items-center">
        <h3 className="font-medium">{title}</h3>
        <Plus size={20} className="text-blue-500" />
      </div>
      {children}
    </div>
  );
};

export default RelatedTab;