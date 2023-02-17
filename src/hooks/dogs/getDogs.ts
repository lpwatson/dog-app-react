import { UseQueryResult, useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { Dogs } from "../../types";

const getDogs = async () => {
  const data = await axios.get('http://localhost:3001/dogs')
  return data;
}

const useDogs = (): UseQueryResult<Dogs, AxiosError> => {
  return useQuery({
    queryKey: ["dogs"],
    queryFn: async () => await getDogs(),
})
}

export default useDogs;