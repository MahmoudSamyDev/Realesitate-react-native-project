import icons from "@/constants/icons";
import { getCardColor, getCardIcon } from "@/utils/helpers/helpers";
import { Image, Text, TouchableOpacity, View } from "react-native";
interface PaymentCardProps {
  type: "visa" | "mastercard" | "paypal" | "apple-pay";
  cardNumber: string;
  cardHolder?: string;
  expiryDate?: string;
  isDefault?: boolean;
  onPress?: () => void;
  onEdit?: () => void;
}

function PaymentCard({
  type,
  cardNumber,
  cardHolder,
  expiryDate,
  isDefault = false,
  onPress,
  onEdit,
}: PaymentCardProps) {
  return (
    <TouchableOpacity
      className="flex flex-col mt-4 p-5 rounded-2xl bg-white shadow-lg shadow-black-100/70 border border-primary-100"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <View className={`${getCardColor(type)} p-2 rounded-xl`}>
            <Image source={getCardIcon(type)} className="w-12 h-8" resizeMode="contain" />
          </View>
          <View className="ml-3">
            <Text className="text-base font-rubik-bold text-black-300">
              {type === "visa"
                ? "Visa"
                : type === "mastercard"
                  ? "Mastercard"
                  : type === "paypal"
                    ? "PayPal"
                    : "Apple Pay"}
            </Text>
            <Text className="text-sm font-rubik text-black-200">{cardNumber}</Text>
          </View>
        </View>

        {isDefault && (
          <View className="bg-primary-300 px-3 py-1.5 rounded-full mt-10">
            <Text className="text-xs font-rubik-bold text-white">Default</Text>
          </View>
        )}
      </View>

      {cardHolder && expiryDate && (
        <View className="flex flex-row items-center justify-between mt-4 pt-4 border-t border-primary-100">
          <View>
            <Text className="text-xs font-rubik text-black-100 uppercase">Card Holder</Text>
            <Text className="text-sm font-rubik-medium text-black-300 mt-1">{cardHolder}</Text>
          </View>
          <View>
            <Text className="text-xs font-rubik text-black-100 uppercase">Expires</Text>
            <Text className="text-sm font-rubik-medium text-black-300 mt-1">{expiryDate}</Text>
          </View>
        </View>
      )}

      <View className="absolute top-5 right-5">
        <TouchableOpacity
          className="bg-primary-100 rounded-full p-2"
          onPress={(e) => {
            e.stopPropagation();
            onEdit?.();
          }}
        >
          <Image source={icons.edit} className="size-4" tintColor="#0061FF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default PaymentCard;
