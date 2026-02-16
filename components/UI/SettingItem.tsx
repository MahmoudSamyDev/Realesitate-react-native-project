import icons from "@/constants/icons";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

function SettingsItem({
  title,
  icon,
  onPress,
  textStyle,
  showArrow,
}: {
  title: string;
  icon: ImageSourcePropType;
  textStyle?: string;
  showArrow?: boolean;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity className="flex flex-row items-center justify-between py-3" onPress={onPress}>
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
}

export default SettingsItem;
