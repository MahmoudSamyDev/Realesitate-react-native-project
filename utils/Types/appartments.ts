export interface SignleFeaturedCard_TP {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  category: string;
}

export interface CounterRowProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export interface RangeSliderProps {
  min: number;
  max: number;
  lowValue: number;
  highValue: number;
  onLowChange: (value: number) => void;
  onHighChange: (value: number) => void;
  prefix?: string;
  showHistogram?: boolean;
}

export interface ChipSelectProps {
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
}

export interface FilterValues {
  priceRange: { min: number; max: number };
  propertyTypes: string[];
  bedrooms: number;
  bathrooms: number;
  buildingSize: { min: number; max: number };
}
