import ProfileCard from "./components/memberCard";
const TeamProfileGrid = () => {
  const teamMembers = [
  {
    name: "Dr. Arun Kumar Das",
    title: "Senior Developer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/arun-kumar-das",
    emailUrl: "mailto:arun.das@example.com"
  },
  {
    name: "Dr. Akshay Dwivedi",
    title: "Lead Architect",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/akshay-dwivedi",
    emailUrl: "mailto:akshay.dwivedi@example.com"
  },
  {
    name: "Piyush Agarwal",
    title: "Project Manager",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/piyush-agarwal",
    emailUrl: "mailto:piyush.agarwal@example.com"
  },
  {
    name: "Kartik Bajaj",
    title: "UI Designer",
    image: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/kartik-bajaj",
    emailUrl: "mailto:kartik.bajaj@example.com"
  },
  {
    name: "Sachin Bajaj",
    title: "Developer",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/sachin-bajaj",
    emailUrl: "mailto:sachin.bajaj@example.com"
  },
  {
    name: "Vikash Jain",
    title: "Designer",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/vikash-jain",
    emailUrl: "mailto:vikash.jain@example.com"
  },
  {
    name: "Pratik",
    title: "Developer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/pratik-dev",
    emailUrl: "mailto:pratik.dev@example.com"
  },
  {
    name: "Anshul",
    title: "Analyst",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/anshul-analyst",
    emailUrl: "mailto:anshul@example.com"
  },
  {
    name: "Nilesh Choudhary",
    title: "Team Lead",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/nilesh-choudhary",
    emailUrl: "mailto:nilesh.choudhary@example.com"
  },
  {
    name: "Sumit",
    title: "Developer",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/sumit-dev",
    emailUrl: "mailto:sumit.dev@example.com"
  },
  {
    name: "Yugandhar",
    title: "QA Engineer",
    image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/yugandhar-qa",
    emailUrl: "mailto:yugandhar.qa@example.com",
    special: true
  },
  {
    name: "Hari Shankar",
    title: "Backend Dev",
    image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/hari-shankar",
    emailUrl: "mailto:hari.shankar@example.com"
  },
  {
    name: "Komal",
    title: "Frontend Dev",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/komal-frontend",
    emailUrl: "mailto:komal.frontend@example.com"
  },
  {
    name: "Aakriti",
    title: "UX Designer",
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/aakriti-ux",
    emailUrl: "mailto:aakriti.ux@example.com"
  },
  {
    name: "Rohit",
    title: "DevOps",
    image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    linkedinUrl: "https://linkedin.com/in/rohit-devops",
    emailUrl: "mailto:rohit.devops@example.com"
  }
];


  return (
    <div className="min-h-screen bg-black relative overflow-hidden p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            title={member.title}
            imageUrl={member.image}
            linkedinUrl={member.linkedinUrl}
            emailUrl={member.emailUrl}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center text-gray-500 text-sm p-4">
        © 2023 Team Profile. All rights reserved.
      </div>

    </div>
  );
};

export default TeamProfileGrid;
