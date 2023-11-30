import { BsFillPhoneFill, BsEnvelope, BsGeoAlt, BsTwitter, BsFacebook, BsLinkedin} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
    return (
        <div>
            <div className="hero min-h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/hWYzGF5/footer.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col gap-28 pt-16">
                        <div className="flex justify-evenly items-center gap-28 text-[#e85d04]">
                            <div className="space-y-5">
                                <header className="footer-title text-[#e9d8a6]">Contact</header>
                                <a className="link link-hover flex justify-center items-center gap-3 font-medium"><BsGeoAlt className="text-[#d5f2e3] text-2xl"></BsGeoAlt>Maple Street,City Center,Dhaka-1234</a>
                                <a className="link link-hover flex justify-center items-center gap-3 font-medium"><BsFillPhoneFill className="text-[#d5f2e3] text-2xl"></BsFillPhoneFill>015743156789</a>
                                <a className="link link-hover flex justify-center items-center gap-3 font-medium"><BsEnvelope className="text-[#d5f2e3] text-2xl"></BsEnvelope>AuraFeastForge@gmail.com</a>
                            </div>
                            <div className=" border rounded-full p-7 mt-10">
                                <div className="flex gap-4">
                                    <img className="w-12 rounded-full" src="https://i.ibb.co/LQJJxrD/logo.jpg" alt="" />
                                    <h2 className=" text-3xl font-greate font-bold text-[#d00000]">AuraFeastForge</h2>
                                </div>
                                <div className="space-x-5 flex justify-center items-center mt-3">
                                    <button><BsTwitter className="text-[#1da1f2] text-3xl"></BsTwitter></button>
                                    <button><BsFacebook className="text-[#3b5998] text-3xl"></BsFacebook></button>
                                    <button><BsLinkedin className="text-[#0a66c2] text-3xl"></BsLinkedin></button>
                                    <button><FcGoogle className=" text-3xl"></FcGoogle></button>
                                </div>
                            </div>
                            <div className="space-y-5">
                              
                                    <header className="footer-title flex flex-row justify-start text-[#e9d8a6]">Legal</header>
                                    <p className="link link-hover font-medium">Terms of use</p>
                                    <p className="link link-hover font-medium">Privacy policy</p>
                                    <p className="link link-hover font-medium">Cookie policy</p>
                               
                            </div>
                        </div>

                        <div>


                            <div className="w-[1200px] bg-white h-1"></div>

                            <p className="text-[#e85d04] font-medium text-center mt-3">Copyright © 2023 - All right reserved</p>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default Footer;