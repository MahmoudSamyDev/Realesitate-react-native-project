export type NotificationType = "booking" | "payment" | "alert" | "update" | "promo";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  image?: any;
}
