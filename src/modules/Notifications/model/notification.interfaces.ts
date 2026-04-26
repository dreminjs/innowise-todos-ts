export type TNotificationType = "success" | "error" | "info";

export interface INotification {
  id: string;
  type: TNotificationType;
  message: string;
}

export interface INotificationSlice {
  notifications: INotification[];
  addNotification: (notification: TCreateNotification) => void;
  removeNotification: (id: string) => void;
}

export type TCreateNotification = Omit<INotification, "id">;
