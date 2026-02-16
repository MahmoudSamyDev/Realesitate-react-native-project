import icons from "@/constants/icons";
import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface LanguageModalProps {
  visible: boolean;
  onClose: () => void;
}

const languages = [
  {
    id: "en",
    name: "English",
    nativeName: "English",
    icon: "🇺🇸",
  },
  {
    id: "ar",
    name: "Arabic",
    nativeName: "العربية",
    icon: "🇸🇦",
  },
];

function LanguageModal({ visible, onClose }: LanguageModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
  };

  const handleSave = () => {
    // Future: Implement actual language switching logic here
    console.log("Selected language:", selectedLanguage);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-center items-center px-5">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
              {/* Header */}
              <View className="flex flex-row items-center justify-between mb-5">
                <View className="flex-1">
                  <Text className="text-2xl font-rubik-bold text-black-300">Select Language</Text>
                  <Text className="text-sm font-rubik text-black-200 mt-1">
                    Choose your preferred language
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={onClose}
                  className="bg-primary-100 rounded-full p-2 ml-3"
                >
                  <Image source={icons.backArrow} className="size-4" tintColor="#0061FF" />
                </TouchableOpacity>
              </View>

              {/* Language Options */}
              <View className="mb-6">
                {languages.map((language) => (
                  <TouchableOpacity
                    key={language.id}
                    onPress={() => handleLanguageSelect(language.id)}
                    className={`flex flex-row items-center p-4 rounded-xl mb-3 border-2 ${
                      selectedLanguage === language.id
                        ? "bg-primary-100 border-primary-300"
                        : "bg-accent-100 border-primary-100"
                    }`}
                    activeOpacity={0.7}
                  >
                    {/* Flag/Icon */}
                    <View className="bg-white rounded-full size-12 flex items-center justify-center mr-4">
                      <Text className="text-2xl">{language.icon}</Text>
                    </View>

                    {/* Language Names */}
                    <View className="flex-1">
                      <Text className="text-lg font-rubik-bold text-black-300">
                        {language.name}
                      </Text>
                      <Text className="text-sm font-rubik text-black-200 mt-0.5">
                        {language.nativeName}
                      </Text>
                    </View>

                    {/* Selection Indicator */}
                    <View
                      className={`size-6 rounded-full border-2 flex items-center justify-center ${
                        selectedLanguage === language.id
                          ? "border-primary-300 bg-primary-300"
                          : "border-black-100 bg-white"
                      }`}
                    >
                      {selectedLanguage === language.id && (
                        <View className="size-3 rounded-full bg-white" />
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Info Message */}
              <View className="bg-accent-100 rounded-xl p-4 mb-6 border border-primary-100">
                <View className="flex flex-row items-start">
                  <Image source={icons.info} className="size-5 mt-0.5 mr-2" tintColor="#0061FF" />
                  <Text className="flex-1 text-sm font-rubik text-black-200">
                    Changing the language will update all text throughout the app. Some content may
                    require an app restart.
                  </Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View className="flex flex-row gap-3">
                <TouchableOpacity
                  onPress={onClose}
                  className="flex-1 bg-primary-100 py-3.5 rounded-full"
                >
                  <Text className="text-center text-base font-rubik-bold text-primary-300">
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSave}
                  className="flex-1 bg-primary-300 py-3.5 rounded-full"
                >
                  <Text className="text-center text-base font-rubik-bold text-white">Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default LanguageModal;
