import PaymentCard from "@/components/UI/PaymentCard";
import PaymentEditModal from "@/components/UI/PaymentEditModal";
import icons from "@/constants/icons";
import { routeToNotifications, routeToProfile } from "@/utils/helpers/helpers";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Placeholder payment methods data
const paymentMethods = [
  {
    id: "1",
    type: "visa" as const,
    cardNumber: "**** **** **** 4532",
    cardHolder: "Mahmoud Samy",
    expiryDate: "12/26",
    isDefault: true,
  },
  {
    id: "2",
    type: "mastercard" as const,
    cardNumber: "**** **** **** 8791",
    cardHolder: "Mahmoud Samy",
    expiryDate: "09/25",
    isDefault: false,
  },
  {
    id: "3",
    type: "paypal" as const,
    cardNumber: "mahmoud.samy@email.com",
    cardHolder: undefined,
    expiryDate: undefined,
    isDefault: false,
  },
  {
    id: "4",
    type: "apple-pay" as const,
    cardNumber: "Apple Pay",
    cardHolder: undefined,
    expiryDate: undefined,
    isDefault: false,
  },
];

function Payments() {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<(typeof paymentMethods)[0] | null>(null);

  const handleEditPayment = (payment: (typeof paymentMethods)[0]) => {
    setSelectedPayment(payment);
    setEditModalVisible(true);
  };

  const handleSavePayment = (data: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    isDefault: boolean;
  }) => {
    console.log("Saving payment data:", data);
    setEditModalVisible(false);
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerClassName="px-[20px] pb-32" showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={routeToProfile}
              className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center mr-3"
            >
              <Image source={icons.backArrow} className="size-5" />
            </TouchableOpacity>
            <Text className="text-xl font-rubik-bold text-black-300">Payment Methods</Text>
          </View>
          <TouchableOpacity onPress={routeToNotifications}>
            <Image source={icons.bell} className="size-6" />
          </TouchableOpacity>
        </View>

        <View className="mt-7">
          <Text className="text-base font-rubik text-black-200">
            Manage your payment methods for bookings
          </Text>
        </View>

        <View className="flex flex-col mt-2">
          {paymentMethods.map((payment) => (
            <PaymentCard
              key={payment.id}
              type={payment.type}
              cardNumber={payment.cardNumber}
              cardHolder={payment.cardHolder}
              expiryDate={payment.expiryDate}
              isDefault={payment.isDefault}
              onPress={() => {
                // Handle payment method selection
              }}
              onEdit={() => handleEditPayment(payment)}
            />
          ))}
        </View>

        <TouchableOpacity className="flex flex-row items-center justify-center bg-primary-100 py-4 rounded-full mt-6 border-2 border-primary-300 border-dashed">
          <Image source={icons.wallet} className="size-6" tintColor="#0061FF" />
          <Text className="text-base font-rubik-bold text-primary-300 ml-2">
            Add New Payment Method
          </Text>
        </TouchableOpacity>

        <View className="mt-8 p-5 bg-accent-100 rounded-2xl border border-primary-100">
          <View className="flex flex-row items-start">
            <Image source={icons.shield} className="size-6 mt-1" tintColor="#0061FF" />
            <View className="flex-1 ml-3">
              <Text className="text-base font-rubik-bold text-black-300">Secure Payments</Text>
              <Text className="text-sm font-rubik text-black-200 mt-1">
                Your payment information is encrypted and secure. We never store your full card
                details.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Payment Edit Modal */}
      {selectedPayment && (
        <PaymentEditModal
          visible={editModalVisible}
          onClose={() => setEditModalVisible(false)}
          paymentType={
            selectedPayment.type === "visa"
              ? "Visa"
              : selectedPayment.type === "mastercard"
                ? "Mastercard"
                : selectedPayment.type === "paypal"
                  ? "PayPal"
                  : "Apple Pay"
          }
          cardNumber={selectedPayment.cardNumber}
          cardHolder={selectedPayment.cardHolder}
          expiryDate={selectedPayment.expiryDate}
          onSave={handleSavePayment}
        />
      )}
    </SafeAreaView>
  );
}

export default Payments;
