import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Rooms from "./containers/Rooms";
import { fetchRooms } from "./services/roomsService";

function App() {
  const [roomsList, setRoomsList] = useState([]);
  useEffect(() => {
    const loadRooms = async () => {
      try {
        const roomsData = await fetchRooms();
        setRoomsList(roomsData);
        console.log("rooms", roomsData);
      } catch (error) {
        console.error("Error loading rooms:", error);
      }
    };
    loadRooms();
  }, []);
  return (
    <div className="App">
      <SearchBar />
      {roomsList && roomsList.length > 0 && <Rooms roomsList={roomsList} />}
    </div>
  );
}

export default App;
