import icons from "@/constants/icons";
import { useWatchlist } from "@/lib/WatchlistContext";
import { SignleFeaturedCard_TP } from "@/utils/Types/appartments";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

function RecommendedCard({ data }: { data: SignleFeaturedCard_TP }) {
  const { isWatchlisted } = useWatchlist();
  const isInWatchlist = isWatchlisted(data.id);

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

      <View className="flex flex-col mt-2 flex-1">
        <View className="flex-1">
          <Text className="text-base font-rubik-bold text-black-300">{data?.title}</Text>
          <Text className="text-xs font-rubik text-black-100">{data?.location}</Text>
        </View>

        <View className="flex flex-row items-center justify-between mt-2 ">
          <Text className="text-base font-rubik-bold text-primary-300">{data?.price}</Text>
          <Image
            source={icons.heart}
            className="size-5 mr-2"
            tintColor={isInWatchlist ? "#F75555" : "#191D31"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RecommendedCard;
