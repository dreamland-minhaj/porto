const History = () => {
    return(
        <>
        <section className="header-full-width bg-[#FFFFFF] py-10 relative h-[1650px]">
            <div className="container w-10/12 mx-auto">
                <div className="sectioninfo text-center pt-10">
                    <h1 className="font-sans text-[21px] font-bold ">Our History</h1>
                    <p className="font-sans text-[14px] text-[#777777] pt-2">How we started, lorem ipsum dolor sit amet, consectetur adipiscing elit ac laoreet libero.</p>
                </div>

                    {/* Vertical align */}
                    <div className="absolute top-[175px] bottom-[50px] left-[50%] transform -translate-x-1/2 w-[3px] bg-[#C2C2C2]"></div>
                    {/* vertical align end */}

                        {/* history item one start */}
                        <div className="item1">

                            {/* year button */}
                            <div className="bg-white px-20 py-2 border-[1px] rounded-md text-[#0088CC] font-bold shadow-sm absolute top-[250px] left-[43%]"><a href="#" className="text-center">2018</a></div>
                            {/* year button end */}


                            {/* history item box  */}
                            <div className="history-item w-80 border-[1px] p-4 rounded-sm absolute top-[320px] left-[25%]">
                                <div className="history-content space-y-3">
                                    <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/history-3.jpg" alt="" />
                                    <h1 className="text-[14px] text-[#222529] font-sans font-bold">NEW OFFICE</h1>
                                    <p className="text-[12px] text-[#777777] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante.</p>
                                </div>
                            </div>
                            {/* history item box end */}


                            {/* history item box angle start */}
                            <div className="bg-white border-r-[1px] border-t-[1px] w-[14px] h-[14px] absolute top-[340px] left-[48%] rotate-45"></div>
                            {/* history item box angle start */}


                            {/* history item rounded circle */}
                            <div className="bg-sky-700 w-3 h-3 rounded-full border-4 ring-2 ring-blue-500 absolute top-[340px] p-1 left-[49.5%]"></div>
                            {/* history item rounded circle end */}

                        </div>
                        {/* histroy items 2018 end */}

                        {/* item2 start */}
                        <div className="item2">
                            {/* year button */}
                            <div className="bg-white px-20 py-2 border-[1px] rounded-md text-[#0088CC] font-bold shadow-sm absolute top-[680px] left-[43%]"><a href="#" className="text-center">2012</a></div>
                            {/* year button end */}

                            {/* history item box  */}
                            <div className="history-item w-80 border-[1px] p-4 rounded-sm absolute top-[750px] right-[25%]">
                                    <div className="history-content space-y-3">
                                        <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/history-2.jpg" alt="" />
                                        <h1 className="text-[14px] text-[#222529] font-sans font-bold">NEW PARTNERS</h1>
                                        <p className="text-[12px] text-[#777777] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante.</p>
                                    </div>
                                </div>
                                {/* history item box end */}

                            {/* history item box angle start */}
                            <div className="bg-white border-l-[1px] border-b-[1px] w-[14px] h-[14px] absolute top-[770px] right-[48%] rotate-45"></div>
                            {/* history item box angle start */}

                            {/* rounded circle */}
                            <div className="bg-sky-700 w-3 h-3 rounded-full border-4 ring-2 ring-blue-500 absolute top-[770px] p-1 left-[49.5%]"></div>
                            {/* rounded circle end */}

                        </div>
                        {/* item2 end */}

                        {/* item3 start  */}
                        <div className="item 3">

                            {/* year start */}
                            <div className="bg-white px-20 py-2 border-[1px] rounded-md text-[#0088CC] font-bold shadow-sm absolute top-[1110px] left-[43%]"><a href="#" className="text-center">2006</a></div>
                            {/* year end */}

                            {/* history item box  */}
                            <div className="history-item w-80 border-[1px] p-4 rounded-sm absolute top-[1190px] left-[25%]">
                                <div className="history-content space-y-3">
                                    <img src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/history-1.jpg" alt="" />
                                    <h1 className="text-[14px] text-[#222529] font-sans font-bold">NEW OFFICE</h1>
                                    <p className="text-[12px] text-[#777777] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante.</p>
                                </div>
                            </div>
                            {/* history item box end */}

                            {/* history item box angle start */}
                            <div className="bg-white border-r-[1px] border-t-[1px] w-[14px] h-[14px] absolute top-[1210px] left-[48%] rotate-45"></div>
                            {/* history item box angle start */}


                            {/* history item rounded circle */}
                            <div className="bg-sky-700 w-3 h-3 rounded-full border-4 ring-2 ring-blue-500 absolute top-[1210px] p-1 left-[49.5%]"></div>
                            {/* history item rounded circle end */}

                            
                        </div>
                        {/* item3 end */}
                </div>
            </section>
        </>
    );
}
export default History;