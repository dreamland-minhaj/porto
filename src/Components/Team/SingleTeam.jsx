import { useParams } from "react-router-dom";
import BreadCumbs from "../Breadcumbs/BreadCumbs";
import { teamData } from "../../../data";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const SingleTeam = () => {
    const {postId} = useParams();
    const teamsingleData = teamData.find((data)=>data.id == postId);

    return(
        <>
        <BreadCumbs/>
        <div className="header-full-width bg-white py-6">
            <div className="container w-10/12 mx-auto flex justify-between">
                <div className="flex">
                    <div className="w-4/6 pr-10">
                        <h1 className="text-[#222529] font-bold font-sans text-[30px] capitalize">{teamsingleData.name}</h1>
                        <h2 className="font-sans font-bold text-[14px] text-[#0088CC] uppercase tracking-tighter py-1">{teamsingleData.designation}</h2>
                        <p className="font-sans text-[#777777] text-[17px] pt-5 pb-10">{teamsingleData.description}</p>

                        <hr />
                        <div className="flex py-14">
                            <div className="w-1/2">
                                <button className="bg-[#212529] text-[12px] text-white px-5 font-bold py-3 rounded-md uppercase font-sans">Get In Touch</button>
                            </div>
                            <div className="w-1/2">
                                <ul className="flex justify-end items-end">
                                    <li className="text-[#222529] text-[12px] uppercase tracking-tighter pr-5 font-bold"><a href="">Follow ME</a></li>
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

                    <div className="w-2/6">
                        <img className="max-h-[450px] w-full" src={teamsingleData.photo} alt="" />
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
}
export default SingleTeam;