import { FeaturedCard } from "@/components/UI/Cards";
import { featuredCards } from "@/constants/data";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

function Featured() {
  return (
    <>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
          <TouchableOpacity onPress={() => router.push("/explore")}>
            <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={featuredCards}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => <FeaturedCard data={item} />}
      />
    </>
  );
}

export default Featured;
