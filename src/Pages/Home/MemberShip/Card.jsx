import { Link } from "react-router-dom";


const Card = ({ memberShip }) => {

    const { id,category, price, f1, f2, f3 } = memberShip;

    console.log(category)
    return (
        <div>

            <Link to={`/checkout/${id}`}>
                <div className="relative flex  flex-col rounded-xl bg-gradient-to-tr from-[#0b090a] to-[#161a1d] bg-clip-border p-8 text-white shadow-md shadow-pink-500/40 w-[400px] h-[400px] md:w-full  md:h-[380px]">
                    <div className=" overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border mb-3 pb-2">
                        <p className=" text-4xl antialiased font-normal leading-normal text-[#a4161a] font-mono uppercase">
                            {category}
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans  font-normal  text-white ">
                            <span className="mt-2 text-3xl"></span>{price}Tk
                            <span className="self-end text-3xl">/week</span>
                        </h1>
                    </div>
                    <div className="p-0  h-44">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"

                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path

                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    {f1}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"

                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path

                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">


                                    {f2}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"

                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path

                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    {f3}
                                </p>
                            </li>

                        </ul>
                    </div>

                </div>
            </Link>

        </div>
    );
};

export default Card;