
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useFood = () => {
    const axiosSecure = useAxiosSecure();
  
    const { refetch, data: allmeal = [] } = useQuery({
        queryKey: ['allmeal'],
        queryFn: async () => {
            const res = await axiosSecure.get("/meals")
            return res.data;
        }
    })
    return [allmeal, refetch]
};

export default useFood;