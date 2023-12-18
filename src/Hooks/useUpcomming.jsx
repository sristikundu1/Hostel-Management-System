import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUpcomming = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: upcomming = [] } = useQuery({
        queryKey: ['upcomming'],
        queryFn: async () => {
            const res = await axiosSecure.get("/upcoming")
            return res.data;
        }
    })
    return [upcomming, refetch]
};

export default useUpcomming;