import api from ".";

// sessionService.js
export const checkAndStoreSession = () => {
  const sessionKey = "userSession";
  const currentSession = localStorage.getItem(sessionKey);

  if (!currentSession) {
    const sessionData = {
      sessionId: generateSessionId(),
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(sessionKey, JSON.stringify(sessionData));
    console.log("New session stored:", sessionData);
  } else {
    try {
    } catch (error) {
      console.error("Error loading rooms:", error);
    }
    console.log("Existing session:", JSON.parse(currentSession));
  }
};

const generateSessionId = () => {
  return "xxxx-xxxx-4xxx-yxxx-xxxx-xxxx-xxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const createSession = async () => {
  try {
    const response = await api.post("/session", generateSessionId);
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};

export const findSession = async () => {
  try {
    const response = await api.get("/session");
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  }
};
