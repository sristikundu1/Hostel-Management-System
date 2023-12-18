import useUpcomming from "../../Hooks/useUpcomming";
import UpcommingMealCard from "./UpcommingMealCard";


const UpcommingMealNotification = () => {
    const [upcomming] = useUpcomming()
    return (
        <div className='max-w-6xl mx-auto mb-14 mt-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
             {
                        upcomming.map(item => <UpcommingMealCard
                        key={item._id}
                        item = {item}></UpcommingMealCard>)
                      }

            
        </div>
        </div>
    );
};

export default UpcommingMealNotification;