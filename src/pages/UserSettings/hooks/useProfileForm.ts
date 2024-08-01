import { useEffect } from "react";
import { z, ZodType } from "zod";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "@types";
import { useProfileQuery, useProfileUpdateMutation } from "@hooks";
import { getUserDataFromStorage } from "@utils";

interface Props {
  avatar: string | null;
  setAvatar: (avatar: string | null) => void;
}

const initialState: Partial<IUser> = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  bio: "",
  country: "",
  city: "",
  address: "",
};

const useProfileForm = ({ avatar, setAvatar }: Props) => {
  const { data: profileData, isLoading: profileDataLoading } =
    useProfileQuery();
  const {
    mutateAsync: profileUpdateMutation,
    isPending: profileUpdatePending,
  } = useProfileUpdateMutation();

  const userSchema: ZodType<Partial<IUser>> = z.object({
    firstName: z.string().min(3, "First name is required"),
    lastName: z.string().min(3, "Last name is required"),
    email: z.string().email("Invalid email address"),
    username: z.string().min(3, "Username is required"),
    bio: z.string().optional(),
    country: z.string().min(1, "Country is required"),
    city: z.string().optional(),
    address: z.string().optional(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: initialState,
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (profileData) {
      reset({
        firstName: profileData.firstName || "",
        lastName: profileData.lastName || "",
        email: profileData.email || "",
        bio: profileData.bio || "",
        country: profileData?.country || "",
        city: profileData?.city || "",
        address: profileData?.address || "",
      });
      setAvatar(profileData.avatar || "");
    } else {
      const userData = getUserDataFromStorage();
      if (userData) {
        reset(userData);
        setAvatar(userData.avatar);
      }
    }
  }, [profileData, reset]);

  const onSubmit: SubmitHandler<Partial<IUser>> = async (fields) => {
    try {
      const updatedData = { ...fields, avatar: avatar as string };
      const updatePromise = profileUpdateMutation(updatedData);

      toast.promise(updatePromise, {
        loading: "Updating profile...",
        success: "Profile updated succesfully!",
        error: "Profile didn't update. Something went wrong!",
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    errors,
    control,
    reset,
    profileDataLoading,
    profileUpdatePending,
  };
};

export default useProfileForm;
