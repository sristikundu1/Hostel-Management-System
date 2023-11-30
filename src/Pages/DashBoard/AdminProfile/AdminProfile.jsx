import UseAuth from "../../../Hooks/UseAuth";


const AdminProfile = () => {
    const { user } = UseAuth()
    return (
        <div>

<h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">My Profile</h2>
            <div className="flex flex-row justify-center items-center">
                <div>
                    <img className="w-44  h-48 rounded-xl" src={user?.photoURL} alt="" />

                    <h2 className="font-mono text-xl mt-4">Name:{user?.displayName}</h2>
                    <h2 className="font-mono text-xl mt-4">Email:{user?.email}</h2>
                  
                   


                </div>

            </div>
            
        </div>
    );
};

export default AdminProfile;