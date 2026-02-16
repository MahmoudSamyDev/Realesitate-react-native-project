import icons from "@/constants/icons";
import images from "@/constants/images";
import { SignleFeaturedCard_TP } from "@/utils/Types/appartments";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function FeaturedCard({ data }: { data: SignleFeaturedCard_TP }) {
  return (
    <TouchableOpacity
      className="flex flex-col items-start w-60 h-80 relative"
      onPress={() => router.push(`/properties/${data?.id}`)}
    >
      <Image source={{ uri: data.image }} className="size-full rounded-2xl" />
      <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">{data?.rating}</Text>
      </View>
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text numberOfLines={1} className="text-xl font-rubik-extrabold text-white">
          {data?.title}
        </Text>
        <Text numberOfLines={1} className="text-base font-rubik text-white">
          {data?.location}
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-extrabold text-white">{data?.price}</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export function Card({ data }: { data: SignleFeaturedCard_TP }) {
  return (
    <TouchableOpacity
      className="flex flex-col mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
      style={{ width: "48%" }}
      onPress={() => router.push(`/properties/${data?.id}`)}
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">{data?.rating}</Text>
      </View>

      <Image
        source={{ uri: data?.image }}
        className="w-full h-40 rounded-lg"
        style={{ width: "100%" }}
      />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-rubik-bold text-black-300">{data?.title}</Text>
        <Text className="text-xs font-rubik text-black-100">{data?.location}</Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">{data?.price}</Text>
          <Image source={icons.heart} className="size-5 mr-2" tintColor="#191D31" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
