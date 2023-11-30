import  { useEffect, useState } from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseMeal = () => {
 const axiosPublic = useAxiosPublic();
    const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('meal.json')
            .then(res => res.json())
            .then(data => {

                setMeal(data)
                setLoading(false)
            })
    }, [])
    return [meal, loading]


    // const { data: menu = [],isPending: loading, refetch } = useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/meals')
    //         return res.data;
    //     }
    // })
    // return [menu, loading,refetch]

};

export default UseMeal;