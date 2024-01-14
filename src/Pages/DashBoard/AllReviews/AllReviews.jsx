import { useQuery } from "@tanstack/react-query";
// import useReview from "../../../Hooks/useReview";
import { MdSetMeal } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllReviews = () => {

    // const [review] = useReview();
    const axiosSecure = useAxiosSecure();

    const { data: allreview = [] } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/allreview")
            return res.data;
        }
    })

   
    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center font-bold text-3xl font-greate mb-5 text-[#370617]">All Review</h2>


            <div className="overflow-x-auto px-16">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#faa307] text-white h-16">
                            <th></th>
                            <th>Meal Title</th>
                            <th>Name</th>
                            <th>Review</th>
                            <th>View Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allreview.map((review, index) => <tr key={review._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {review.meal}
                                </td>
                                <td>
                                    {review.name}
                                </td>
                                <td>
                                    {review.review}
                                </td>
                               
                                <th>
                                    <Link>
                                        <button
                                            className="btn   bg-[#B91C1C] text-white rounded-lg"><MdSetMeal className="text-xl"></MdSetMeal></button>
                                    </Link>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllReviews;