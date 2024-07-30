import "./App.css";
import { useProfileQuery } from "./hooks";

function App() {
  const { data } = useProfileQuery();

  return (
    <div>
      {data?.address.city}
      <h1 className="text-red-200">test</h1>
    </div>
  );
}

export default App;
