import { ChipSelectProps } from "@/utils/Types/appartments";
import { Text, TouchableOpacity, View } from "react-native";

function ChipSelect({ options, selected, onToggle }: ChipSelectProps) {
  return (
    <View className="flex-row flex-wrap gap-3">
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <TouchableOpacity
            key={option}
            onPress={() => onToggle(option)}
            className={`px-5 py-2.5 rounded-full ${
              isSelected ? "bg-primary-300" : "bg-white border border-black-200/20"
            }`}
          >
            <Text
              className={`text-sm font-rubik-medium ${
                isSelected ? "text-white" : "text-black-200"
              }`}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default ChipSelect;
