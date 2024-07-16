// roomService.js
import api from "./index";

// Fetch list of rooms
export const fetchRooms = async () => {
  try {
    const response = await api.get("/rooms");
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};

// Fetch details of a specific room by ID
export const fetchRoomDetails = async (roomId: number) => {
  try {
    const response = await api.get(`/rooms/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching room details:", error);
    throw error;
  }
};

// Book a room
export const bookRoom = async (roomId: number, bookingDetails: number) => {
  try {
    const response = await api.post(`/rooms/${roomId}/book`, bookingDetails);
    return response.data;
  } catch (error) {
    console.error("Error booking room:", error);
    throw error;
  }
};

export const getSearchRoomsReq = (payload: any) => {
  console.log("pay", payload);
  return api({
    method: "POST",
    url: `rooms`,
    data: {
      ...payload,
    },
  });
};
