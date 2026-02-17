import { CounterRowProps } from "@/utils/Types/appartments";
import { Text, TouchableOpacity, View } from "react-native";

function CounterRow({ label, value, onIncrement, onDecrement }: CounterRowProps) {
  return (
    <View className="flex-row items-center justify-between py-3">
      <Text className="text-base font-rubik text-black-300">{label}</Text>
      <View className="flex-row items-center gap-4">
        <TouchableOpacity
          onPress={onDecrement}
          className="w-9 h-9 rounded-full border border-black-200/20 items-center justify-center active:scale-95"
        >
          <Text className="text-xl font-rubik text-black-300">−</Text>
        </TouchableOpacity>
        <Text className="text-lg font-rubik-semibold text-black-300 w-8 text-center">{value}</Text>
        <TouchableOpacity
          onPress={onIncrement}
          className="w-9 h-9 rounded-full border border-black-200/20 items-center justify-center active:scale-95"
        >
          <Text className="text-xl font-rubik text-black-300">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CounterRow;
