import { NavLink, Outlet } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { GiMeal } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { FaPlateWheat } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const isAdmin = useAdmin();
   
    return (
        <div className="flex">
            <div className="w-80 min-h-screen bg-[#e85d04] py-16 px-3">
                <h2 className="text-[rgb(21,21,21)] font-greate text-4xl text-center font-bold mb-10">AuraFeastForge</h2>
                <ul className=" menu p-4 bg-transparent text-[#151515] font-cinzel">

                    {
                        isAdmin[0] ? <>

                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/adminprofile"><IoSettings></IoSettings> Admin Profile</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/users"><IoIosPeople></IoIosPeople>Manage Users</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/addmeal"><ImSpoonKnife></ImSpoonKnife>Add meal</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/allmeal"><FaListUl></FaListUl>All meals</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/allreview"><MdRateReview></MdRateReview> All reviews</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/serve"><FaPlateWheat></FaPlateWheat> serve meals</NavLink></li>
                            <li className=" font-medium	text-xl"><NavLink to="/dashboard/upcoming"><GiHotMeal></GiHotMeal>Upcoming meals</NavLink></li>


                        </> :
                            <>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/profile"><IoSettings></IoSettings> My Profile</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/requestedmeal"><GiMeal></GiMeal>Requested Meals</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/myreview"><VscPreview></VscPreview>My Reviews</NavLink></li>

                            </>
                    }

                    <div className="divider bg-white h-1"></div>


                    <li className=" font-medium	text-xl"><NavLink to="/"><TiHome></TiHome> Home</NavLink></li>
                   

                </ul>

            </div>


            <div className="flex-1 bg-[#F6F6F6] ">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default DashBoard;