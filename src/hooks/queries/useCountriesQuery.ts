import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ICountry } from "@types";
import { COUNTRIES_API } from "@constants";

const useCountriesQuery = () => {
  const fetchCountries = async (): Promise<ICountry[]> => {
    const { data } = await axios.get(COUNTRIES_API);
    return data;
  };

  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });
};

export default useCountriesQuery;
