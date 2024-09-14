// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const TextSlider = () =>{
    return(
        <>
            <Swiper

                className="w-[120px] h-[50px]">
                <SwiperSlide className="flex items-center justify-center bg-blue-80">
                    <h1 className='text-white font-bold'>Enjoy</h1>
                </SwiperSlide>

                <SwiperSlide className="flex items-center justify-center bg-blue-800">
                <h1 className='text-white font-bold'>Object</h1>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default TextSlider;