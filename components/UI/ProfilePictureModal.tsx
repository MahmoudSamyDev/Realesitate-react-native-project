import icons from "@/constants/icons";
import * as ImagePicker from "expo-image-picker";
import {
  Alert,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface ProfilePictureModalProps {
  visible: boolean;
  onClose: () => void;
  onImageSelected: (uri: string) => void;
  currentImage?: string;
}

function ProfilePictureModal({
  visible,
  onClose,
  onImageSelected,
  currentImage,
}: ProfilePictureModalProps) {
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera roll permissions to change your profile picture.",
        [{ text: "OK" }],
      );
      return false;
    }
    return true;
  };

  const pickImageFromGallery = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
      onClose();
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Sorry, we need camera permissions to take a photo.", [
        { text: "OK" },
      ]);
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      onImageSelected(result.assets[0].uri);
      onClose();
    }
  };

  const removePhoto = () => {
    Alert.alert("Remove Photo", "Are you sure you want to remove your profile picture?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => {
          onImageSelected("");
          onClose();
        },
      },
    ]);
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-end">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-t-3xl p-6">
              {/* Header */}
              <View className="flex-row items-center justify-between mb-6">
                <Text className="text-2xl font-rubik-bold text-black-300">
                  Change Profile Picture
                </Text>
                <TouchableOpacity onPress={onClose}>
                  <Text className="text-3xl text-black-200">×</Text>
                </TouchableOpacity>
              </View>

              {/* Options */}
              <View className="gap-3">
                {/* Take Photo */}
                <TouchableOpacity
                  onPress={takePhoto}
                  className="flex-row items-center gap-4 p-4 bg-accent-100 rounded-2xl active:scale-95"
                >
                  <View className="w-12 h-12 bg-primary-100 rounded-full items-center justify-center">
                    <Image source={icons.send} className="w-6 h-6" tintColor="#0061FF" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-rubik-semibold text-black-300">Take Photo</Text>
                    <Text className="text-sm font-rubik text-black-200 mt-0.5">
                      Use your camera to take a new photo
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Choose from Gallery */}
                <TouchableOpacity
                  onPress={pickImageFromGallery}
                  className="flex-row items-center gap-4 p-4 bg-accent-100 rounded-2xl active:scale-95"
                >
                  <View className="w-12 h-12 bg-primary-100 rounded-full items-center justify-center">
                    <Image source={icons.filter} className="w-6 h-6" tintColor="#0061FF" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-rubik-semibold text-black-300">
                      Choose from Gallery
                    </Text>
                    <Text className="text-sm font-rubik text-black-200 mt-0.5">
                      Select a photo from your library
                    </Text>
                  </View>
                </TouchableOpacity>

                {/* Remove Photo (only show if there's a current image) */}
                {currentImage && (
                  <TouchableOpacity
                    onPress={removePhoto}
                    className="flex-row items-center gap-4 p-4 bg-accent-100 rounded-2xl active:scale-95"
                  >
                    <View className="w-12 h-12 bg-danger/10 rounded-full items-center justify-center">
                      <Text className="text-2xl font-rubik-bold text-danger">×</Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-base font-rubik-semibold text-danger">
                        Remove Photo
                      </Text>
                      <Text className="text-sm font-rubik text-black-200 mt-0.5">
                        Use default profile picture
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>

              {/* Cancel Button */}
              <TouchableOpacity
                onPress={onClose}
                className="mt-6 border-2 border-primary-300 rounded-full py-4 active:scale-95"
              >
                <Text className="text-primary-300 font-rubik-semibold text-center text-base">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default ProfilePictureModal;
