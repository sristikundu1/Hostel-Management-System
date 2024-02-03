import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Cook = () => {
    const [cook, setCook] = useState([]);

    useEffect(() => {
        fetch('/cook.json')
            .then(res => res.json())
            .then(data => setCook(data)
            )
    }, [])

    return (
       <div className="max-w-6xl mx-auto my-16"  data-aos="fade-up"
       data-aos-duration="3000">
            <h2 className="text-center font-bold text-3xl text-[#370617]">Cooking Experties</h2>
            <p className="text-center mb-5 mt-2 text-xl text-[#003e1f]">Meet Our Chefs .Get to Know the Creative Minds Behind Every Delicious Recipe!</p>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {

                    cook.map(chef => <SwiperSlide
                        key={cook._id}>
                        <div className="mx-24 my-8 py-5 flex flex-col items-center">
                           
                            <img className='w-96 h-96' src={chef.image} alt="" />
                            <p className="text-[#9d0208] text-3xl font-bold  mt-3 leading-9">{chef.name}</p>
                            <h3 className="text-[#CD9003] text-xl	font-medium	text-center">{chef.designation}</h3>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default Cook;