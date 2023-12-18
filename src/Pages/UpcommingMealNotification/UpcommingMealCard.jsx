import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const UpcommingMealCard = ({item}) => {
    const {_id, image, title, price } = item;

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const incrementCount = () => {
        setCount(count + 1);

        if (!clicked) {
            setClicked(true);
        }
    };


    return (
        <div>
            <div className="card w-80 h-96 bg-base-100 shadow-xl">
                <figure className="h-56 w-full"><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price:{price}Tk</p>
                    <div>
                                        <button ><FaHeart
                                            className={clicked ? 'clicked' : ''}
                                            style={{ color: clicked ? '#780000' : '#cbc0d3', fontSize: '30px', marginRight: '10px' }}
                                            onClick={incrementCount}></FaHeart></button>
                                        <span className="font-bold">{count}</span>
                                    </div>
                    
                    <div className="card-actions ">
                       <Link to={`/mealdetail/${_id}`}>
                       <button className="btn btn-block bg-[#9d0208] text-white  capitalize mt-3  font-bold text-xl" >Details</button>
                       </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpcommingMealCard;