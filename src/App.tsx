import { lazy, Suspense, useEffect } from "react";
import { INITIAL_USER_DATA } from "@constants";
import { getUserDataFromStorage, saveUserDataToStorage } from "@utils";
import { Spinner } from "@components";

const UserSettings = lazy(() => import("./pages/UserSettings"));

function App() {
  const userData = getUserDataFromStorage();

  useEffect(() => {
    if (!userData) {
      saveUserDataToStorage(INITIAL_USER_DATA);
    }
  }, [userData]);

  return (
    <div className="flex min-h-screen  w-full items-center justify-center bg-[rgb(17,24,39)]">
      <Suspense fallback={<Spinner />}>
        <UserSettings />
      </Suspense>
    </div>
  );
}

export default App;
