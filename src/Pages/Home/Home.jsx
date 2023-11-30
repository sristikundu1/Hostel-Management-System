import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Cook from "./Cook";
import Meals from "./Meals";
import QAndA from "./QAndA";
import MemberShip from "./MemberShip/MemberShip";


const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Aura | Home</title>
            </Helmet>
            <Banner></Banner>
            <Meals ></Meals>
            <Cook></Cook>
            <QAndA></QAndA>
            <MemberShip></MemberShip>
        </div>
    );
};

export default Home;