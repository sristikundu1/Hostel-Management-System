import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import OrderTab from './OrderTab/OrderTab';
import useFood from '../../Hooks/useFood';



const Meals = () => {

    const [allmeal] = useFood();

    const [tabIndex, setTabIndex] = useState(0);



    // const categories = [' All Meals', 'Breakfast', 'Lunch', 'Dinner'];
    // const { category } = useParams();
    // const initialIndex = categories.indexOf(category);
    // // console.log(initialIndex);
    // const [tabIndex, setTabIndex] = useState(initialIndex);


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

    // const [meal] = UseMeal();

    const allMeal = allmeal
    const breakfast = allmeal.filter(item => item.category === 'Breakfast')
    const lunch = allmeal.filter(item => item.category === 'Lunch')
    const dinner = allmeal.filter(item => item.category === 'Dinner')


    return (
        <div>
            <div className='max-w-5xl mx-auto mb-24 mt-28' data-aos="fade-up"
                data-aos-duration="3000">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex flex-row items-center justify-center gap-4">
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 0
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-[#d00000]'
                            }`}>All Meals</Tab>
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 1
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-[#d00000]'
                            }`}>Breakfast</Tab>
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 2
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-[#d00000]'
                            }`}>Lunch</Tab>
                        <Tab className={`cursor-pointer p-2 border rounded  ${tabIndex === 3
                            ? 'bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-[#d00000]'
                            }`}>Dinner</Tab>

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