import { ChangeEvent, useMemo, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { useCountriesQuery } from "@hooks";
import { Button, Input, Select, Spinner, Textarea } from "@components";
import { useProfileForm } from "./hooks";

const UserSettings = () => {
  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const [avatar, setAvatar] = useState<string | null>(null);
  const { data: countries } = useCountriesQuery();

  const {
    handleSubmit,
    errors,
    control,
    profileDataLoading,
    profileUpdatePending,
  } = useProfileForm({
    avatar,
    setAvatar,
  });

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

  const countryOptions = useMemo(
    () =>
      (countries || [])?.map(({ name }) => ({
        label: name,
        value: name,
      })),
    [countries]
  );

  if (profileDataLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto h-full w-full flex justify-center text-white p-4 pt-10">
      <div className="w-1/2 flex justify-between gap-8 max-md:w-full">
        <form className="flex flex-1 flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex items-center gap-8 max-2xs:flex-col">
            <img
              src={avatar || ""}
              alt=""
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <Input
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

          <div className="flex items-center justify-between gap-6 max-xs:flex-col">
            <div className="w-full">
              <label htmlFor="firstName">First name</label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      id="firstName"
                      className="mt-1"
                      placeholder="John"
                      error={errors?.firstName?.message}
                    />
                  </>
                )}
              />
            </div>
            <div className="w-full">
              <label htmlFor="lastName">Last name</label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="lastName"
                    className="mt-1"
                    placeholder="Wick"
                    error={errors?.lastName?.message}
                  />
                )}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="email"
                    className="mt-1"
                    placeholder="johnwick@gmail.com"
                    error={errors?.email?.message}
                  />
                )}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="username">Username</label>
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    className="mt-1"
                    placeholder="@johnWick"
                    error={errors?.username?.message}
                  />
                )}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="bio">Bio</label>
              <Controller
                name="bio"
                control={control}
                render={({ field }) => (
                  <Textarea placeholder="Bio..." className="mt-1" {...field} />
                )}
              />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="country">Country</label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={countryOptions}
                    id="country"
                    className="mt-1"
                    error={errors?.country?.message}
                  />
                )}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 max-xs:flex-col">
            <div className="w-full">
              <label htmlFor="city">City</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="city"
                    className="mt-1"
                    placeholder="Tashkent"
                  />
                )}
              />
            </div>
            <div className="w-full">
              <label htmlFor="address">Address</label>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="address"
                    className="mt-1"
                    placeholder="Yakkasaray, st 11"
                  />
                )}
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
