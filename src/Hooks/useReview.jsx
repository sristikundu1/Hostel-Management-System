
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useReview = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = UseAuth();
    const { refetch, data: review = [] } = useQuery({
        queryKey: ['review', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/review?email=${user.email}`)
            return res.data;
        }
    })
    return [review, refetch]
};

export default useReview;