import Section from "./components/section";
import ArupImage from "../../assets/team/ArupImage.jpg";
import AkshayImage from "../../assets/team/AkshayImage.jpg";
import PiyushImage from "../../assets/team/PiyushImage.jpg";
import GavinImage from "../../assets/team/GavinImage.jpg";
import NikhilImage from "../../assets/team/NikhilImage.png";
import YashImage from "../../assets/team/YashImage.png";
import AyushImage from "../../assets/team/AyushImage.jpg";
import MohitImage from "../../assets/team/MohitImage.jpg";
import SumitImage from "../../assets/team/SumitImage.jpg";
import YogendraImage from "../../assets/team/YogendraImage.jpg";
import DevImage from "../../assets/team/DevImage.jpg";
import SakshiImage from "../../assets/team/SakshiImage.jpg";
import AnshiImage from "../../assets/team/AnshiImage.jpg";
import RohitImage from "../../assets/team/RohitImage.jpg";

const TeamProfileGrid = () => {
  const firstRow = [
  {
    name: "Dr. Arup Kumar Das",
    title: "Faculty Advisor",
    image: ArupImage,
    linkedinUrl: "",
    emailUrl: ""
  },
  {
    name: "Dr. Akshay Devivedi",
    title: "Faculty Advisor",
    image: AkshayImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];

const secondRow = [
  {
    name: "Piyush Agarwal",
    title: "Chairperson",
    image: PiyushImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];

const thirdRow = [
  {
    name: "Gavin Bedi",
    title: "Vice Chairperson",
    image: GavinImage,
    linkedinUrl: "",
    emailUrl: ""
  },
  {
    name: "Gavin Bedi",
    title: "Vice Chairperson",
    image: GavinImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];

const fourthRow = [
  {
    name: "Nikhil Gill",
    title: "Secretary",
    image: NikhilImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];

const fifthRow = [
  {
    name: "Yash",
    title: "Joint Secretary",
    image: YashImage,
    linkedinUrl: "",
    emailUrl: ""
  },
  {
    name: "Ayush",
    title: "Joint Secretary",
    image: AyushImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];

const sixthRow = [
  {
    name: "Mohit Chaudhary",
    title: "Technical Head",
    image: MohitImage,
    linkedinUrl: "",
    emailUrl: ""
  },
  {
    name: "Sumit",
    title: "Technical Head",
    image: SumitImage,
    linkedinUrl: "",
    emailUrl: ""
  },
  {
    name: "Yogendra",
    title: "Technical Head",
    image: YogendraImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];

const seventhRow = [
  {
    name: "Dev Singhal",
    title: "Design Head",
    image: DevImage,
    linkedinUrl: "",
    emailUrl: ""
  },
  {
    name: "Sakshi",
    title: "Design Head",
    image: SakshiImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];

const eighthRow = [
  {
    name: "Anshi",
    title: "Head of Events",
    image: AnshiImage,
    linkedinUrl: "",
    emailUrl: ""
  },
  {
    name: "Rohit",
    title: "Head of Events",
    image: RohitImage,
    linkedinUrl: "",
    emailUrl: ""
  }
];



  return (
    <div className="min-h-screen bg-black relative overflow-hidden p-8">
      <Section members={firstRow} />
      <Section members={secondRow} />
      <Section members={thirdRow} />
      <Section members={fourthRow} />
      <Section members={fifthRow} />
      <Section members={sixthRow} />
      <Section members={seventhRow} />
      <Section members={eighthRow} />

      <div className="absolute bottom-0 left-0 right-0 text-center text-gray-500 text-sm p-4">
        © 2023 Team Profile. All rights reserved.
      </div>

    </div>
  );
};

export default TeamProfileGrid;
