export type RoomConfession = {
  id: number;
  user_id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  created_by: User;
  confession: Confession[];
};

export type createRoomConfessionDto = {
  user_id: number;
  title: string;
  description: string;
};

export type updateRoomConfessionDto = {
  id: number;
  user_id: number;
  title: string;
  description: string;
};

export type getAllRoomConfessionDto = {
  user_id?: number;
  page_number: number;
  limit: number;
  search: string;
  search_by: "title";
  sort: "ASC" | "DESC";
};
