

const Banner = () => {
    return (
        <div className=" ">
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/kKbzRvj/banner.jpg)'}}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="space-y-6">
                <h2 className="font-bold text-6xl text-[#e9d8a6]">Manage Your Hostel Meals Effortlessly</h2>
                <p className="font-medium text-xl text-[#faa307]">Streamline Meal Planning for Your Hostel Life. Find Recipes, Plan Menus, and Simplify Shopping!</p>
                <input className="lg:w-96 h-11 p-4 rounded" type="text" placeholder="Search for meals......" name="" id="" />
                <button className="btn bg-[#d00000] capitalize text-[#1F1717] font-bold text-xl">Search</button>
                </div>
            </div>
        </div>

    </div>

    );
};

export default Banner;