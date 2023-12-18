import { RiDeleteBin6Fill } from "react-icons/ri";
import useReview from "../../../Hooks/useReview";
import { FaRegEdit } from "react-icons/fa";
import { MdSetMeal } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyReview = () => {

    

    const [review, refetch] = useReview();
    const axiosSecure = useAxiosSecure();


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/review/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center font-bold text-3xl font-greate mb-5 text-[#370617]">My Review</h2>


            <div className="overflow-x-auto px-16">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#faa307] text-white h-16">
                            <th></th>
                            <th>Meal Title</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map((review, index) => <tr key={review._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {review.meal}
                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleDelete(user)}
                                        className="btn   bg-[#B91C1C] text-white rounded-lg"><FaRegEdit className="text-xl"></FaRegEdit></button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(review._id)}
                                        className="btn   bg-[#B91C1C] text-white rounded-lg"><RiDeleteBin6Fill className="text-xl"></RiDeleteBin6Fill></button>
                                </td>
                                <th>
                                    <Link >
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

export default MyReview;