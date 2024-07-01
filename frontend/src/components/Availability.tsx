import React, { useState } from "react";
import { Calendar, Button, Modal, Badge } from "antd";
import moment from "moment";

const Availability = ({ room, onBook }: any) => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const timeSlots = [
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "11:30 - 12:00",
    "12:00 - 12:30",
    "2:00 - 2:30",
    "2:30 - 3:00",
    "3:00 - 3:30",
    "3:30 - 4:00",
    "4:00 - 4:30",
    "4:30 - 5:00",
    "5:00 - 5:30",
    "5:30 - 6:00",
    "6:00 - 6:30",
    "6:30 - 7:00",
  ];

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); // Reset time slot selection when date changes
  };

  const handleTimeSlotSelect = (slot: any) => {
    setSelectedTimeSlot(slot);
  };

  const handleBook = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    onBook();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!room) return <div>Select a room to see details</div>;

  return (
    <div className="room-details">
      <h2>{room.name}</h2>
      <div className="calendar-container">
        <Calendar fullscreen={false} onSelect={handleDateSelect} />
        <Button
          type="primary"
          onClick={handleBook}
          disabled={!selectedTimeSlot}
        >
          Book
        </Button>
      </div>
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <Button
            key={index}
            type={selectedTimeSlot === slot ? "primary" : "default"}
            onClick={() => handleTimeSlotSelect(slot)}
            disabled={slot === "3:00 - 3:30" || slot === "4:00 - 4:30"} // Example of booked slots
          >
            {slot}
          </Button>
        ))}
      </div>

      <Modal
        title="Confirm Booking"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Room: {room.name}</p>
        <p>Date: {selectedDate.format("YYYY-MM-DD")}</p>
        <p>Time: {selectedTimeSlot}</p>
      </Modal>
    </div>
  );
};

export default Availability;
