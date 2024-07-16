import { searchTypes } from "./searchTypes";

export const getRoomsList = (payload: any) => ({
  type: searchTypes.GET_ROOM_LIST,
  payload,
});

// export const roomDetails = (payload: { page: number; component: number }) => ({
//   type: searchTypes.CHANGE_SEARCH_RESULT_PAGE,
//   payload,
// });
export const resetSearchRooms = () => ({
  type: searchTypes,
});
