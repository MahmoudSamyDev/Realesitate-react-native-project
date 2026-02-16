import icons from "@/constants/icons";
import images from "@/constants/images";
import { Redirect } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SignIn() {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogin() {
    setIsAuth(true);
  }

  if (isAuth) return <Redirect href="/explore" />;

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to ReState
          </Text>
          <Text className="font-rubik-bold text-3xl mt-2 text-center text-black-300">
            Let&apos;s get you closer {"\n"} To
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg text-center uppercase font-rubik text-black-200 mt-12">
            Login to Real Scout with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;
