import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {

       const axiosPublic = useAxiosPublic();


       const [showPassword, setShowPassword] = useState(false);
       // const [success, setSuccess] = useState("");
       // const [logINError, setLogInError] = useState("");
   
   
       const location = useLocation();
       const navigate = useNavigate();
   
        
       const { logIn, googleSignIn, logOut } = UseAuth();
   
       const handleClickGoogle = () => {
           googleSignIn()
               .then((result) => {
                   console.log(result.user);
                   const guserInfo = {
                       email: result.user?.email,
                       name: result.user?.displayName
                   }
                   axiosPublic.post('/users', guserInfo)
                       .then(res => {
                           console.log(res.data);
                           navigate("/");
   
                       })
               })
       }
   
   
       const handleLogin = event => {
           event.preventDefault();
           const form = event.target;
           const email = form.email.value;
           const password = form.password.value;
           console.log(email, password)
   
        //    setLogInError('');
        //    setSuccess('');
   
           if ((email, password)) {
               logIn(email, password)
                   .then((result) => {
                       const user = result.user;
                       console.log(user);
   
                       Swal.fire({
                           title: "Wow!",
                           text: "You successfully login!",
                           icon: "success"
                       });
   
                    //    setSuccess("user loged successfully");
   
                       navigate(location?.state ? location.state : "/")
                       form.reset();
                   })
   
   
                   .catch(error => {
                       console.error(error);
                    //    setLogInError(error.message);
                   })
           }
   
       }

    return (
         <div>
            <Helmet>
                <title>Aura | Login</title>
            </Helmet>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TgJNTc8/login.jpg)' }}>
                {/* <div className="hero-overlay "></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[500px]">
                        <div className=" col-span-3">
                            <h2 className="font-bold text-3xl text-center text-[#370617] mb-4 ">Login</h2>
                            <div className="border rounded-lg">
                                <img className="h-80 w-[500px]" src="https://i.ibb.co/TgJNTc8/login.jpg" alt="" />

                                <form className="bg-[#eae2b7] p-4" onSubmit={handleLogin}>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text text-[#e85d04] font-semibold">Email</span>
                                        </label>
                                        <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" name="email" id="email" />
                                    </div>

                                    <div className=" relative">
                                        <label className="label">
                                            <span className="label-text text-[#e85d04] font-semibold">Password</span>
                                        </label>

                                        <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter your Password" type={showPassword ? "text" : "password"} name="password" id="password" required />
                                        <span className='absolute top-14 right-2' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash className="text-black"></FaEyeSlash> : <FaEye className="text-black"></FaEye>}
                                        </span>

                                    </div>


                                    <input className="btn btn-block bg-[#9d0208] text-white  capitalize mt-3  font-bold text-xl" type="submit" value="Login" />

                                </form>
                            </div>

                            {/* {
                                logINError && <p>{logINError}</p>

                            }
                            {
                                success && <p>{success}</p>

                            } */}


                            <div className=" flex flex-col justify-center items-center  ">
                                <Link to="/signup">
                                    <p className="text-[#e85d04] font-bold	text-center mt-2">New here? Create a New Account</p>
                                </Link>
                                <h2 className="text-center text-[#e85d04] mt-3">Or sign in with</h2>


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

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;