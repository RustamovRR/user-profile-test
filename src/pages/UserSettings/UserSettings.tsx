import { Button, Input } from "@components";

const UserSettings = () => {
  return (
    <div className="mx-auto h-full w-3/5 bg-[rgb(17,24,39)] text-white p-4 pt-10">
      <div className="flex justify-between gap-8">
        <section className="w-2/5">
          <h2 className="text-lg">Personal Information</h2>
          <p className="text-sm text-gray-400">Use a permanent address where you can receive mail.</p>
        </section>

        <section className="flex flex-1 flex-col gap-4">
          <div className="flex items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="w-24 h-24 rounded-lg"
            />
            <div className="flex flex-col">
              <Button buttonType="secondary">Change Avatar</Button>
              <small className="text-gray-300">JPG, GIF or PNG. 1MB max.</small>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6">
            <div className="w-full">
              <label htmlFor="firstName">First name</label>
              <Input id="firstName" className="mt-1" />
            </div>
            <div className="w-full">
              <label htmlFor="lastName">Last name</label>
              <Input id="lastName" className="mt-1" />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <Input id="email" className="mt-1" />
            </div>
          </div>

          <div>
            <div className="w-full">
              <label htmlFor="username">Username</label>
              <Input
                id="username"
                className="mt-1"
                placeholder="e.g @johnWick"
              />
            </div>
          </div>

          <Button className="mt-4">Save</Button>
        </section>
      </div>
    </div>
  );
};

export default UserSettings;
