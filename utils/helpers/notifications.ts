import icons from "@/constants/icons";
import type { NotificationType } from "@/utils/Types/notifications";

export function getNotificationIcon(type: NotificationType) {
  switch (type) {
    case "booking":
      return icons.calendar;
    case "payment":
      return icons.wallet;
    case "alert":
      return icons.bell;
    case "update":
      return icons.info;
    case "promo":
      return icons.star;
    default:
      return icons.bell;
  }
}

export function getNotificationIconBg(type: NotificationType) {
  switch (type) {
    case "booking":
      return "bg-primary-100";
    case "payment":
      return "bg-primary-100";
    case "alert":
      return "bg-primary-100";
    case "update":
      return "bg-primary-100";
    case "promo":
      return "bg-primary-100";
    default:
      return "bg-primary-100";
  }
}
