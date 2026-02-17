import icons from "@/constants/icons";
import { mockNotifications } from "@/constants/notifications";
import { getNotificationIcon, getNotificationIconBg } from "@/utils/helpers/notifications";
import type { Notification } from "@/utils/Types/notifications";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Notifications() {
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  function handleMarkAsRead(id: string) {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif)),
    );
  }

  function handleMarkAllAsRead() {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, isRead: true })));
  }

  const filteredNotifications = notifications.filter((notif) =>
    filter === "all" ? true : !notif.isRead,
  );

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="px-5 py-4 border-b border-primary-100">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <TouchableOpacity onPress={() => router.back()} className="mr-4">
              <Image source={icons.backArrow} className="size-6" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-bold text-black-300">Notifications</Text>
          </View>
          {unreadCount > 0 && (
            <View className="bg-primary-300 px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-rubik-bold">{unreadCount}</Text>
            </View>
          )}
        </View>

        {/* Filter Tabs */}
        <View className="flex flex-row items-center gap-3 mt-4">
          <TouchableOpacity
            onPress={() => setFilter("all")}
            className={`flex-1 py-2 rounded-full ${
              filter === "all" ? "bg-primary-300" : "bg-primary-100"
            }`}
          >
            <Text
              className={`text-center text-sm font-rubik-medium ${
                filter === "all" ? "text-white" : "text-black-300"
              }`}
            >
              All ({notifications.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilter("unread")}
            className={`flex-1 py-2 rounded-full ${
              filter === "unread" ? "bg-primary-300" : "bg-primary-100"
            }`}
          >
            <Text
              className={`text-center text-sm font-rubik-medium ${
                filter === "unread" ? "text-white" : "text-black-300"
              }`}
            >
              Unread ({unreadCount})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Mark All as Read */}
        {unreadCount > 0 && (
          <TouchableOpacity onPress={handleMarkAllAsRead} className="mt-3 self-end">
            <Text className="text-primary-300 text-sm font-rubik-medium">Mark all as read</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Notifications List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {filteredNotifications.length === 0 ? (
          <View className="flex-1 items-center justify-center py-20">
            <View className="bg-primary-100 rounded-full size-20 items-center justify-center mb-4">
              <Image source={icons.bell} className="size-10" tintColor="#0061FF40" />
            </View>
            <Text className="text-black-300 text-lg font-rubik-bold">
              No {filter === "unread" ? "unread " : ""}notifications
            </Text>
            <Text className="text-black-200 text-sm font-rubik mt-2 text-center px-10">
              {filter === "unread"
                ? "You're all caught up!"
                : "You don't have any notifications yet"}
            </Text>
          </View>
        ) : (
          <View className="px-5 py-3">
            {filteredNotifications.map((notification, index) => (
              <TouchableOpacity
                key={`${notification.id}-${index}`}
                onPress={() => handleMarkAsRead(notification.id)}
                className={`flex flex-row items-start p-4 mb-3 rounded-2xl border ${
                  notification.isRead
                    ? "bg-white border-primary-100"
                    : "bg-accent-100 border-primary-200"
                }`}
              >
                {/* Icon or Image */}
                <View className="mr-3">
                  {notification.image ? (
                    <Image source={notification.image} className="size-12 rounded-xl" />
                  ) : (
                    <View
                      className={`size-12 rounded-xl ${getNotificationIconBg(
                        notification.type,
                      )} items-center justify-center`}
                    >
                      <Image source={getNotificationIcon(notification.type)} className="size-6" />
                    </View>
                  )}
                </View>

                {/* Content */}
                <View className="flex-1">
                  <View className="flex flex-row items-start justify-between mb-1">
                    <Text
                      className={`flex-1 text-base font-rubik-bold ${
                        notification.isRead ? "text-black-200" : "text-black-300"
                      }`}
                    >
                      {notification.title}
                    </Text>
                    {!notification.isRead && (
                      <View className="bg-primary-300 rounded-full size-2.5 ml-2 mt-2" />
                    )}
                  </View>
                  <Text
                    className={`text-sm font-rubik mb-2 ${
                      notification.isRead ? "text-black-100" : "text-black-200"
                    }`}
                    numberOfLines={2}
                  >
                    {notification.message}
                  </Text>
                  <Text className="text-xs font-rubik text-black-100">{notification.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default Notifications;
