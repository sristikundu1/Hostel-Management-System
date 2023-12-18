import useAllRequest from "../../../Hooks/useAllRequest";
import { MdSetMeal } from "react-icons/md";

const ServeMeals = () => {
    const [request] = useAllRequest()
    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center font-bold text-3xl font-greate mb-5 text-[#370617]">Serve Meals</h2>


            <div className="overflow-x-auto px-16">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#faa307] text-white h-16">
                            <th></th>
                            <th>Meal title</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Serve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            request.map((meal, index) => <tr key={meal._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {meal.meal}
                                </td>
                                <td>
                                    {meal.name}
                                </td>
                                <td>
                                    {meal.email}
                                </td>
                                <td>
                                    {meal.status}
                                </td>
                                <th>
                                    <button
                                        // onClick={() => handleDelete(user)}
                                        className="btn   bg-[#B91C1C] text-white rounded-lg"><MdSetMeal className="text-xl"></MdSetMeal></button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ServeMeals;