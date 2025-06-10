import React from "react";

const achievements = [
  { rank: "13", event: "SAE ADC 2021" },
  { rank: "2", event: "Agrone Cognizance 2022" },
  { rank: "56", event: "SAE Aerothon 2021" },
];

const Achievements = () => {
  return (
    <div className="bg-black text-white py-0 px-4 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl text-blue-500 font-[airstrike] tracking-widest italic mb-12">
        ACHIEVEMENTS
      </h2>
      <div className="flex flex-wrap justify-center gap-16">
        {achievements.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-5xl font-airstrike mb-2">{item.rank}</div>
            <div className="text-sm mb-4">Rank</div>
            <div className="bg-[#18173A] text-white px-6 py-2 rounded-lg text-sm">
              {item.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
