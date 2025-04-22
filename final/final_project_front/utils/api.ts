import { Guestbook } from "@/types/guestbook";
import axios from "axios";

const API_URL = "http://localhost:3001";

export const getGuestbooks = async (): Promise<Guestbook[]> => {
  const response = await axios.get(`${API_URL}/guestbook`);
  return response.data;
};

export const createGuestbook = async (
  guestbook: Pick<Guestbook, "author" | "content">
) => {
  const response = await axios.post(`${API_URL}/guestbook`, guestbook);
  return response;
};

export const getGuestbook = async (id: string) => {
  const response = await axios.get(`${API_URL}/guestbook/${id}`);
  return response.data;
};
