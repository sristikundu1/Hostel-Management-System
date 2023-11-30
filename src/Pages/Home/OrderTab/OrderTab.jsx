
import CardMeal from '../MealCard/CardMeal';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
             {
                        items.map(item => <CardMeal
                        key={item.id}
                        item = {item}></CardMeal>)
                      }

            
        </div>
    );
};

export default OrderTab;