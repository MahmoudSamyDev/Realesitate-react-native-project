import icons from "@/constants/icons";
import {
  Image,
  Linking,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface HelpCenterModalProps {
  visible: boolean;
  onClose: () => void;
}

const helpCategories = [
  {
    id: "1",
    title: "Booking & Reservations",
    icon: icons.calendar,
    topics: [
      "How to book a property",
      "Cancellation policy",
      "Modify your booking",
      "Payment methods",
    ],
  },
  {
    id: "2",
    title: "Account & Profile",
    icon: icons.person,
    topics: ["Update profile info", "Reset password", "Verify your account", "Delete account"],
  },
  {
    id: "3",
    title: "Property Listings",
    icon: icons.home,
    topics: ["Search filters", "Save favorites", "Property details", "Availability calendar"],
  },
  {
    id: "4",
    title: "Payments & Refunds",
    icon: icons.wallet,
    topics: ["Payment issues", "Refund status", "Add payment method", "Transaction history"],
  },
];

const contactOptions = [
  {
    id: "1",
    title: "Live Chat",
    subtitle: "Available 24/7",
    icon: icons.chat,
    action: "chat",
  },
  {
    id: "2",
    title: "Email Support",
    subtitle: "support@realestate.app",
    icon: icons.send,
    action: "email",
  },
  {
    id: "3",
    title: "Call Us",
    subtitle: "+1 (555) 123-4567",
    icon: icons.phone,
    action: "phone",
  },
];

function HelpCenterModal({ visible, onClose }: HelpCenterModalProps) {
  const handleContactAction = (action: string) => {
    switch (action) {
      case "email":
        Linking.openURL("mailto:support@realestate.app");
        break;
      case "phone":
        Linking.openURL("tel:+15551234567");
        break;
      case "chat":
        // Open live chat - would integrate with chat service
        console.log("Opening live chat...");
        break;
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-center items-center px-5">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
              {/* Header */}
              <View className="bg-primary-300 px-6 py-5">
                <View className="flex flex-row items-center justify-between">
                  <View className="flex-1">
                    <Text className="text-2xl font-rubik-bold text-white">Help Center</Text>
                    <Text className="text-sm font-rubik text-white/90 mt-1">
                      We&apos;re here to help you
                    </Text>
                  </View>
                  <TouchableOpacity onPress={onClose} className="bg-white/20 rounded-full p-2 ml-3">
                    <Image source={icons.backArrow} className="size-4" tintColor="#FFF" />
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView
                className="max-h-[500px]"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 24 }}
              >
                {/* Quick Contact Section */}
                <View className="mb-6">
                  <Text className="text-base font-rubik-bold text-black-300 mb-3">
                    Contact Support
                  </Text>
                  {contactOptions.map((option) => (
                    <TouchableOpacity
                      key={option.id}
                      onPress={() => handleContactAction(option.action)}
                      className="flex flex-row items-center bg-accent-100 rounded-xl p-4 mb-2 border border-primary-100"
                      activeOpacity={0.7}
                    >
                      <View className="bg-primary-300 rounded-full p-2.5">
                        <Image source={option.icon} className="size-5" tintColor="#FFF" />
                      </View>
                      <View className="flex-1 ml-3">
                        <Text className="text-base font-rubik-bold text-black-300">
                          {option.title}
                        </Text>
                        <Text className="text-sm font-rubik text-black-200">{option.subtitle}</Text>
                      </View>
                      <Image source={icons.rightArrow} className="size-4" tintColor="#666876" />
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Help Categories */}
                <View className="mb-4">
                  <Text className="text-base font-rubik-bold text-black-300 mb-3">
                    Browse Topics
                  </Text>
                  {helpCategories.map((category) => (
                    <View
                      key={category.id}
                      className="mb-4 p-4 bg-white rounded-xl border border-primary-100"
                    >
                      <View className="flex flex-row items-center mb-3">
                        <View className="bg-primary-100 rounded-lg p-2">
                          <Image source={category.icon} className="size-5" tintColor="#0061FF" />
                        </View>
                        <Text className="text-base font-rubik-bold text-black-300 ml-3">
                          {category.title}
                        </Text>
                      </View>
                      {category.topics.map((topic, index) => (
                        <TouchableOpacity
                          key={index}
                          className="flex flex-row items-center py-2"
                          activeOpacity={0.7}
                        >
                          <View className="w-1.5 h-1.5 rounded-full bg-primary-300 mr-2" />
                          <Text className="flex-1 text-sm font-rubik text-black-200">{topic}</Text>
                          <Image source={icons.rightArrow} className="size-3" tintColor="#8C8E98" />
                        </TouchableOpacity>
                      ))}
                    </View>
                  ))}
                </View>

                {/* FAQ Quick Link */}
                <TouchableOpacity className="flex flex-row items-center justify-center bg-primary-100 py-4 rounded-full border-2 border-primary-300">
                  <Image source={icons.info} className="size-5 mr-2" tintColor="#0061FF" />
                  <Text className="text-base font-rubik-bold text-primary-300">View All FAQs</Text>
                </TouchableOpacity>

                {/* Info Footer */}
                <View className="mt-6 p-4 bg-accent-100 rounded-xl">
                  <Text className="text-xs font-rubik text-black-200 text-center leading-5">
                    Our support team typically responds within 2-4 hours during business hours
                    (9AM-6PM EST)
                  </Text>
                </View>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default HelpCenterModal;
