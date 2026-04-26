import type { INotification } from "./notification.interfaces";

export const dotClass: Record<INotification["type"], string> = {
  success: "bg-green-600",
  error: "bg-red-500",
  info: "bg-blue-500",
};
