import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55158990-7244be83249386c7e2b523135";

export async function fetchImages(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data;
}