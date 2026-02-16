import SettingsItem from "@/components/UI/SettingItem";
import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile() {
  function handleLogout() {}
  return (
    <SafeAreaView className="h-full bg-white px-7">
      <View className="flex flex-row items-center justify-between mt-5">
        <Text className="text-xl font-rubik-bold">Profile</Text>
        <Image source={icons.bell} className="size-5" />
      </View>
      <View className="flex flex-row justify-center mt-5">
        <View className="flex flex-col items-center relative mt-5">
          <Image source={images.PersonalImg} className="size-44 relative rounded-full" />
          <TouchableOpacity className="absolute bottom-11 right-2">
            <Image source={icons.edit} className="size-9" />
          </TouchableOpacity>
          <Text className="text-2xl font-rubik-bold mt-2">Mahmoud Samy</Text>
        </View>
      </View>
      <View className="flex flex-col mt-10">
        <SettingsItem title="My Bookings" icon={icons.calendar} showArrow={true} textStyle="" />
        <SettingsItem title="Payments" icon={icons.wallet} showArrow={true} textStyle="" />
      </View>
      <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
        {settings.slice(2).map((setting, index) => (
          <SettingsItem key={index} {...setting} />
        ))}
      </View>
      <View className="flex flex-col mt-5 pt-5 border-t border-primary-200">
        <SettingsItem
          title="Log out"
          icon={icons.logout}
          showArrow={false}
          textStyle="text-danger"
          onPress={handleLogout}
        />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
