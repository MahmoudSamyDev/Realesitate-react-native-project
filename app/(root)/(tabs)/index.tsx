import Header from "@/components/Home/Header";
import Featured from "@/components/Home/Sections/Featured";
import Recommendation from "@/components/Home/Sections/Recommendation";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerClassName="px-[20px]" showsVerticalScrollIndicator={false}>
        <Header />
        <Featured />
        <Recommendation />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
