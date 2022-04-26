import { useQuery } from "react-query";
import { getUser } from "./services";

export const useGetUser = () => {
  return useQuery("getUsers", getUser);
};
