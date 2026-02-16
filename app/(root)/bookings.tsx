import BookedCard from "@/components/UI/BookedCard";
import { recommendations } from "@/constants/data";
import icons from "@/constants/icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Bookings() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerClassName="px-[20px] pb-32" showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={() => router.push("/profile")}
              className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center mr-3"
            >
              <Image source={icons.backArrow} className="size-5" />
            </TouchableOpacity>
            <Text className="text-xl font-rubik-bold text-black-300">My Bookings</Text>
          </View>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="mt-7">
          <Text className="text-base font-rubik text-black-200 mb-2">
            You have {recommendations.slice(0, 6).length} active bookings
          </Text>
        </View>

        <View className="flex flex-col">
          {recommendations.slice(0, 6).map((card) => (
            <BookedCard key={card.id} data={card} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Bookings;
