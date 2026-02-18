import { allProperties } from "@/constants/data";
import icons from "@/constants/icons";
import { useWatchlist } from "@/lib/WatchlistContext";
import { routeToProfile } from "@/utils/helpers/helpers";
import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
function Watchlist() {
  const { watchlist, toggleWatchlist } = useWatchlist();

  // Filter properties that are in the watchlist
  const watchlistedProperties = allProperties.filter((property) => watchlist.has(property.id));

  const handleWatchlistToggle = (propertyId: string, e: any) => {
    e.stopPropagation();
    e.preventDefault();
    toggleWatchlist(propertyId);
  };

  return (
    <SafeAreaView className="h-full bg-accent-100">
      <View className="flex flex-row items-center px-5 py-4 bg-accent-100">
        <TouchableOpacity onPress={routeToProfile}>
          <Image source={icons.backArrow} className="w-6 h-6" />
        </TouchableOpacity>
        <Text className="text-2xl font-rubik-bold text-black-300 ml-4">My Watchlist</Text>
      </View>

      {watchlistedProperties.length === 0 ? (
        <View className="flex-1 items-center justify-center p-10">
          <Image source={icons.heart} className="w-24 h-24 mb-4" tintColor="#8C8E98" />
          <Text className="text-xl font-rubik-bold text-black-300 text-center">
            No properties in your watchlist
          </Text>
          <Text className="text-base font-rubik text-black-200 text-center mt-2">
            Start adding properties to your watchlist by tapping the heart icon
          </Text>
          <TouchableOpacity
            className="bg-primary-300 rounded-full px-8 py-4 mt-6"
            onPress={() => router.back()}
          >
            <Text className="text-white font-rubik-semibold">Browse Properties</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={watchlistedProperties}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="bg-white rounded-2xl shadow-md shadow-black/10 p-4 mx-5 mb-4"
              onPress={() => router.push(`/properties/${item.id}`)}
            >
              <View className="flex-row gap-4">
                <Image source={{ uri: item.image }} className="w-24 h-24 rounded-xl" />
                <View className="flex-1">
                  <View className="flex-row items-start justify-between">
                    <View className="flex-1 pr-2">
                      <Text className="text-base font-rubik-semibold text-black-300">
                        {item.title}
                      </Text>
                      <Text className="text-sm font-rubik text-black-200 mt-1">
                        {item.location}
                      </Text>
                      <View className="flex-row items-center gap-2 mt-2">
                        <View className="flex-row items-center gap-1">
                          <Image source={icons.star} className="w-3.5 h-3.5" />
                          <Text className="text-xs font-rubik-medium text-black-300">
                            {item.rating}
                          </Text>
                        </View>
                        <View className="flex-row items-center px-3 py-1 bg-primary-100 rounded-full">
                          <Text className="text-xs font-rubik-medium text-primary-300">
                            {item.category}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={(e) => handleWatchlistToggle(item.id, e)}
                      className="p-2"
                    >
                      <Image source={icons.heart} className="w-5 h-5" tintColor="#F75555" />
                    </TouchableOpacity>
                  </View>
                  <Text className="text-lg font-rubik-bold text-primary-300 mt-2">
                    {item.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          contentContainerClassName="py-4"
        />
      )}
    </SafeAreaView>
  );
}

export default Watchlist;
