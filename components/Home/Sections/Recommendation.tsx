import { Card } from "@/components/UI/Cards";
import Filters from "@/components/UI/Filters";
import { filterRecommendationsByCategory } from "@/utils/helpers";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

function Recommendation() {
  const { filter = "All" } = useLocalSearchParams<{ filter?: string }>();

  const filteredRecommendations = filterRecommendationsByCategory(filter);

  return (
    <>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
          <TouchableOpacity onPress={() => router.push("/explore")}>
            <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Filters />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {filteredRecommendations.map((card) => (
            <Card key={card.id} data={card} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default Recommendation;
