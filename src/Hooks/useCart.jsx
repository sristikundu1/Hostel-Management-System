
import { useQuery } from '@tanstack/react-query';
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = UseAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/request?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;