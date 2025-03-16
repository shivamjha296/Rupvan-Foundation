import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  color = 'rose' 
}) => {
  const colorClasses = {
    rose: 'text-rose-600 bg-rose-100',
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    amber: 'text-amber-600 bg-amber-100',
    purple: 'text-purple-600 bg-purple-100',
    teal: 'text-teal-600 bg-teal-100',
  };

  const iconColorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.rose;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-start">
      <div className={`p-3 rounded-full ${iconColorClass} mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard; 