import { BsRecordCircle } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = ()=>{
    return(
        <>
         <footer>
            <div className="footer-full-width bg-[#212529] shadow-md py-10 mt-4">
                <div className="container w-10/12 mx-auto flex justify-between">
                    <div className="col-1 w-2/6 space-y-5 p-4">
                        <h1 className="text-white text-md">Newsletter</h1>
                        <p className="text-[#777777] font-sans font-light text-xs leading-6">Keep up on our always evolving product features and technology. Enter your e-mail address and subscribe to our newsletter.</p>
                        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-72">
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="px-4 py-2 w-72 focus:outline-none"
                            />
                            <button className="hover:bg-[#D3D3D4] bg-white text-black px-4 py-2 font-bold">Go!</button>
                        </div>
                    </div>
                    <div className="col-1 w-2/6 space-y-5 p-4">
                        <h1 className="text-white text-md">Top 5 FAQs</h1>
                        <ul className="text-[#777777] font-sans font-light text-xs space-y-2" >
                            <li className="py-1 hover:text-white">
                                <a href="">Technical support contacts?</a>
                            </li>
                            <li className="py-1 hover:text-white">
                                <a href="">How do I know the date of my delivery?</a>
                            </li>
                            <li className="py-1 hover:text-white">
                                <a href="">My product did not arrive?</a>
                            </li>
                            <li className="py-1 hover:text-white">
                                <a href="">What are the payment methods?</a>
                            </li>
                            <li className="py-1 hover:text-white">
                                <a href="">Product availability?</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1 w-2/6 space-y-5 p-4">
                        <h1 className="text-white text-md">Contact Us</h1>
                        <ul>
                            <li className="flex items-center py-2">
                                <a className="flex items-center text-xs font-sans text-[#777777]" href=""><BsRecordCircle className="mr-2 text-[#1D5EBD] text-sm"/> 234 Street Name, City Name</a>
                            </li>
                            <li className="flex items-center py-2">
                                <a className="flex items-center text-xs font-sans text-[#777777]" href=""><FaWhatsapp className="mr-2 text-[#1D5EBD] text-sm"/> (880) 1312757826</a>
                            </li>
                            <li className="flex items-center py-2">
                                <a className="flex items-center text-xs font-sans text-[#777777]" href=""><MdOutlineEmail className="mr-2 text-[#1D5EBD] text-sm"/>webcoder1.minhaj@gmail.com</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-1 w-1/6 space-y-5 p-4">
                        <h1 className="text-white text-md">Follow Us</h1>
                        <ul className="flex justify-start">
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

        </footer>
        </>
    );
}
export default Footer;