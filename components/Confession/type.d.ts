export type Confession = {
  id: number;
  user_id: number;
  room_confession_id: number;
  name: string;
  to: string;
  tags: string[];
  category: string;
  excerpt: string;
  message: string;
  seen: number;
  likes: number;
  replies: object[];
  updated_by: string;
  created_at: string;
  updated_at: string;
  created_by: User;
  room_confession: RoomConfession;
};

export type createConfessionDto = {
  name: string;
  to: string;
  tags: string[];
  category: string;
  excerpt: string;
  message: string;
  seen: number;
  likes: number;
  replies: object[];
  created_from: "public" | "room";
  room_confession_id?: number;
  created_at: string;
  updated_at: string;
  updated_by: string;
};

export type updateConfessionDto = {
  name: string;
  to: string;
  tags: string[];
  category: string;
  message: string;
};

export type getAllConfessionDto = {
  user_id?: number;
  page_number: number;
  limit: number;
  search: string;
  search_by: "name" | "category" | "tags" | "to";
  sort: "ASC" | "DESC";
};

export type likeConfessionDto = {
  id: number;
  is_liked: boolean;
};
