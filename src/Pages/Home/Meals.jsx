import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
// import Usemenu from "../../../Hooks/Usemenu";
import { useParams } from "react-router-dom";
import UseMeal from '../../Hooks/UseMeal';
import OrderTab from './OrderTab/OrderTab';



const Meals = () => {

    const categories = [' All Meals', 'Breakfast', 'Lunch', 'Dinner'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    // console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);


    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('/meals.json')
    //         .then(res => res.json())
    //         .then(data => {

    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [menu,loading]

    const [meal] = UseMeal();

    const breakfast = meal.filter(item => item.category === 'Breakfast')
    const lunch = meal.filter(item => item.category === 'Lunch')
    const dinner = meal.filter(item => item.category === 'Dinner')
    const allMeal = meal
    // const dessertItems = menu.filter(item => item.category === 'dessert')
    // const drinkItems = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <div className='max-w-5xl mx-auto mb-24 mt-28'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex flex-row items-center justify-center gap-4">
                        <Tab className="cursor-pointer p-2 border rounded hover:bg-[#d00000]">All Meals</Tab>
                        <Tab className="cursor-pointer p-2 border rounded hover:bg-[#d00000]">Breakfast</Tab>
                        <Tab className="cursor-pointer p-2 border rounded hover:bg-[#d00000]">Lunch</Tab>
                        <Tab className="cursor-pointer p-2 border rounded hover:bg-[#d00000]">Dinner</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderTab items={allMeal}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={breakfast}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={lunch}></OrderTab>

                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={dinner}></OrderTab>

                    </TabPanel>

                </Tabs>
            </div>

        </div>
    );
};

export default Meals;