export type User = {
  id: number;
  tempId?: string;
  avatar?: string;
  username: string;
  password?: string;
  email: string;
  last_login: string;
  created_at: string;
  updated_at: string;
  is_admin: boolean;
  liked_confession: number[];
  confession: Confession[];
  notifications: Notification[];
  room_confession: RoomConfession[];
};

export type loginUserDTO = {
  email: string;
  username: string;
  password: string;
};

export type registerUserDTO = {
  username: string;
  email: string;
  password: string;
  is_admin: boolean;
};

export type editUserDTO = {
  username: string;
  email: string;
};
