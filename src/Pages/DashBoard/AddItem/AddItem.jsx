import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {

    const { user } = UseAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    // const onSubmit = async (data, mealType) => {
    //     // Your existing code for form submission remains unchanged

    //     console.log(data)
    //     const imageFile = { image: data.image[0] }
    //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     });
    //     if (res.data.success) {
    //         const menuItem = {
    //             title: data.title,
    //             category: data.category,
    //             price: parseFloat(data.price),
    //             recipe: data.recipe,
    //             ingredients: data.ingredients,
    //             rating: data.rating,
    //             name: data.name,
    //             email: data.email,
    //             postdate: data.postdate,
    //             image: res.data.data.display_url

    //         }
    //         if (mealType === 'upcoming') {
    //             const upcomingmenuRes = await axiosSecure.post('/upcoming', menuItem);
    //             console.log(upcomingmenuRes.data);

    //             if (upcomingmenuRes.data.insertedId) {
    //                 reset();
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: `${data.title} added to your upcoming meal`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }
    //         } else {
    //             // Code to handle adding a regular meal
    //             const menuRes = await axiosSecure.post('/meals', menuItem);
    //             // const upcomingmenuRes = await axiosSecure.post('/upcoming', menuItem);
    //             console.log(menuRes.data);
    //             if (menuRes.data.insertedId) {
    //                 reset();
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: `${data.title} added to your cart`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });

    //             }
    //         }
    //     };

    // };
        const onSubmit = async (data) => {
            console.log(data)
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                const menuItem = {
                    title: data.title,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    ingredients: data.ingredients,
                    rating: data.rating,
                    name: data.name,
                    email: data.email,
                    postdate: data.postdate,
                    image: res.data.data.display_url

                }
                const menuRes = await axiosSecure.post('/meals', menuItem);
                // const upcomingmenuRes = await axiosSecure.post('/upcoming', menuItem);
                console.log(menuRes.data);

                // if (mealType === 'upcoming') {
                //     const upcomingmenuRes = await axiosSecure.post('/upcoming', menuItem);
                //     console.log(upcomingmenuRes.data);
    
                //     if (upcomingmenuRes.data.insertedId) {
                //         reset();
                //         Swal.fire({
                //             position: "top-end",
                //             icon: "success",
                //             title: `${data.title} added to your upcoming meal`,
                //             showConfirmButton: false,
                //             timer: 1500
                //         });
                //     }
                // } else {
                //     if (menuRes.data.insertedId) {
                //         reset();
                //         Swal.fire({
                //             position: "top-end",
                //             icon: "success",
                //             title: `${data.title} added to your cart`,
                //             showConfirmButton: false,
                //             timer: 1500
                //         });
                //     }
                // }
                if(menuRes.data.insertedId)  {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
                
            }

        }
        return (
            <div>
                <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">Add Meal</h2>

                <div className="border bg-[#F3F3F3] pt-24 px-14 mx-10">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="w-full flex gap-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Meal name*</span>
                                </label>
                                <input {...register("title", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Meal name" type="text" name="title" id="title" />
                            </div>

                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Meal Category*</span>

                                </label>
                                <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full ">
                                    <option disabled value="default">Meal Category</option>
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full flex gap-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Ingredients</span>
                                </label>
                                <input {...register("ingredients", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Ingredients name" type="text" name="ingredients" id="ingredients" />
                            </div>

                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Price*</span>
                                </label>
                                <input {...register("price", { required: true })} className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Price" type="number" name="price" id="price" />
                            </div>
                        </div>
                        <div className="w-full flex gap-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Rating</span>
                                </label>
                                <input {...register("rating", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Rating " type="text" name="rating" id="rating" />
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Posting Date</span>
                                </label>
                                <input {...register("postdate", { required: true })} required type="date" name="postdate" className="w-full h-12 border-2 p-4 pl-5 rounded-lg" />
                            </div>
                        </div>

                        <div className="w-full flex gap-3">
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Admin Name</span>
                                </label>
                                <input {...register("name", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" defaultValue={user?.displayName} type="text" name="name" id="name" />
                            </div>

                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Admin Email</span>
                                </label>
                                <input {...register("email", { required: true })} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" defaultValue={user?.email} type="email" name="email" id="email" />
                            </div>
                        </div>


                        <div className="w-full flex gap-3 mb-10">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-[#444] font-semibold">Description</span>
                                </label>
                                <textarea {...register("description", { required: true })} className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Meal  Description" name="description" id="description" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-ghost bg-[#E8E8E8]" />

                        <div className="flex justify-between">

                            <input className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208] my-10 " type="submit" value="Add meal"  />
                            {/* <button
                            //  onClick={() => handleAddMeal(meals)} 
                            className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208] my-10 ">Add meal</button> */}

                            {/* <input className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208] my-10 ">Add to Upcoming</input> */}
                            <input className="text-[#FFF] btn font-extrabold uppercase mr-3 bg-[#9d0208] my-10 " type="submit" value="Add to Upcoming" onClick={() => handleSubmit(onSubmit)('upcoming')} />

                        </div>

                    </form>
                </div>

            </div>
        );
    };

    export default AddItem;