import { UserSettings } from "@pages";
import { useProfileQuery } from "./hooks";

function App() {
  const { data } = useProfileQuery();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <UserSettings />
    </div>
  );
}

export default App;
