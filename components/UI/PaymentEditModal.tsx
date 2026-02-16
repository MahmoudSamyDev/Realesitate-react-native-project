import icons from "@/constants/icons";
import { useState } from "react";
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface PaymentEditModalProps {
  visible: boolean;
  onClose: () => void;
  paymentType: string;
  cardNumber: string;
  cardHolder?: string;
  expiryDate?: string;
  onSave: (data: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    isDefault: boolean;
  }) => void;
}

function PaymentEditModal({
  visible,
  onClose,
  paymentType,
  cardNumber: initialCardNumber,
  cardHolder: initialCardHolder,
  expiryDate: initialExpiryDate,
  onSave,
}: PaymentEditModalProps) {
  const [cardNumber, setCardNumber] = useState(initialCardNumber);
  const [cardHolder, setCardHolder] = useState(initialCardHolder || "");
  const [expiryDate, setExpiryDate] = useState(initialExpiryDate || "");
  const [isDefault, setIsDefault] = useState(false);

  function handleSave() {
    onSave({ cardNumber, cardHolder, expiryDate, isDefault });
    onClose();
  }

  function handleDelete() {
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-center items-center px-5">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
              {/* Header */}
              <View className="flex flex-row items-center justify-between mb-5">
                <Text className="text-xl font-rubik-bold text-black-300">Edit {paymentType}</Text>
                <TouchableOpacity onPress={onClose} className="bg-primary-100 rounded-full p-2">
                  <Image source={icons.backArrow} className="size-4" tintColor="#0061FF" />
                </TouchableOpacity>
              </View>

              {/* Card Number */}
              <View className="mb-4">
                <Text className="text-sm font-rubik-medium text-black-200 mb-2">Card Number</Text>
                <TextInput
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  placeholder="**** **** **** ****"
                  className="bg-accent-100 border border-primary-100 rounded-xl px-4 py-3 text-base font-rubik text-black-300"
                  placeholderTextColor="#8C8E98"
                />
              </View>

              {/* Card Holder */}
              <View className="mb-4">
                <Text className="text-sm font-rubik-medium text-black-200 mb-2">
                  Card Holder Name
                </Text>
                <TextInput
                  value={cardHolder}
                  onChangeText={setCardHolder}
                  placeholder="John Doe"
                  className="bg-accent-100 border border-primary-100 rounded-xl px-4 py-3 text-base font-rubik text-black-300"
                  placeholderTextColor="#8C8E98"
                />
              </View>

              {/* Expiry Date */}
              <View className="mb-4">
                <Text className="text-sm font-rubik-medium text-black-200 mb-2">Expiry Date</Text>
                <TextInput
                  value={expiryDate}
                  onChangeText={setExpiryDate}
                  placeholder="MM/YY"
                  className="bg-accent-100 border border-primary-100 rounded-xl px-4 py-3 text-base font-rubik text-black-300"
                  placeholderTextColor="#8C8E98"
                  maxLength={5}
                />
              </View>

              {/* Set as Default */}
              <TouchableOpacity
                onPress={() => setIsDefault(!isDefault)}
                className="flex flex-row items-center mb-6"
              >
                <View
                  className={`w-6 h-6 rounded-md border-2 mr-3 flex items-center justify-center ${isDefault ? "bg-primary-300 border-primary-300" : "border-primary-200"}`}
                >
                  {isDefault && <Image source={icons.star} className="size-4" tintColor="#FFF" />}
                </View>
                <Text className="text-base font-rubik text-black-300">
                  Set as default payment method
                </Text>
              </TouchableOpacity>

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
                  <Text className="text-center text-base font-rubik-bold text-white">
                    Save Changes
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Delete Option */}
              <TouchableOpacity onPress={handleDelete} className="mt-4 py-2">
                <Text className="text-center text-sm font-rubik-medium text-danger">
                  Delete Payment Method
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default PaymentEditModal;
