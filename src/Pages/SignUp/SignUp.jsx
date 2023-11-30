import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const { signUp, googleSignIn, updateUserProfile } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const handleClickGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/");

                    })
            })
    }


    const onSubmit = (data) => {
        console.log(data)
        signUp(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user added database");

                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "You successfully sign up",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                    navigate("/");

                                }
                            })

                    })
                    .catch(error => console.log(error))
            })

    };

    return (
        <div>
            <Helmet>
                <title>Aura | SignUp</title>
            </Helmet>


            <div className="bg-black">
                {/* <div className="bg-[url(https://i.ibb.co/XJdhK0h/authentication.png)] h-screen"> */}

                <div className="max-w-6xl mx-auto pt-2 ">

                    <div className="grid grid-cols-7   mt-5 border-t-4 border-[#00000040]   shadow-2xl pt-5  pb-8 pl-16 ">



                        <div className=" col-span-3">
                            <h2 className="font-bold text-3xl text-center text-[#dc2f02] ">Sign Up</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-[#e85d04] font-semibold">Name</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" {...register("name", { required: true })} name="name" id="name" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.name && <span className="text-red-600">Name field is required</span>}
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-[#e85d04] font-semibold">Photo URL</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" {...register("photoURL", { required: true })} name="photoURL" id="photoURL" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.photoURL && <span className="text-red-600">url field is required</span>}
                                </div>

                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-[#e85d04] font-semibold">Email</span>
                                    </label>
                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" {...register("email", { required: true })} name="email" id="email" />
                                    {/* errors will return when field validation fails  */}
                                    {errors.email && <span className="text-red-600">Email field is required</span>}
                                </div>

                                <div className="relative ">
                                    <label className="label">
                                        <span className="label-text text-[#e85d04] font-semibold">Password</span>
                                    </label>

                                    <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&@? "])[a-zA-Z0-9!#$%&@?]{6,15}$/
                                    })} name="password" id="password" required />
                                    <span className='absolute top-14 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                    </span>
                                    {errors.password?.type === "required" &&
                                        <p className="text-red-600">password is required</p>}
                                    {errors.password?.type === "minLength" &&
                                        <p className="text-red-600">password must be 6 chatecters required</p>}
                                    {errors.password?.type === "maxLength" &&
                                        <p className="text-red-600">password must be less than 20 chatecters required</p>}
                                    {errors.password?.type === "pattern" &&
                                        <p className="text-red-600">password must have one upper case ,one lolwer case,one number and  one special chatecters required</p>}

                                </div>


                                <input className="btn btn-block bg-[#9d0208] text-white  capitalize mt-5  font-bold text-xl" type="submit" value="Sign Up" />

                            </form>


                            <div className=" flex flex-col justify-center items-center  ">
                                <p className="text-[#e85d04] font-bold	text-center mt-2">Already registered? Go to <Link to="/login">log in</Link> </p>
                                <h2 className="text-center mt-3 text-[#e85d04]">Or sign up with</h2>


                                <div className="flex gap-6 text-3xl mt-2">

                                    <Link to="/">
                                        <button onClick={handleClickGoogle} className="btn bg-[#6a040f] text-white">
                                            LogIn with Google
                                            <FcGoogle></FcGoogle>
                                        </button>
                                    </Link>
                                </div>


                            </div>

                        </div>

                        <div className=" col-span-4">
                            <img className=" h-full" src="https://i.ibb.co/d292YJd/signup.gif" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;