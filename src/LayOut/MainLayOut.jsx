import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Components/Shared/NavBar/NavBar';
import Footer from '../Components/Shared/Footer/Footer';

const MainLayOut = () => {
    const location = useLocation();
  
    const noHeaderFooter = location.pathname.includes("login") || 
    location.pathname.includes("signup");
    return (
        <div>
           {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayOut;