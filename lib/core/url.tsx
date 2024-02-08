const url = {
  auth: {
    login: "/auth/login/",
    refresh: "/user/login/refresh/",
    logout: "/auth/logout/",
  },
  user: {
    basicRoute: "/user/",
    me: "/user/me/",
    register: "/user/register/",
    getAllUser: "/user/all/",
  },
  confession: {
    basicRoute: "/confession/",
    create: "/confession/create/",
    getAllConfession: "/confession/all/",
    setLike: "/confession/likes/",
  },
  roomConfession: {
    basicRoute: "/room-confession/",
    create: "/room-confession/",
    getAllRoomConfession: "/room-confession/",
  },
  notification: {
    basicRoute: "/notification/",
    create: "/notification/create/",
    getAllNotification: "/notification/all/",
    markAsRead: "/notification/",
    markAllAsRead: "/notification/mark-all-as-read/",
  },
  files: {
    basicRoute: "/files/",
    upload: "/files/upload/",
  },
};

export default url;
