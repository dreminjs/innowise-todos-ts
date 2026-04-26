import { useNotificationsSlice } from "../model/notification.slice";
import { NotificationItem } from "./NotifactionItem";

export const NotificationList = () => {
  const { notifications, removeNotification } = useNotificationsSlice();

  const handleRemove = (id: string) => {
    removeNotification(id);
  };

  return (
    <ul className="fixed bottom-6 right-6 z-1000 flex w-75 flex-col gap-2">
      {notifications.map((item) => (
        <NotificationItem {...item} key={item.id} onRemove={handleRemove} />
      ))}
    </ul>
  );
};
