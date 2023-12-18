import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: request = [] } = useQuery({
        queryKey: ['request'],
        queryFn: async () => {
            const res = await axiosSecure.get("/allrequest")
            return res.data;
        }
    })
    return [request, refetch]
};

export default useAllRequest;