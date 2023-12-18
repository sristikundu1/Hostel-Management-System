// import UseMeal from "../../Hooks/UseMeal";
import useFood from "../../Hooks/useFood";
import OrderTab from "../Home/OrderTab/OrderTab";


const AllMeal = () => {

    // const [meal] = UseMeal();
    const [allmeal] = useFood();
    const allMeals = allmeal

    return (
        <div className="max-w-6xl mx-auto my-12">
            <h2 className="text-center font-bold text-3xl text-[#370617]">Meal Offerings</h2>
            <p className="text-center mb-5 mt-2 text-xl text-[#003e1f]">Explore a diverse menu offering delightful dishes from hearty breakfast options to wholesome dinner choices in our hostel meal management system.</p>

            <input className="w-[1050px] h-11 p-4 rounded" type="text" placeholder="Search a meals by title......" name="" id="" />
                <button className="btn bg-[#d00000] capitalize text-[#1F1717] font-bold text-xl">Search</button>
              <OrderTab items={allMeals}></OrderTab>
          
        </div>
    );
};

export default AllMeal;