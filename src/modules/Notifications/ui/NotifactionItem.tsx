import { useEffect, type FC } from "react";
import { dotClass } from "../model/notification.classes";
import type { INotification } from "../model/notification.interfaces";

type INotificationItemProps = INotification & {
  onRemove: (id: string) => void;
};

export const NotificationItem: FC<INotificationItemProps> = ({
  id,
  type,
  message,
  onRemove,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <li className="flex items-start gap-2.5 rounded-lg border border-gray-200 bg-white px-3.5 py-3 shadow-sm animate-[slideIn_0.2s_ease]">
      <div
        className={`h-1.5 w-1.5 shrink-0 rounded-full mt-1.25 ${dotClass[type] || dotClass.info}`}
      />

      <span className="flex-1 text-[13px] leading-relaxed text-gray-800">
        {message}
      </span>

      <button
        type="button"
        onClick={() => onRemove(id)}
        className="shrink-0 text-lg leading-none text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-0 p-0 cursor-pointer"
      >
        ×
      </button>
    </li>
  );
};
