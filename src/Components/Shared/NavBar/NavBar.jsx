import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsPersonCircle } from "react-icons/bs";
import UseAuth from '../../../Hooks/UseAuth';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = UseAuth()


    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const navItems = <>

        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#dc2f02] font-extrabold " : ''
            }>Home</NavLink></li>
        <li><NavLink
            to="/allmeal"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#dc2f02] font-extrabold" : ''
            }>Meals</NavLink></li>

        <li><NavLink
            to="/dashboard/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" :
                    isActive ? "text-[#dc2f02] font-extrabold  " : ''
            }> <button className="btn bg-transparent -mt-2">
                <img className="w-6" src="https://i.ibb.co/nL372z4/upcoming-meal.png" alt="" />
                <div className="badge badge-outline">+1</div>
            </button></NavLink></li>
    </>

    return (
        <div className="relative">
            <div className="navbar fixed z-10 bg-opacity-30 bg-white text-black py-1 px-7 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img className="w-12 " src="https://i.ibb.co/LQJJxrD/logo.jpg" alt="" />
                    <a className="btn btn-ghost text-2xl font-greate font-bold ">AuraFeastForge</a>
                </div>
                <div className="navbar-center hidden lg:flex pt-2">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                   {
                          user ?
                          <>
                              
                              <img onClick={() => setIsOpen(!isOpen)} className="w-12 h-10 mx-2 mr-4 rounded-full" src={user?.photoURL} alt="" />
      
                              {isOpen && (
                                  <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-4 top-20 text-sm'>
                                      <div className='flex flex-col cursor-pointer'>
                                          <Link
      
                                              className='block disabled px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                          >
                                             {user?.displayName}
                                          </Link>
      
                                          <Link
                                              to='/dashboard'
                                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                          >
                                              Dashboard
                                          </Link>
                                          <Link
                                              to='/signup'
                                              onClick={handleLogOut} 
                                              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                          >
                                              Logout
                                          </Link>
                                      </div>
                                  </div>
                              )}
                          </>
      
                        :
                      <>
                      <Link to="/login">
                              <button className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208]"> Join US</button>
                          </Link>
                          <BsPersonCircle  className="text-5xl mr-4 text-black  "></BsPersonCircle>
                      </>
      
      

                   }
                </div>
            </div>

        </div>
    );
};

export default NavBar;