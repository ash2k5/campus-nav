import { GraduationCap, Drama, Cross, BookOpen, PawPrint, Dumbbell, Utensils, Home, SquareParking, MapPin } from 'lucide-react';

const CATEGORY_ICONS = {
  'Academic': GraduationCap,
  'Arts & Performance': Drama,
  'Medical': Cross,
  'Library': BookOpen,
  'Student Life': PawPrint,
  'Recreation': Dumbbell,
  'Dining': Utensils,
  'Housing': Home,
  'Parking': SquareParking,
};

export default function CategoryIcon({ category, size = 14, className = '' }) {
  const Icon = CATEGORY_ICONS[category] || MapPin;
  return <Icon size={size} className={className} />;
}
