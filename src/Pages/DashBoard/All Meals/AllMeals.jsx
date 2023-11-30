// import UseMeal from "../../../Hooks/UseMeal";/
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdSetMeal } from "react-icons/md";
import useFood from "../../../Hooks/useFood";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllMeals = () => {
    const [allmeal,refetch] = useFood();
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
                axiosSecure.delete(`/meals/${id}`)
                    .then(res => {
                       if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                       }
                    })

            }
        });

    }

    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">All Meal</h2>

            <div className=" bg-[#FFF] border mx-16 ">
                <div className="flex justify-start mt-24 bg-[#FFF] pl-14 py-10">
                    <h2 className="text-[#151515] font-bold text-4xl font-cinzel ">Total Meals:{allmeal.length} </h2>
                </div>

                <div className="overflow-x-auto px-16">

                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#faa307] text-white h-16">
                                <th></th>
                                <th>Meal Title</th>
                                <th>Number of Likes</th>
                                <th>Number of Reviews count</th>
                                <th>Distributor Name</th>
                                <th>Distributor Email</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>View Meal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allmeal.map((food, index) => <tr key={food._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {food.title}
                                    </td>
                                    <td>
                                        {food.count}
                                    </td>
                                    <td>
                                    {food.name}
                                    </td>
                                    <td>
                                    {food.email}
                                    </td>
                                    <td>
                                        <button
                                            // onClick={() => handleDelete(user)}
                                            className="btn   bg-[#B91C1C] text-white rounded-lg"><FaRegEdit className="text-xl"></FaRegEdit></button>
                                    </td>
                                    <th>


                                        <button
                                            onClick={() => handleDelete(food._id)}
                                            className="btn   bg-[#B91C1C] text-white rounded-lg"><RiDeleteBin6Fill className="text-xl"></RiDeleteBin6Fill></button>
                                    </th>
                                    <th>

                                        <button
                                            className="btn   bg-[#B91C1C] text-white rounded-lg"><MdSetMeal className="text-xl"></MdSetMeal></button>

                                    </th>
                                </tr>)
                            }


                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default AllMeals;