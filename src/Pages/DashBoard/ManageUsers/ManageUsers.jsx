import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoIosPeople } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({

        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })

    
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }



    return (
        <div className="max-w-6xl mx-auto my-16">

            <h2 className="text-center font-bold text-3xl font-greate mb-5 text-[#370617]">All Users</h2>

            <div className=" bg-[#FFF] border mx-16 ">
                <div className="flex justify-start mt-24 bg-[#FFF] pl-14 py-10">
                    <h2 className="text-[#151515] font-bold text-4xl font-cinzel ">Total users:  {users.length}</h2>
                </div>

                <div className="overflow-x-auto px-16">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#faa307] text-white h-16">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Subscription Status(Membership)
</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn   bg-[#faa307] text-white rounded-lg"><IoIosPeople className="text-xl"></IoIosPeople></button>
                                        }
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

        </div>
    );
};

export default ManageUsers;