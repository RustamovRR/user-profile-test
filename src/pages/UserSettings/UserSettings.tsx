import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Button, Input, Select, Spinner, Textarea } from "@components";
import { useCountriesQuery, useProfileQuery } from "@hooks";
import { ISelectOption, IUser } from "@types";
import { useProfileUpdateMutation } from "@hooks";
import { getUserDataFromStorage } from "@utils";
import toast from "react-hot-toast";

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

const UserSettings = () => {
  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const [fields, setFields] = useState(initialState);
  const [avatar, setAvatar] = useState<string | null>(null);
  const { data: profileData, isLoading: profileDataLoading } =
    useProfileQuery();
  const { data: countries } = useCountriesQuery();
  const {
    mutateAsync: profileUpdateMutation,
    isPending: profileUpdatePending,
  } = useProfileUpdateMutation();
  const { firstName, lastName, email, username, bio, country, city, address } =
    fields;

  useEffect(() => {
    if (profileData) {
      setFields({
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
        setFields(userData);
        setAvatar(userData.avatar);
      }
    }
  }, [profileData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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

  const handlePhotoInputClick = () => {
    photoInputRef.current?.click();
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        setAvatar(base64data);
      };
      reader.readAsDataURL(file);
    }
  };

  const countryOptions = (countries || [])?.map(({ name }) => ({
    label: name,
    value: name,
  })) as ISelectOption[];

  if (profileDataLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto h-full w-full flex justify-center text-white p-4 pt-10">
      <div className="w-1/2 flex justify-between gap-8">
        <form className="flex flex-1 flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex items-center gap-8">
            <img src={avatar || ""} alt="" className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex flex-col">
              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <Button buttonType="secondary" onClick={handlePhotoInputClick}>
                Change Avatar
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="w-full">
              <label htmlFor="firstName">First name</label>
              <Input
                id="firstName"
                className="mt-1"
                placeholder="John"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName">Last name</label>
              <Input
                id="lastName"
                className="mt-1"
                placeholder="Wick"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                className="mt-1"
                placeholder="johnwick@gmail.com"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="username">Username</label>
              <Input
                id="username"
                className="mt-1"
                placeholder="@johnWick"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="bio">Bio</label>
              <Textarea
                placeholder="Bio..."
                className="mt-1"
                name="bio"
                value={bio}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="country">Country</label>
              <Select
                options={countryOptions}
                id="country"
                className="mt-1"
                name="country"
                value={country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="w-full">
              <label htmlFor="city">City</label>
              <Input
                id="city"
                className="mt-1"
                placeholder="Tashkent"
                name="city"
                value={city}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="address">Address</label>
              <Input
                id="address"
                className="mt-1"
                placeholder="Yakkasaray, st 11"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="mt-4"
            disabled={profileUpdatePending}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
