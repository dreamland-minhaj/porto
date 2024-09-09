
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <header>
            <div className="header-full-width bg-gray-50 shadow-md py-6">
                <div className="container w-10/12 mx-auto flex justify-between">
                    <div className="logo-area py-2">
                        <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/logo/logo_black.png" alt="" />
                    </div>
                    <div className="menu-area">
                        <div className="menu1 py-2">
                            <ul className="flex justify-end">
                                <li className="flex items-center mr-4 text-[#999B9C] text-xs">
                                    <a className="flex items-center " href=""><MdNavigateNext className="mr-2"/> About us</a>
                                </li>
                                <li className="flex items-center mr-4 text-[#999B9C] text-xs">
                                    <a className="flex items-center" href=""><MdNavigateNext className="mr-2"/>Contact us</a>
                                </li>
                                <li className="flex items-center mr-4 text-[#999B9C] text-xs">
                                    <a className="flex items-center" href=""><FaPhoneAlt className="mr-2"/>(880)1312757826</a>
                                </li>
                            </ul>
                        </div>
                        <div className="menu2">
                        <ul className="flex justify-end">
                                <li className="bg-[#0088CC] px-3 py-2 font-bold text-white rounded-sm mr-2"> 
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="hover:bg-[#0088CC] px-3 py-2 font-bold text-[#0088CC] hover:text-white rounded-sm mr-2"> 
                                    <Link to="/about">About us</Link>
                                </li>

                                <li className="hover:bg-[#0088CC] px-3 py-2 font-bold text-[#0088CC] hover:text-white rounded-sm mr-2"> 
                                    <Link to="/team">Team</Link>
                                </li>
                                <li className="hover:bg-[#0088CC] px-3 py-2 font-bold text-[#0088CC] hover:text-white rounded-sm mr-2 "> 
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="hover:bg-[#0088CC] px-3 py-2 font-bold text-[#0088CC] hover:text-white rounded-sm mr-2 "> 
                                    <Link to="/contact">Contacts</Link>
                                </li>
                                <li className="w-6 h-6 rounded-full text-sm text-black hover:text-white hover:bg-[#4E6AA4] text-center mt-2 p-1 shadow-md bg-slate-50 mr-2">
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li className="w-6 h-6 rounded-full text-sm text-black hover:text-white hover:bg-[#4E6AA4] align-center mt-2 p-1 shadow-md bg-slate-50 mr-2">
                                    <a href=""><FaXTwitter /></a>
                                </li>
                                <li className="w-6 h-6 rounded-full text-sm text-black hover:text-white hover:bg-[#4E6AA4] align-center mt-2 p-1 shadow-md bg-slate-50 mr-2">
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
export default Header;