import axios from "axios";

import { API, BASE_URL } from "../constants";
import { Appeal } from "../types";

export const getAppeals = async () => {
  try {
    const response = await axios.get<Appeal[]>(`${BASE_URL}/${API.APPEALS}`);

    return response.data;
  } catch (error: any) {
    console.error(
      "Fetching error:",
      error.response?.data?.message || "Something went wrong"
    );
  }
};
