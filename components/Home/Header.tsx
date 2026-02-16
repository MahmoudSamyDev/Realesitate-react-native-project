import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, View } from "react-native";

function Header() {
  return (
    <View className="flex flex-row items-center justify-between mt-5">
      <View className="flex flex-row items-center">
        <Image source={images.PersonalImg} className="size-12 rounded-full" />
        <View className="flex flex-col items-start ml-2 justify-center">
          <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
          <Text className="text-base font-rubik-medium text-black-300">Mahmoud</Text>
        </View>
      </View>
      <Image source={icons.bell} className="size-6" />
    </View>
  );
}

export default Header;
