import { useEffect, useState } from "react";
import { fetchRooms } from "../roomsService";
import { checkAndStoreSession } from "../sessionService";

export const useCheckSession = () => {
  useEffect(() => {
    checkAndStoreSession();
  }, []);
};
