import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity } from "react-native";

function Filters() {
  const params = useLocalSearchParams<{ filter?: string }>();
  const selectedCategory = params?.filter || "All";

  function handleCategoryPress(category: string) {
    if (selectedCategory === category) {
      router.setParams({ filter: "All" });
      return;
    }
    router.setParams({ filter: category });
  }
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mt-3 mb-3">
      {categories?.map((singleCategory, index) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(singleCategory?.category)}
          key={index}
          className={`flex flex-col items-start mr-4 py-2 px-4 rounded-full ${singleCategory?.category === selectedCategory ? "bg-primary-300" : "bg-primary-100"}`}
        >
          <Text
            className={`text-sm ${singleCategory?.category === selectedCategory ? "text-white font-rubik-bold mt-0.5" : "text-black-300 font-rubik"}`}
          >
            {singleCategory?.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default Filters;
