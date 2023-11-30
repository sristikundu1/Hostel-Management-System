import useCart from "../../../Hooks/useCart";
import { RiDeleteBin6Fill } from "react-icons/ri";

const RequestedMeal = () => {
    const [cart] = useCart()
    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center font-bold text-3xl font-greate mb-5 text-[#370617]">My Requested Meals</h2>


            <div className="overflow-x-auto px-16">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#faa307] text-white h-16">
                            <th></th>
                            <th>Name</th>
                            <th>Number of Likes</th>
                            <th>Status</th>
                            <th>cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((meal, index) => <tr key={meal._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {meal.meal}
                                </td>
                                <td>
                                    {meal.count}
                                </td>
                                <td>
                                    {meal.status}
                                </td>
                                <th>
                                    <button
                                        // onClick={() => handleDelete(user)}
                                        className="btn   bg-[#B91C1C] text-white rounded-lg"><RiDeleteBin6Fill className="text-xl"></RiDeleteBin6Fill></button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RequestedMeal;