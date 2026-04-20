import React from "react";
import image1 from "./../../assets/hero1.jpg";
import Footer from "../footer/footer";

const Projectpage = () => {
    const sections_for_ourprojects = [
        {
            title: "Lorem ipsum dolor sit.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis id, officia rerum explicabo consectetur labore beatae velit, quod minus amet, esse eaque? Et ex deleniti quia excepturi quis a voluptates fuga tempora. Magni accusamus nihil modi quo commodi praesentium eaque ad optio, blanditiis, sed eveniet cumque consequatur quisquam consectetur quas quibusdam quasi reprehenderit nobis eius dignissimos doloribus aut esse.",
            photo1: image1, photo2: image1, photo3: image1
        }
    ];

    return (
        <div className="bg-black min-h-screen w-full overflow-x-hidden">
            <h1 className="text-blue-400 font-['Airstrike'] pt-[40px] pl-[40px] xl:pt-[60px] xl:pl-[100px] text-[28px] md:text-[40px]">
                OUR PROJECTS
            </h1>

            <div className="flex flex-col gap-24">
                {sections_for_ourprojects.map((sec, i) => (
                    <div 
                        key={i} 
                        // We use 'xl' (1280px) to switch to row. 
                        // Anything smaller than 1280px stays in a column to prevent ANY overlap.
                        className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mt-10 px-6 xl:px-[100px]"
                    >
                        <div className="
    flex flex-row flex-shrink-0
    xl:scale-100 xl:origin-left

    /* MOBILE + TABLET FIX */
    max-xl:w-full
    max-xl:scale-100
    max-xl:h-auto
    max-xl:gap-3
    max-xl:justify-between
">
    <div className="
        hexagon overflow-hidden flex-shrink-0
        max-xl:w-[32%] max-xl:aspect-square
        xl:w-[250px] xl:h-[250px]
    ">
        <img className="w-full h-full object-cover" src={sec.photo1} alt="" />
    </div>

    <div className="
        hexagon overflow-hidden flex-shrink-0
        max-xl:w-[32%] max-xl:aspect-square
        max-xl:mt-0 max-xl:ml-0
        xl:w-[200px] xl:h-[200px] xl:mt-[180px] xl:ml-[-30px]
    ">
        <img className="w-full h-full object-cover" src={sec.photo2} alt="" />
    </div>

    <div className="
        hexagon overflow-hidden flex-shrink-0
        max-xl:w-[32%] max-xl:aspect-square
        max-xl:mt-0 max-xl:ml-0
        xl:w-[150px] xl:h-[150px] xl:mt-[300px] xl:ml-[-370px]
    ">
        <img className="w-full h-full object-cover" src={sec.photo3} alt="" />
    </div>
</div>
                        <div className="w-full xl:max-w-[600px] mt-10 xl:mt-0">
                            <h1 className="text-red-500 text-[24px] md:text-[32px] font-bold text-center xl:text-left">
                                {sec.title}
                            </h1>
                            <p className="text-white text-[16px] md:text-[20px] font-thin mt-6 leading-relaxed text-justify xl:text-left">
                                {sec.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Achievements Section */}
            <div className="mt-32">
                <h1 className="text-blue-400 font-['Airstrike'] pl-[40px] xl:pl-[100px] text-[28px] md:text-[40px]">
                    ACHIEVEMENTS
                </h1>
                
                <div className="flex flex-wrap justify-center xl:justify-between px-6 xl:px-[150px] gap-12 mt-12 pb-20">
                    {[
                        { rank: "13", event: "SAE ADC" },
                        { rank: "2", event: "Agrone Cognizance 2022" },
                        { rank: "56", event: "SAE Aerothon 2021" }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h1 className="text-white text-[40px] font-['Airstrike']">{item.rank}</h1>
                            <h6 className="text-white font-bold text-[10px] uppercase tracking-widest">Rank</h6>
                            <div className="bg-[#141234] border border-blue-900 mt-4 px-10 py-3 rounded-lg text-white text-[18px] md:text-[22px]">
                                {item.event}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Projectpage;