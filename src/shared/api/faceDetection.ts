import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const detectEmotion = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axios.post(`${BASE_URL}/detect`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data; // { statusCode: 0, statusMessage: "string", message: "string" }
  } catch (error) {
    console.error("Error detecting emotion:", error);
    throw error;
  }
};