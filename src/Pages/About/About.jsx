import BreadCumbs from "../../Components/Breadcumbs/BreadCumbs";
import HeaderSlider from "../../Components/Slider/HeaderSlider";
const About = ()=>{
    return(
        <>
        <BreadCumbs/>
        <div className="header-full-width bg-white py-10">
            <div className="container w-10/12 mx-auto">
               <h1 className="text-black text-[32px] font-sans font-extrabold tracking-tighter">The New Way to<button className="bg-[#0088CC] text-white font-sans py-1 px-3 ml-2">Progress</button></h1>
               <div className="flex items-center" >
               <p className="text-[20px] font-sans text-[#777777] py-10 w-10/12 leading-none ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla nonÂ <span className="font-shadows text-[#0088CC] text-[32px]">metus</span>.Â pulvinar. Sociis natoque penatibus et magnis dis parturient montes.</p>
              <div className="btn w-2/12">
                <button className="bg-[#0088CC] text-white font-sans px-5 py-2 rounded-md">Join our Team</button>
              </div>
               </div>
               <div className="about flex items-center justify-between bg-[#F7F7F7] py-10 space-x-10">
                <div className="w-6/12 py-10">
                <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/generic-corporate-3-3-full.jpg" alt="" />
                </div>
                <div className="w-6/12">
                    <h1 className="text-[#222529] text-[21px] font-sans font-bold tracking-tighter">Who We Are</h1>
                    <div className="flex items-center" >
                    <p className="text-[14px] font-sans text-[#777777] pt-8 w-10/12 py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. AliquamÂ vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero. <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. AliquamÂ vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vit</p>
                   
                </div>
            </div>
            </div> 
            </div>
         </div>

        </>
    );
}
export default About;