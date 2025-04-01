
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
      <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-lg mb-5 group-hover:bg-primary-100 transition-colors">
        <Icon className="h-7 w-7 text-primary-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
