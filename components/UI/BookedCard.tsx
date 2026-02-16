import icons from "@/constants/icons";
import { SignleFeaturedCard_TP } from "@/utils/Types/appartments";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

function BookedCard({ data }: { data: SignleFeaturedCard_TP }) {
  return (
    <TouchableOpacity
      className="flex flex-row items-center mt-4 p-3 rounded-xl bg-white shadow-md shadow-black-100/50"
      onPress={() => router.push(`/properties/${data?.id}`)}
    >
      {/* Image Section */}
      <View className="relative">
        <Image
          source={{ uri: data?.image }}
          className="w-28 h-28 rounded-lg"
          style={{ width: 112, height: 112 }}
        />
        <View className="flex flex-row items-center absolute top-2 left-2 bg-white/95 px-2 py-1 rounded-full">
          <Image source={icons.star} className="size-2.5" />
          <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">{data?.rating}</Text>
        </View>
      </View>

      {/* Details Section */}
      <View className="flex-1 flex flex-col justify-between ml-3 py-1">
        <View>
          <Text numberOfLines={2} className="text-base font-rubik-bold text-black-300">
            {data?.title}
          </Text>
          <View className="flex flex-row items-center mt-1">
            <Image source={icons.location} className="size-3" tintColor="#666876" />
            <Text numberOfLines={1} className="text-xs font-rubik text-black-200 ml-1">
              {data?.location}
            </Text>
          </View>
        </View>
        <Text className="text-lg font-rubik-bold text-primary-300 mt-2">{data?.price}</Text>
      </View>

      {/* Favorite Icon Section */}
      <View className="flex items-center justify-center ml-2">
        <TouchableOpacity className="bg-primary-100 rounded-full p-2.5">
          <Image source={icons.heart} className="size-5" tintColor="#0061FF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default BookedCard;
