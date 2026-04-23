import axios from "axios";

export const DragonBallData = async () => {
  try {
    const apiResponse = await axios.get("http://localhost:8000/");
    return apiResponse.data.items;
  } catch (error) {
    console.log(`The error in API Fetch is ${JSON.stringify(error)}`);
  }
};
