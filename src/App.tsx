import "./App.css";
import { useProfileQuery } from "./hooks";

function App() {
  const { data } = useProfileQuery();

  return <div>{data?.address.city}</div>;
}

export default App;
