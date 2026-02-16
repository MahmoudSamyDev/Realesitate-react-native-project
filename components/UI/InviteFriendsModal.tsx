import icons from "@/constants/icons";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface InviteFriendsModalProps {
  visible: boolean;
  onClose: () => void;
}

function InviteFriendsModal({ visible, onClose }: InviteFriendsModalProps) {
  const referralLink = "https://realestate.app/ref/MAHMOUD2024";
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    Clipboard.setStringAsync(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-center items-center px-5">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
              {/* Header */}
              <View className="flex flex-row items-center justify-between mb-4">
                <Text className="text-2xl font-rubik-bold text-black-300">Invite Friends</Text>
                <TouchableOpacity onPress={onClose} className="bg-primary-100 rounded-full p-2">
                  <Image source={icons.backArrow} className="size-4" tintColor="#0061FF" />
                </TouchableOpacity>
              </View>

              {/* Icon Section */}
              <View className="flex items-center justify-center mb-5">
                <View className="bg-primary-100 rounded-full p-6 mb-3">
                  <Image source={icons.people} className="size-12" tintColor="#0061FF" />
                </View>
              </View>

              {/* Description */}
              <View className="mb-6">
                <Text className="text-base font-rubik-bold text-black-300 text-center mb-2">
                  Share the love and earn rewards!
                </Text>
                <Text className="text-sm font-rubik text-black-200 text-center leading-5">
                  Invite your friends to join our platform and both of you will receive exclusive
                  benefits:
                </Text>
              </View>

              {/* Benefits List */}
              <View className="bg-accent-100 rounded-2xl p-4 mb-6">
                <View className="flex flex-row items-start mb-3">
                  <View className="bg-primary-300 rounded-full p-1 mr-3 mt-0.5">
                    <Image source={icons.star} className="size-3" tintColor="#FFF" />
                  </View>
                  <Text className="flex-1 text-sm font-rubik text-black-300">
                    Get <Text className="font-rubik-bold text-primary-300">$50 credit</Text> for
                    each friend who signs up
                  </Text>
                </View>
                <View className="flex flex-row items-start mb-3">
                  <View className="bg-primary-300 rounded-full p-1 mr-3 mt-0.5">
                    <Image source={icons.star} className="size-3" tintColor="#FFF" />
                  </View>
                  <Text className="flex-1 text-sm font-rubik text-black-300">
                    Your friend gets{" "}
                    <Text className="font-rubik-bold text-primary-300">$30 credit</Text> on their
                    first booking
                  </Text>
                </View>
                <View className="flex flex-row items-start">
                  <View className="bg-primary-300 rounded-full p-1 mr-3 mt-0.5">
                    <Image source={icons.star} className="size-3" tintColor="#FFF" />
                  </View>
                  <Text className="flex-1 text-sm font-rubik text-black-300">
                    Unlimited referrals - the more you share, the more you earn!
                  </Text>
                </View>
              </View>

              {/* Referral Link Container */}
              <View className="mb-6">
                <Text className="text-sm font-rubik-medium text-black-200 mb-2">
                  Your Referral Link
                </Text>
                <View className="flex flex-row items-center bg-accent-100 border-2 border-primary-200 rounded-xl px-4 py-3">
                  <Text
                    numberOfLines={1}
                    className="flex-1 text-sm font-rubik-medium text-black-300"
                  >
                    {referralLink}
                  </Text>
                  <TouchableOpacity
                    onPress={handleCopyLink}
                    className="bg-primary-300 rounded-lg px-4 py-2 ml-2"
                  >
                    <Text className="text-sm font-rubik-bold text-white">
                      {copied ? "Copied!" : "Copy"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Share Button */}
              <TouchableOpacity className="flex flex-row items-center justify-center bg-primary-300 py-4 rounded-full">
                <Image source={icons.send} className="size-5 mr-2" tintColor="#FFF" />
                <Text className="text-base font-rubik-bold text-white">Share via Message</Text>
              </TouchableOpacity>

              {/* Info Text */}
              <Text className="text-xs font-rubik text-black-100 text-center mt-4">
                Terms and conditions apply
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default InviteFriendsModal;
