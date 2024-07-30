import "./App.css";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

function App() {
  const fetchUser = async () => {
    const { data } = await axios.get("/posts");
    return data;
  };

  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  console.log("data", data);

  return <div>jaksdf</div>;
}

export default App;
