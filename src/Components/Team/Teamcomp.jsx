import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Teamcomp = () => {
    return(
        <>
            <section className="header-full-width bg-[#F7F7F7] py-10">
                <div className="container w-10/12 mx-auto">
                    <div className="sectioninfo text-center pt-10">
                        <h1 className="font-sans text-[21px] font-bold ">Meet Our Team</h1>
                        <p className="font-sans text-[14px] text-[#777777] pt-2">Rockstars lorem ipsum dolor sit amet, consectetur adipiscing elit ac laoreet libero.</p>
                    </div>
                    <div className="team-area mt-10 flex space-x-6">
                        <div className="w-1/4">
                            <div className="relative">
                                <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-1-367x367.jpg" alt=""/>
                                <button className="absolute bg-black text-white px-5 py-4 bottom-10 opacity-80 hover:opacity-100 font-bold">JOHN DOE</button>

                                <button className="absolute bg-[#0088CC] text-white px-2 py-1 text-xs bottom-7 left-8 font-sans">Leader</button>
                            </div>
                            <p className="font-sans text-[14px] text-[#777777] pt-6">Rockstars lorem ipsum dolor sit amet, consectetur adipiscing elit ac laoreet libero.</p>
                            <ul className="flex mt-1">
                            <li className="w-8 h-8 p-2 rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] text-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaXTwitter /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2 shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-1/4">
                            <div className="relative">
                                <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-2-367x367.jpg" alt=""/>
                                <button className="absolute bg-black text-white px-5 py-4 bottom-10 opacity-80 hover:opacity-100 font-bold">JESSICA DOE</button>

                                <button className="absolute bg-[#0088CC] text-white px-2 py-1 text-xs bottom-7 left-8 font-sans">Marketing Manager</button>
                            </div>
                            <p className="font-sans text-[14px] text-[#777777] pt-6">Rockstars lorem ipsum dolor sit amet, consectetur adipiscing elit ac laoreet libero.</p>
                            <ul className="flex mt-1">
                            <li className="w-8 h-8 p-2 rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] text-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaXTwitter /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2 shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-1/4">
                            <div className="relative">
                                <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-3-1-367x367.jpg" alt=""/>
                                <button className="absolute bg-black text-white px-5 py-4 bottom-10 opacity-80 hover:opacity-100 font-bold">RickAdoward DOE</button>

                                <button className="absolute bg-[#0088CC] text-white px-2 py-1 text-xs bottom-7 left-8 font-sans">Web Developer</button>
                            </div>
                            <p className="font-sans text-[14px] text-[#777777] pt-6">Rockstars lorem ipsum dolor sit amet, consectetur adipiscing elit ac laoreet libero.</p>
                            <ul className="flex mt-1">
                            <li className="w-8 h-8 p-2 rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] text-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaXTwitter /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2 shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-1/4">
                            <div className="relative">
                                <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-4-1-367x367.jpg" alt=""/>
                                <button className="absolute bg-black text-white px-5 py-4 bottom-10 opacity-80 hover:opacity-100 font-bold">Melinda Wolonsky</button>

                                <button className="absolute bg-[#0088CC] text-white px-2 py-1 text-xs bottom-7 left-8 font-sans">Web Designer</button>
                            </div>
                            <p className="font-sans text-[14px] text-[#777777] pt-6">Rockstars lorem ipsum dolor sit amet, consectetur adipiscing elit ac laoreet libero.</p>
                            <ul className="flex mt-1">
                            <li className="w-8 h-8 p-2 rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] text-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2  shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaXTwitter /></a>
                                </li>
                                <li className="w-8 h-8 p-2  rounded-full text-sm text-white hover:text-white hover:bg-[#4E6AA4] align-center mt-2 shadow-md bg-[#0088CC] mr-2">
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>    
        </>
    );
}
export default Teamcomp;