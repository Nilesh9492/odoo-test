import React, { useEffect, useState } from "react";
import RoomsList from "../components/RoomsList";
import Availability from "../components/Availability";
import { fetchRooms } from "../services/roomsService";

const Rooms = ({ roomsList }: any) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      name: "Room1",
      availability: "currently available",
      projector: true,
      sound: true,
      capacity: 150,
    },
    {
      name: "Room2",
      availability: "available after 30 min",
      projector: true,
      sound: true,
      capacity: 5,
    },
    {
      name: "Room3",
      availability: "currently available",
      projector: true,
      sound: false,
      capacity: 15,
    },
    {
      name: "Room5",
      availability: "available at tomorrow",
      projector: false,
      sound: true,
      capacity: 1000,
    },
  ];

  const handleSelectRoom = (room: any) => {
    setSelectedRoom(room);
  };

  const handleBook = () => {
    // Booking logic
    alert("Room booked!");
  };
  return (
    <div className="availability">
      <RoomsList rooms={roomsList} onSelectRoom={handleSelectRoom} />
      <Availability room={selectedRoom} onBook={handleBook} />
    </div>
  );
};

export default Rooms;
