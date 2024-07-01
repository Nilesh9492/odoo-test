// RoomList.js
import { Tag } from "antd";
import React from "react";

const RoomList = ({ onSelectRoom, rooms }: any) => {
  return (
    <div className="room-list">
      {rooms &&
        rooms.map((room: any, index: any) => (
          <div key={index} className="room" onClick={() => onSelectRoom(room)}>
            <div className="room-heading">
              <h2>{room.name}</h2>
              <p>{room.features !== "" && <Tag>{room.features}</Tag>}</p>
            </div>
            <div className="room-heading">
              <p>{room.availability}</p>
              <p>Capacity: {room.capacity} seats</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RoomList;
