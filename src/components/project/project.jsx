import React from "react";
import image1 from "./../../assets/hero1.jpg"
import Footer from "../footer/footer";


const Projectpage = () => {
    const sections_for_ourprojects = [
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        },
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        },
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        }
    ]
    const section_for_upcomingprojects=[
        {
            title : "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse. Pariatur consectetur ullam natus. Deleniti vero eius explicabo ea commodi excepturi porro, ",
            photo1:image1,
            photo2:image1,
            photo3:image1
        }
    ]

    return(
        <div className="bg-black min-h-screen w-full">
            <h1 className="text-blue-400 md:pt-[50px] md:pl-[100px] md:text-[40px] md:font-[400] font-['Airstrike'] pt-[20px] pl-[40px] text-[16px] font-[160px] " >OUR PROJECTTS</h1>
            <div>
                {
                    sections_for_ourprojects.map((sec,i) =>(
                        <div key = {i} className="flex flex-row  md:gap-[300px] gap-8 mt-10 md:mt-[100px] justify-center ">
                            {/* images */}
                            <div className="flex md:ml-[100px] pl-[40px]">
                                    <div  className="hexagon md:w-[250px] md:h-[250px] overflow-hidden w-[50px] h-[50px] " >
                                        <img className="w-full h-full object-cover" src={sec.photo1} alt="" />
                                    </div>  
                                    <div  className="hexagon md:w-[200px] md:h-[200px] overflow-hidden md:mt-[180px] md:ml-[-30px] mt-[40px] ml-[-12px] w-[40px] h-[40px] " >
                                        <img className="w-full h-full object-cover" src={sec.photo2} alt="" />
                                    </div>  
                                    <div  className="hexagon md:w-[150px] md:h-[150px] overflow-hidden md:mt-[300px] md:ml-[-370px] w-[30px] h-[30px] mt-[60px] ml-[-70px] " >
                                        <img className="w-full h-full object-cover" src={sec.photo3} alt="" />
                                    </div>  
                            </div>
                            <div>
                                <h1 className="text-red-500 md:text-[25px] font-bold text-[10px] pl-[20px] ">{sec.title}</h1>
                                <p  className="text-white md:pr-[100px] md:mt-[40px] md:text-[25px] font-thin text-[6px] pr-[8px] mt-[10px] pl-[20px] ">{sec.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/*this one is for upcoming project */}
            <h1 className="text-blue-400 md:pt-[50px] md:pl-[100px] md:text-[40px] md:font-[400] font-['Airstrike'] pt-[20px] pl-[40px] text-[16px] font-[160px] " >UPCOMING PROJECTS</h1>
            <div>
                {
                    section_for_upcomingprojects.map((sec,i) =>(
                        <div key = {i} className="flex flex-row  md:gap-[300px] gap-8 mt-10 md:mt-[100px] justify-center ">
                            {/* images */}
                            <div className="flex md:ml-[100px] pl-[40px]">
                                    <div  className="hexagon md:w-[250px] md:h-[250px] overflow-hidden w-[50px] h-[50px] " >
                                        <img className="w-full h-full object-cover" src={sec.photo1} alt="" />
                                    </div>  
                                    <div  className="hexagon md:w-[200px] md:h-[200px] overflow-hidden md:mt-[180px] md:ml-[-30px] mt-[40px] ml-[-12px] w-[40px] h-[40px] " >
                                        <img className="w-full h-full object-cover" src={sec.photo2} alt="" />
                                    </div>  
                                    <div  className="hexagon md:w-[150px] md:h-[150px] overflow-hidden md:mt-[300px] md:ml-[-370px] w-[30px] h-[30px] mt-[60px] ml-[-70px] " >
                                        <img className="w-full h-full object-cover" src={sec.photo3} alt="" />
                                    </div>  
                            </div>
                            <div>
                                <h1 className="text-red-500 md:text-[25px] font-bold text-[10px] pl-[20px] ">{sec.title}</h1>
                                <p  className="text-white md:pr-[100px] md:mt-[40px] md:text-[25px] font-thin text-[6px] pr-[8px] mt-[10px] pl-[20px] ">{sec.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

           <h1 className="text-blue-400 md:pt-[50px] md:pl-[100px] md:text-[40px] md:font-[400] font-['Airstrike'] pt-[20px] pl-[40px] text-[16px] font-[160px] " >ACHIEVEMENTS</h1>
            <div className="flex justify-between md:px-[150px] px-[10px] gap-[10px]">
                <div className="">
                    <div className="flex flex-col items-center md:mt-[50px] mt-[20px]">
                        <h1 className="text-white  md:text-[35px] font-[400] font-['Airstrike'] text-[14px]  " >13</h1>
                        <h6 className="text-white font-bold md:text-[10px] pt-0 text-[6px]" >Rank</h6>
                        <div className="bg-[#141234] w-fit md:px-[40px] md:py-[5px] md:rounded-[8px] text-center md:mt-[40px] text-white px-[16px] py-[2px] rounded-[3.6px] mt-[10px] md:text-[20px] text-[10px] whitespace-nowrap md:whitespace-normal">SAE ADC </div>
                    </div> 
                </div>
                <div className="">
                    <div className="flex flex-col items-center md:mt-[50px] mt-[20px]">
                        <h1 className="text-white  md:text-[35px] font-[400] font-['Airstrike'] text-[14px]  " >2</h1>
                        <h6 className="text-white font-bold md:text-[10px] pt-0 text-[6px]" >Rank</h6>
                        <div className="bg-[#141234] w-fit md:px-[40px] md:py-[5px] md:rounded-[8px] text-center md:mt-[40px] text-white px-[16px] py-[2px] rounded-[3.6px] mt-[10px] md:text-[20px] text-[10px] whitespace-nowrap md:whitespace-normal">Agrone Cognizance 2022</div>
                    </div> 
                </div>
                <div className="">
                    <div className="flex flex-col items-center md:mt-[50px] mt-[20px]">
                        <h1 className="text-white  md:text-[35px] font-[400] font-['Airstrike'] text-[14px]  " >56</h1>
                        <h6 className="text-white font-bold md:text-[10px] pt-0 text-[6px]" >Rank</h6>
                        <div className="bg-[#141234] w-fit md:px-[40px] md:py-[5px] md:rounded-[8px] text-center md:mt-[40px] text-white px-[16px] py-[2px] rounded-[3.6px] mt-[10px] md:text-[20px] text-[10px] whitespace-nowrap md:whitespace-normal">SAE Aerothon 2021</div>
                    </div> 
                </div>
            </div>
           <div className="mt-[100px]">
                <Footer/>
           </div>

        </div>
    )
}

export default Projectpage