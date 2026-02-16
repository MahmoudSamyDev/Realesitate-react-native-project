import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function AppLayout() {
  const isLogedIn = false;
  const isLoading = false;

  if (isLoading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }
  if (isLogedIn) {
    return <Redirect href="/explore" />;
  }
  if (!isLogedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}

export default AppLayout;
