import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUser } from "@types";
import axios from "axios";

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const updateProfile = async (profileData: Partial<IUser>) => {
    const response = await axios.put("/profile", profileData);
    return response.data;
  };

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
};

export default useUpdateProfile;
