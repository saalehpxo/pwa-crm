import { FC } from 'react';

interface DetailFieldProps {
  label: string;
  value: string | number;
  isLink?: boolean;
}

export const DetailField: FC<DetailFieldProps> = ({ label, value, isLink }) => {
  return (
    <div className="flex justify-between py-3 border-b border-gray-200">
      <span className="text-gray-500">{label}</span>
      {isLink ? (
        <a href="#" className="text-blue-500">{value}</a>
      ) : (
        <span className="text-right">{value}</span>
      )}
    </div>
  );
}