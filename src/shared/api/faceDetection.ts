import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const detectEmotion = async (imageBase64: string) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `${BASE_URL}/api/face/detect`,
      { image: imageBase64 },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; 
  } catch (error) {
    console.error("Error detecting emotion:", error);
    throw error;
  }
};
