import Search from "@/components/Home/Search";
import Filters from "@/components/UI/Filters";
import RecommendedCard from "@/components/UI/RecommendedCard";
import icons from "@/constants/icons";
import { filterRecommendationsByCategory } from "@/utils/helpers/helpers";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Explore() {
  const { query } = useLocalSearchParams<{ query?: string }>();
  const { filter = "All" } = useLocalSearchParams<{ filter?: string }>();

  const filteredRecommendations = useMemo(() => {
    // First filter by category
    const categoryFiltered = filterRecommendationsByCategory(filter);

    // Then filter by search query if it exists
    if (!query || query.trim() === "") {
      return categoryFiltered;
    }

    return categoryFiltered.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, filter]);

  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        data={filteredRecommendations}
        ListHeaderComponent={
          <View>
            <View className="flex flex-row items-center justify-between">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>
              <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">
                Search For Your Ideal Home
              </Text>
              <TouchableOpacity className="w-6 h-6">
                <Image source={icons.bell} className="size-5" />
              </TouchableOpacity>
            </View>
            <Search />
            <Filters />
          </View>
        }
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <RecommendedCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-[20px] pb-20"
        columnWrapperClassName="gap-[12px]"
      />
    </SafeAreaView>
  );
}

export default Explore;
