import { propertyTypeOptions } from "@/constants/data";
import icons from "@/constants/icons";
import type { FilterValues } from "@/utils/Types/appartments";
import { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ChipSelect from "./ChipSelect";
import CounterRow from "./CounterRow";
import RangeSlider from "./RangeSlider";

// Main Modal Component
interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
  initialFilters?: Partial<FilterValues>;
}

const DEFAULT_FILTERS: FilterValues = {
  priceRange: { min: 102, max: 327 },
  propertyTypes: ["Apartments", "Townhomes"],
  bedrooms: 2,
  bathrooms: 1,
  buildingSize: { min: 1370, max: 2720 },
};

function FilterModal({ visible, onClose, onApplyFilters, initialFilters }: FilterModalProps) {
  // Initialize state
  const [priceMin, setPriceMin] = useState(
    initialFilters?.priceRange?.min || DEFAULT_FILTERS.priceRange.min,
  );
  const [priceMax, setPriceMax] = useState(
    initialFilters?.priceRange?.max || DEFAULT_FILTERS.priceRange.max,
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialFilters?.propertyTypes || DEFAULT_FILTERS.propertyTypes,
  );
  const [bedrooms, setBedrooms] = useState(initialFilters?.bedrooms || DEFAULT_FILTERS.bedrooms);
  const [bathrooms, setBathrooms] = useState(
    initialFilters?.bathrooms || DEFAULT_FILTERS.bathrooms,
  );
  const [sizeMin, setSizeMin] = useState(
    initialFilters?.buildingSize?.min || DEFAULT_FILTERS.buildingSize.min,
  );
  const [sizeMax, setSizeMax] = useState(
    initialFilters?.buildingSize?.max || DEFAULT_FILTERS.buildingSize.max,
  );

  // Sync state when modal opens with different initial values
  useEffect(() => {
    if (visible) {
      setPriceMin(initialFilters?.priceRange?.min || DEFAULT_FILTERS.priceRange.min);
      setPriceMax(initialFilters?.priceRange?.max || DEFAULT_FILTERS.priceRange.max);
      setSelectedTypes(initialFilters?.propertyTypes || DEFAULT_FILTERS.propertyTypes);
      setBedrooms(initialFilters?.bedrooms || DEFAULT_FILTERS.bedrooms);
      setBathrooms(initialFilters?.bathrooms || DEFAULT_FILTERS.bathrooms);
      setSizeMin(initialFilters?.buildingSize?.min || DEFAULT_FILTERS.buildingSize.min);
      setSizeMax(initialFilters?.buildingSize?.max || DEFAULT_FILTERS.buildingSize.max);
    }
  }, [visible, initialFilters]);

  const handleTogglePropertyType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleReset = () => {
    setPriceMin(DEFAULT_FILTERS.priceRange.min);
    setPriceMax(DEFAULT_FILTERS.priceRange.max);
    setSelectedTypes(DEFAULT_FILTERS.propertyTypes);
    setBedrooms(DEFAULT_FILTERS.bedrooms);
    setBathrooms(DEFAULT_FILTERS.bathrooms);
    setSizeMin(DEFAULT_FILTERS.buildingSize.min);
    setSizeMax(DEFAULT_FILTERS.buildingSize.max);
  };

  const handleApply = () => {
    onApplyFilters({
      priceRange: { min: priceMin, max: priceMax },
      propertyTypes: selectedTypes,
      bedrooms,
      bathrooms,
      buildingSize: { min: sizeMin, max: sizeMax },
    });
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 bg-black/50 justify-end">
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="flex-1" />
        </TouchableWithoutFeedback>
        <View className="bg-white rounded-t-3xl max-h-[90%]">
          {/* Header */}
          <View className="flex-row items-center justify-between px-6 pt-6 pb-4 border-b border-black-200/10">
            <TouchableOpacity
              onPress={onClose}
              className="w-11 h-11 rounded-full bg-black-200/10 items-center justify-center"
            >
              <Image source={icons.backArrow} className="w-5 h-5" />
            </TouchableOpacity>
            <Text className="text-xl font-rubik-bold text-black-300">Filter</Text>
            <TouchableOpacity onPress={handleReset}>
              <Text className="text-base font-rubik-semibold text-primary-300">Reset</Text>
            </TouchableOpacity>
          </View>

          {/* Scrollable Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="px-6"
            contentContainerClassName="pb-6"
          >
            {/* Price Range Section */}
            <View className="py-6 border-b border-black-200/10">
              <Text className="text-lg font-rubik-bold text-black-300 mb-4">Price Range</Text>
              <RangeSlider
                min={50}
                max={500}
                lowValue={priceMin}
                highValue={priceMax}
                onLowChange={setPriceMin}
                onHighChange={setPriceMax}
                prefix="$"
                showHistogram={true}
              />
            </View>

            {/* Property Type Section */}
            <View className="py-6 border-b border-black-200/10">
              <Text className="text-lg font-rubik-bold text-black-300 mb-4">Property Type</Text>
              <ChipSelect
                options={propertyTypeOptions}
                selected={selectedTypes}
                onToggle={handleTogglePropertyType}
              />
            </View>

            {/* Home Details Section */}
            <View className="py-6 border-b border-black-200/10">
              <Text className="text-lg font-rubik-bold text-black-300 mb-2">Home Details</Text>
              <CounterRow
                label="Bedrooms"
                value={bedrooms}
                onIncrement={() => setBedrooms((prev) => prev + 1)}
                onDecrement={() => setBedrooms((prev) => Math.max(0, prev - 1))}
              />
              <CounterRow
                label="Bathrooms"
                value={bathrooms}
                onIncrement={() => setBathrooms((prev) => prev + 1)}
                onDecrement={() => setBathrooms((prev) => Math.max(0, prev - 1))}
              />
            </View>

            {/* Building Size Section */}
            <View className="py-6">
              <Text className="text-lg font-rubik-bold text-black-300 mb-4">
                Building Size (sq ft)
              </Text>
              <RangeSlider
                min={500}
                max={5000}
                lowValue={sizeMin}
                highValue={sizeMax}
                onLowChange={setSizeMin}
                onHighChange={setSizeMax}
              />
            </View>
          </ScrollView>

          {/* Bottom CTA */}
          <View className="px-6 py-5 border-t border-black-200/10">
            <TouchableOpacity
              onPress={handleApply}
              className="bg-primary-300 rounded-full py-4 active:scale-95"
            >
              <Text className="text-white font-rubik-bold text-center text-lg">Set Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default FilterModal;
