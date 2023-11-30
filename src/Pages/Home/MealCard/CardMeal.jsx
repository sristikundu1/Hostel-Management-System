import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const CardMeal = ({ item }) => {
    const {id, img, meal_title, price, rating } = item;

    return (
        <div>
            <div className="card w-80 h-96 bg-base-100 shadow-xl">
                <figure className="h-56 w-full"><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{meal_title}</h2>
                    <p>Price:{price}Tk</p>
                    <p><Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    /></p>
                    <div className="card-actions ">
                       <Link to={`/mealdetail/${id}`}>
                       <button className="btn btn-block bg-[#9d0208] text-white  capitalize mt-3  font-bold text-xl" >Details</button>
                       </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardMeal;