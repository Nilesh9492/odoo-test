import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Rooms from "./containers/Rooms";
import { useLoadRooms } from "./services/hooks/rooms";
import { useSelector } from "react-redux";

function App() {
  const { searchResult } = useSelector((state: any) => state.roomsReducer);
  return (
    <div className="App">
      <SearchBar />
      {searchResult && searchResult.length > 0 && (
        <Rooms roomsList={searchResult} />
      )}
    </div>
  );
}

export default App;
