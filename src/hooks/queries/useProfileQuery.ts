import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUser } from "../../types";

const useProfileQuery = () => {
  const fetchUser = async (): Promise<IUser> => {
    const { data } = await axios.get("/profile");
    return data;
  };

  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchUser,
  });
};

export default useProfileQuery;
