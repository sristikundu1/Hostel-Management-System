
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BsHouseFill } from "react-icons/bs";
const ErrorPage = () => {
    return (
      
             <div>
             <Helmet>
                <title>Aura | 404</title>
            </Helmet>
            <Link to="/"><h2 className="font-greate text-[#9d0208] font-bold text-2xl text-center my-10 flex justify-center items-center gap-2">Back to Home.<BsHouseFill className="text-[#4F4A45]"></BsHouseFill></h2></Link>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/yhqS4dB/error.png)' }}>
            </div>
            
        </div>
            
        
    );
};

export default ErrorPage;