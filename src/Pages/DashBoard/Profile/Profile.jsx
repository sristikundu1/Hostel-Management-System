import UseAuth from "../../../Hooks/UseAuth";
import { SlBadge } from "react-icons/sl";

const Profile = () => {
    const { user } = UseAuth()
    return (

        <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">My Profile</h2>
            <div className="flex flex-row justify-center items-center">
                <div>
                    <img className="w-44  h-48 rounded-xl" src={user?.photoURL} alt="" />

                    <h2 className="font-mono text-xl mt-4">Name:{user?.displayName}</h2>
                    <h2 className="font-mono text-xl mt-4">Email:{user?.email}</h2>
                    <h2 className="font-bold font-mono text-xl mt-4 mb-6">Badge:</h2>
                    <p className="font-bold ">Bronge <SlBadge className="text-6xl font-bold text-[#CD7F32]"></SlBadge></p>


                </div>

            </div>

        </div>

    );
};

export default Profile;