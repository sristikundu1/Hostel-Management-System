import useUpcomming from "../../../Hooks/useUpcomming";
import { MdOutlineFoodBank } from "react-icons/md";

const UpcomingMeal = () => {
    const [upcomming] = useUpcomming()
    return (
        <div>
            <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">Upcoming Meal</h2>

            <div className="overflow-x-auto px-16">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#faa307] text-white h-16">
                            <th></th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Number of Likes</th>
                            <th>Number of Reviews</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            upcomming.map((upmeal, index) => <tr key={upmeal._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-24 h-16">
                                            <img src={upmeal.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {upmeal.title}
                                </td>
                                <td>
                                    {upmeal.like}
                                </td>
                                <td>
                                    {upmeal.review}
                                </td>
                                <th>
                                    <button
                                        className="btn   bg-[#B91C1C] text-white rounded-lg"><MdOutlineFoodBank className="text-xl"></MdOutlineFoodBank></button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default UpcomingMeal;