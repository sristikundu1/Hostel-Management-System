import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import '@smastrom/react-rating/style.css'
import { FaHeart } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MealDetails = () => {
    const { id } = useParams();
    const [meals, setMeals] = useState({});
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const incrementCount = () => {
        setCount(count + 1);

        if (!clicked) {
            setClicked(true);
        }
    };

    useEffect(() => {
        fetch('/meal.json')
            .then(res => res.json())
            .then(data => {
                const singleMeal = data.find(meal => meal.id == id)
                setMeals(singleMeal);
            })
    }, [id])

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)

        if (user && user.email) {
            //    insert data in the database
            const reviewItem = {
                // menuId: id,
                // email: user.email,
                // name: user.displayName,
                // meal: meals.meal_title,
                // like: count

                meal: data.title,
                name: data.name,
                email: data.email,
                review: data.review

                
            }
            axiosSecure.post("/review", reviewItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `You review about ${data.title} meal `,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //   refetch the cart to update the cart items count
                        // refetch();
                    }
                })
        }

        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to review for the meal!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "ok,, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }

    const handleRequestMeal = () => {
        if (user && user.email) {
            //    insert data in the database
            const requestItem = {
                menuId: id,
                email: user.email,
                name: user.displayName,
                meal: meals.meal_title,
                like: count

                
            }
            axiosSecure.post("/request", requestItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `You requested ${meals.meal_title} meal `,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //   refetch the cart to update the cart items count
                        // refetch();
                    }
                })
        }

        else {
            Swal.fire({
                title: "You are not login",
                text: "Please login to request for the meal!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "ok,, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }
        return (
            <div>
                <Helmet>
                    <title>Aura | mealDetails</title>
                </Helmet>

                <div className="max-w-6xl mx-auto">
              

                   <div className="flex flex-col gap-6">
                        <h2 className="mt-10 text-center font-bold text-5xl text-[#003e1f]">{meals.meal_title}</h2>
                        <div className='w-full h-auto overflow-hidden rounded-xl'>
                            <img
                                className='object-cover w-full'
                                src={meals.img}
                                alt='header image'
                            />
                        </div>
                    </div>
                    <div>

                        <div className='col-span-4 flex flex-col gap-8'>
                            <div className='flex flex-col gap-2'>
                                <div className="text-xl font-semibold flex flex-row items-center gap-2 mt-3">
                                    <div className="text-[#0f4c5c]">Meal Distributor: {meals?.owner?.name}</div>
                                    <img className='rounded-full' height='40' width='40' alt='Avatar'
                                        src={meals?.owner?.image}
                                    />

                                </div>
                                <div className='flex flex-row  items-center  gap-4 font-light text-neutral-500'>

                                    <div>

                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={meals?.rating}
                                            readOnly
                                        />
                                    </div>

                                    <div className="font-medium ">
                                        <h2>(0 reviews)</h2>
                                    </div>

                                    <div>
                                        <button ><FaHeart
                                            className={clicked ? 'clicked' : ''}
                                            style={{ color: clicked ? '#780000' : '#cbc0d3', fontSize: '30px', marginRight: '10px' }}
                                            onClick={incrementCount}></FaHeart></button>
                                        <span className="font-bold">{count}</span>
                                    </div>

                                    <div className="font-medium ">
                                        Post Time:
                                    </div>

                                </div>



                            </div>

                            <hr />
                            <div className='text-lg font-light text-[#e36414] font-mono'>
                                {meals.description}
                            </div>

                            <div className="max-w-5xl mx-auto bg-[#eae2b7] p-4 rounded-xl">
                                <h2 className="font-bold text-black text-center text-3xl mb-4">Ingredients</h2>
                                <ul className="flex gap-3 font-serif text-[#003049]">
                                    {meals?.ingredients?.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-between">

                        <button onClick={() => handleRequestMeal(meals)} className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208] my-10 ">Meal request</button>
                        <Link to="/allmeal">
                            <button className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208] my-10 ">See All</button>
                        </Link>

                    </div>
                
                    <div>
                        <h2 className="text-center font-bold text-3xl text-[#370617]">Review</h2>

                        <form className="mb-12" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="label">
                                    <span className="label-text text-[#e85d04] font-semibold">Meal Name</span>
                                </label>
                                <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Type here" type="text" {...register("title", { required: true })} defaultValue={meals.meal_title} name="title" id="title" />
                                {/* errors will return when field validation fails  */}
                                {errors.name && <span className="text-red-600">meal field is required</span>}
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-[#e85d04] font-semibold">Name</span>
                                </label>
                                <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" defaultValue={user?.displayName} placeholder="Type here" type="text" {...register("name", { required: true })} name="name" id="name" />
                                {/* errors will return when field validation fails  */}
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>


                            <div className="">
                                <label className="label">
                                    <span className="label-text text-[#e85d04] font-semibold">Email</span>
                                </label>
                                <input className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Enter Your Email" type="email" {...register("email", { required: true })} name="email" id="email" />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>

                            <div className="">
                                <label className="label">
                                    <span className="label-text text-[#e85d04] font-semibold">Review</span>
                                </label>
                                <textarea className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Write Your Review" type="text" {...register("review", { required: true })} name="review" id="review" cols="30" rows="5"></textarea>
                                {/* errors will return when field validation fails  */}
                                {errors.review && <span className="text-red-600">review field is required</span>}
                            </div>




                            <input className="btn btn-block bg-[#9d0208] text-white  capitalize mt-5  font-bold text-xl" type="submit" value="Submit" />

                            

                        </form>

                    </div>

                </div>
            </div>

        );
    };

    export default MealDetails;