const GetStartedCard = () =>{
    return(
        <>
        <div className="greeting-full-width bg-[#0088CC] h-[140px] shadow-md py-10">
            <div className="container w-10/12 mx-auto flex justify-between">
            <div className="left-area w-8/12">
                <div className="flex">
                <h1 className="text-white text-[19px] font-bold">The fastest way to grow your business with the leader in</h1>
                <h2 className="font-shadows text-[32px] mt-[-18px] text-white">Technology</h2>
                </div>
                
                <p className="text-[16px] text-[#FFFFFFB3]">Check out our options and features included.</p>
            </div>
            <div className="w-4/12 flex justify-center items-center">
                <button className=" bg-black hover:bg-[#31373D] px-5 py-3 text-white rounded-md font-sans font-bold mr-5">Get Started Now</button>
                <h2 className="text-sm text-white font-bold">Or Learn More</h2>
            </div>
            </div>
        </div>
        </>
    );
}
export default GetStartedCard;