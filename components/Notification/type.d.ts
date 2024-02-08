export type Notification = {
  id: number;
  user_id: number;
  category: "comment" | "likes" | "reminder";
  title: string;
  message: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  created_by: User;
  room_confession: RoomConfession;
};

export type createNotificationDto = {
  title: string;
  message: string;
  category: "comment" | "likes" | "reminder";
  user_id: number;
};

export type getAllNotificationDto = {
  page_number: number;
  limit: number;
  user_id: number;
};
