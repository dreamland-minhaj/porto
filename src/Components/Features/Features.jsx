
import featuresData from "./featuresdata";

const firstcolumndata = featuresData.slice(0, 4);
const secondcolumndata = featuresData.slice(4, 8);

const Features = () => {
    return(

        <div className="feature-full-width bg-gray-50 py-6 mt-4">
            <div className="container w-10/12 mx-auto flex justify-start border-y-[1px] py-10">
                <div className="w-1/3">
                    <h1 className="font-sans text-[28px] font-extrabold tracking-tighter pb-4">Our Feature</h1>
                    {firstcolumndata.map((data)=>{
                        return(
                            <div key={data.id} className="flex gap-4">
                                <div className="text-[#0088CC] text-[27px] items-start pt-4">
                                    <data.icon/>
                                </div>  
                            <div className="py-3 font-sans">
                                <h1 className="font-bold tracking-tighter text-[17px] text-[#222529]">{data.title}</h1>
                                <p className="text-[#777777] text-sm py-1">{data.desc}</p>
                            </div>
                        </div>
                        );
                    })}   
                </div>

            
                <div className="w-1/3 pt-14">
                    
                    {secondcolumndata.map((data)=>{
                        return(
                            <div key={data.id} className="flex gap-4">
                                <div className="text-[#0088CC] text-[27px] items-start pt-4 font-thin">
                                    <data.icon/>
                                </div>  
                            <div className="py-3 font-sans">
                                <h1 className="font-bold tracking-tighter text-[17px] text-[#222529]">{data.title}</h1>
                                <p className="text-[#777777] text-sm py-1">{data.desc}</p>
                            </div>
                        </div>
                        );
                    })}   
                </div>

                <div className="w-1/3">
                    <h1 className="font-sans text-[25px] font-light tracking-tighter pb-4">and more</h1>
                    
                </div>



            </div>
        </div>
    );
}
export default Features;