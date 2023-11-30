

const QAndA = () => {
    return (
        <div className="max-w-6xl mx-auto my-16">
            <h2 className="text-center font-bold text-3xl text-[#370617]">FAQ - Hostel Meal Management System</h2>
            <p className="text-center mb-5 mt-2 text-xl text-[#003e1f]">Answers to Your Queries</p>

            <div className="collapse collapse-arrow bg-[#ffecd1]">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium font-mono text-[#15616d]">
                How do I sign up for the meal management system?
                </div>
                <div className="collapse-content">
                    <p className="text-[#bb3e03]">Signing up is simple! Click on the JOIN US button located at the top right corner of the homepage. Fill in your details, choose a username and password, and you are all set to explore our meal management features.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffecd1]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium font-mono text-[#15616d]">
                How can I add recipes to my meal plan?
                </div>
                <div className="collapse-content">
                    <p className="text-[#bb3e03]">When browsing recipes, simply click the Add to Meal Plan or similar button below the recipe details. You can then select the date and meal slot (breakfast, lunch, dinner) for the recipe to be added to your meal plan.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffecd1]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium font-mono text-[#15616d]">
                Can I access the meal management system on my mobile device?
                </div>
                <div className="collapse-content">
                    <p className="text-[#bb3e03]">Absolutely! Our platform is designed to be responsive, allowing seamless access via mobile devices, tablets, and desktops. Simply visit our website using your devices web browser.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffecd1]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium font-mono text-[#15616d]">
                Are nutritional facts provided for the recipes available in the system?
                </div>
                <div className="collapse-content">
                    <p className="text-[#bb3e03]"> Yes, we prioritize transparency regarding nutrition. Nutritional information such as calories, macros, and serving sizes are available for most recipes within the system. </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-[#ffecd1]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium font-mono text-[#15616d]">
                How frequently are new recipes or features added to the system?
                </div>
                <div className="collapse-content">
                    <p className="text-[#bb3e03]"> We regularly update our database with new recipes and features to enhance your meal planning experience. New recipes and system updates are introduced periodically, providing a diverse range of meal options and improved functionalities.</p>
                </div>
            </div>

            <p className="text-center mt-4 font-bold text-xl">Still Have Questions? Contact Support</p>

        </div>
    );
};

export default QAndA;