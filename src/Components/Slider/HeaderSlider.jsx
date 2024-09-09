// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const HeaderSlider = () =>{
    return(
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-full bg-blue-800 h-[750px]">   
                <SwiperSlide className="flex items-center justify-center bg-slider1">
                    <div className="text-2xl text-white">
                        <div className="flex gap-4 justify-center items-center">
                            <img className="w-[37px] h-[10px]"src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png" alt="" />
                            <h1 className='uppercase text-xl'>Do You Need a NEW</h1>
                            <img className="w-[37px] h-[10px] " src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png" alt="" />
                        </div>
                        <h1 className='text-center my-3 text-5xl font-extrabold uppercase tracking-tight'>Web Design?</h1>
                        <h1 className='text-center text-[16px] text-[#FFFFFFB3]'>Check out our options and features</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center bg-slider2">
                    <div className="text-2xl text-white">
                        <div className="flex gap-4 justify-center items-center">
                            <img className="w-[37px] h-[10px]"src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png" alt="" />
                            <h1 className='uppercase text-xl'>We work hard and porto has</h1>
                            <img className="w-[37px] h-[10px] " src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png" alt="" />
                        </div>
                        <h1 className='text-center my-3 text-5xl font-extrabold uppercase tracking-tight'>The Best Design</h1>
                        <h1 className='text-center text-[16px] text-[#FFFFFFB3] w-[550px]'>Trusted by over 40,000 satisfied users, Porto is a huge success in the one of largest world's MarketPlace</h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center bg-slider3">
                    <div className="text-2xl text-white">
                        <div className="flex gap-4 justify-center items-center">
                            <img className="w-[37px] h-[10px]"src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png" alt="" />
                            <h1 className='uppercase text-xl'>We create Design, We are</h1>
                            <img className="w-[37px] h-[10px] " src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png" alt="" />
                        </div>
                        <h1 className='text-center my-3 text-5xl font-extrabold uppercase tracking-tight'>Porto</h1>
                        <h1 className='text-center text-[16px] text-[#FFFFFFB3]'>The best choice for your new website</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default HeaderSlider;