import HelpCenterModal from "@/components/UI/HelpCenterModal";
import InviteFriendsModal from "@/components/UI/InviteFriendsModal";
import LanguageModal from "@/components/UI/LanguageModal";
import ProfilePictureModal from "@/components/UI/ProfilePictureModal";
import SettingsItem from "@/components/UI/SettingItem";
import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useAuth } from "@/lib/AuthContext";
import { routeToNotifications } from "@/utils/helpers/helpers";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile() {
  const { logout } = useAuth();
  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const [helpCenterModalVisible, setHelpCenterModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [profilePictureModalVisible, setProfilePictureModalVisible] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  function handleLogout() {
    logout();
  }

  function handleNavigateToBookings() {
    router.push("/bookings");
  }

  function handleNavigateToPayments() {
    router.push("/payments");
  }

  function handleNavigateToWatchlist() {
    router.push("/watchlist");
  }

  function handleInviteFriends() {
    setInviteModalVisible(true);
  }

  function handleHelpCenter() {
    setHelpCenterModalVisible(true);
  }

  function handleLanguage() {
    setLanguageModalVisible(true);
  }

  function handleChangeProfilePicture() {
    setProfilePictureModalVisible(true);
  }

  function handleImageSelected(uri: string) {
    if (uri) {
      setProfileImage(uri);
    } else {
      // Reset to default image
      setProfileImage(null);
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="px-7" showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <TouchableOpacity onPress={routeToNotifications}>
            <Image source={icons.bell} className="size-6" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={profileImage ? { uri: profileImage } : images.PersonalImg}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity
              className="absolute bottom-11 right-2"
              onPress={handleChangeProfilePicture}
            >
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold mt-2">Mahmoud Samy</Text>
          </View>
        </View>
        <View className="flex flex-col mt-10">
          <SettingsItem
            title="My Bookings"
            icon={icons.calendar}
            showArrow={true}
            textStyle=""
            onPress={handleNavigateToBookings}
          />
          <SettingsItem
            title="My Watchlist"
            icon={icons.heart}
            showArrow={true}
            textStyle=""
            onPress={handleNavigateToWatchlist}
          />
          <SettingsItem
            title="Payments"
            icon={icons.wallet}
            showArrow={true}
            textStyle=""
            onPress={handleNavigateToPayments}
          />
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((setting, index) => (
            <SettingsItem
              key={index}
              {...setting}
              onPress={
                setting.title === "Invite Friends"
                  ? handleInviteFriends
                  : setting.title === "Help Center"
                    ? handleHelpCenter
                    : setting.title === "Language"
                      ? handleLanguage
                      : undefined
              }
            />
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

        {/* Profile Picture Modal */}
        <ProfilePictureModal
          visible={profilePictureModalVisible}
          onClose={() => setProfilePictureModalVisible(false)}
          onImageSelected={handleImageSelected}
          currentImage={profileImage || undefined}
        />

        {/* Invite Friends Modal */}
        <InviteFriendsModal
          visible={inviteModalVisible}
          onClose={() => setInviteModalVisible(false)}
        />

        {/* Help Center Modal */}
        <HelpCenterModal
          visible={helpCenterModalVisible}
          onClose={() => setHelpCenterModalVisible(false)}
        />

        {/* Language Modal */}
        <LanguageModal
          visible={languageModalVisible}
          onClose={() => setLanguageModalVisible(false)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
