import Comment from "@/components/UI/Comment";
import { allProperties, facilities, propertyGallery, propertyReviews } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useWatchlist } from "@/lib/WatchlistContext";
import { router, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SingleProperty() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const windowHeight = Dimensions.get("window").height;
  const insets = useSafeAreaInsets();
  const { isWatchlisted, toggleWatchlist } = useWatchlist();

  const propertyDetails = allProperties.find((property) => property.id === id);
  const isInWatchlist = isWatchlisted(id || "");

  function handleWatchlistToggle() {
    if (id) {
      toggleWatchlist(id);
    }
  }

  async function handleShare() {
    try {
      await Share.share({
        message: `Check out this amazing property: ${propertyDetails?.title}\nPrice: ${propertyDetails?.price}\nRating: ${propertyDetails?.rating}⭐`,
        title: propertyDetails?.title || "Property Listing",
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  }

  async function handleCall() {
    const phoneNumber = property.agent.phone;
    const phoneUrl = `tel:${phoneNumber}`;

    try {
      const supported = await Linking.canOpenURL(phoneUrl);
      if (supported) {
        await Linking.openURL(phoneUrl);
      } else {
        console.error("Phone calls not supported");
      }
    } catch (error) {
      console.error("Error making call:", error);
    }
  }

  async function handleWhatsApp() {
    const phoneNumber = property.agent.phone.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `Hi ${property.agent.name}, I'm interested in the property "${property.name}" listed at ${property.price}.`,
    );
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;

    try {
      const supported = await Linking.canOpenURL(whatsappUrl);
      if (supported) {
        await Linking.openURL(whatsappUrl);
      } else {
        console.error("WhatsApp not installed");
      }
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
    }
  }

  const property = {
    image: propertyDetails?.image,
    name: propertyDetails?.title,
    type: propertyDetails?.category,
    rating: propertyDetails?.rating,
    reviews: propertyReviews,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    gallery: propertyGallery,
    agent: {
      avatar: images.PersonalImg,
      name: "Mahmoud Samy",
      email: "mahmoud.samy@realtor.com",
      phone: "+1234567890",
    },
    description:
      "This stunning modern family house offers the perfect blend of comfort and style. Located in a quiet neighborhood, it features spacious rooms, high ceilings, and large windows that fill the space with natural light. The open floor plan creates a seamless flow between living areas, making it ideal for both everyday living and entertaining guests.",
    facilities: ["Parking", "WiFi", "Gym", "Pool", "Garden", "Security"],
    address: "1234 Maple Street, Downtown District, New York, NY 10001",
    price: propertyDetails?.price,
  };

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 bg-white">
        <View className="relative w-full" style={{ height: windowHeight / 2 }}>
          <Image source={{ uri: property.image }} className="size-full" resizeMode="cover" />
          <Image source={images.whiteGradient} className="absolute top-0 w-full z-40" />

          <View className="z-50 absolute inset-x-7 top-4">
            <View className="flex flex-row items-center w-full justify-between">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <View className="flex flex-row items-center gap-3">
                <TouchableOpacity onPress={handleWatchlistToggle}>
                  <Image
                    source={icons.heart}
                    className="size-7"
                    tintColor={isInWatchlist ? "#F75555" : "#191D31"}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShare}>
                  <Image source={icons.send} className="size-7" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="px-5 mt-7 flex gap-2">
          <Text className="text-2xl font-rubik-extrabold">{property.name}</Text>

          <View className="flex flex-row items-center gap-3">
            <View className="flex flex-row items-center px-4 py-2 bg-primary-100 rounded-full">
              <Text className="text-xs font-rubik-bold text-primary-300">{property.type}</Text>
            </View>

            <View className="flex flex-row items-center gap-2">
              <Image source={icons.star} className="size-5" />
              <Text className="text-black-200 text-sm mt-1 font-rubik-medium">
                {property.rating} ({property.reviews.length} reviews)
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center mt-5">
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10">
              <Image source={icons.bed} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              {property.bedrooms} Beds
            </Text>
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.bath} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              {property.bathrooms} Baths
            </Text>
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.area} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              {property.area} sqft
            </Text>
          </View>

          <View className="w-full border-t border-primary-200 pt-7 mt-5">
            <Text className="text-black-300 text-xl font-rubik-bold">Agent</Text>

            <View className="flex flex-row items-center justify-between mt-4">
              <View className="flex flex-row items-center">
                <Image source={property.agent.avatar} className="size-14 rounded-full" />

                <View className="flex flex-col items-start justify-center ml-3">
                  <Text className="text-lg text-black-300 text-start font-rubik-bold">
                    {property.agent.name}
                  </Text>
                  <Text className="text-sm text-black-200 text-start font-rubik-medium">
                    {property.agent.email}
                  </Text>
                </View>
              </View>

              <View className="flex flex-row items-center gap-3">
                <TouchableOpacity onPress={handleWhatsApp}>
                  <Image source={icons.chat} className="size-7" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCall}>
                  <Image source={icons.phone} className="size-7" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="mt-7">
            <Text className="text-black-300 text-xl font-rubik-bold">Overview</Text>
            <Text className="text-black-200 text-base font-rubik mt-2">{property.description}</Text>
          </View>

          <View className="mt-7">
            <Text className="text-black-300 text-xl font-rubik-bold">Facilities</Text>

            <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">
              {facilities.map((facility, index) => (
                <View key={index} className="flex flex-1 flex-col items-center min-w-16 max-w-20">
                  <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Image source={facility.icon} className="size-6" />
                  </View>

                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-black-300 text-sm text-center font-rubik mt-1.5"
                  >
                    {facility.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {property.gallery.length > 0 && (
            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">Gallery</Text>
              <FlatList
                contentContainerStyle={{ paddingRight: 20 }}
                data={property.gallery}
                keyExtractor={(item) => item.$id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Image source={{ uri: item.image }} className="size-40 rounded-xl" />
                )}
                contentContainerClassName="flex gap-4 mt-3"
              />
            </View>
          )}

          <View className="mt-7">
            <Text className="text-black-300 text-xl font-rubik-bold">Location</Text>
            <View className="flex flex-row items-center justify-start mt-4 gap-2">
              <Image source={icons.location} className="w-7 h-7" />
              <Text className="text-black-200 text-sm font-rubik-medium w-[300px]">
                {property.address}
              </Text>
            </View>

            <Image source={images.map} className="h-52 w-full mt-5 rounded-xl" />
          </View>

          {property.reviews.length > 0 && (
            <View className="mt-7">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  <Image source={icons.star} className="size-6" />
                  <Text className="text-black-300 text-xl font-rubik-bold ml-2">
                    {property.rating} ({property.reviews.length} reviews)
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text className="text-primary-300 text-base font-rubik-bold">View All</Text>
                </TouchableOpacity>
              </View>

              <View className="my-5">
                <Comment />
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <View
        className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-r border-l border-primary-200 px-7 pt-2"
        style={{ paddingBottom: insets.bottom + 20 }}
      >
        <View className="flex flex-row items-center justify-between gap-10">
          <View className="flex flex-col items-start">
            <Text className="text-black-200 text-xs font-rubik-medium">Price</Text>
            <Text
              numberOfLines={1}
              className="text-primary-300 text-start text-2xl font-rubik-bold"
            >
              {property.price}
            </Text>
          </View>

          <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full shadow-md shadow-zinc-400">
            <Text className="text-white text-lg text-center font-rubik-bold">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SingleProperty;
