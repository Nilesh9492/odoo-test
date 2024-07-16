import { useEffect, useState } from "react";
import { fetchRooms } from "../roomsService";

export const useLoadRooms = () => {
  const [roomsList, setRoomsList] = useState([]);
  const loadRooms = async () => {
    try {
      const roomsData = await fetchRooms();
      setRoomsList(roomsData);
      console.log("rooms", roomsData);
    } catch (error) {
      console.error("Error loading rooms:", error);
    }
  };
  useEffect(() => {
    loadRooms();
  }, []);

  return { roomsList };
};
