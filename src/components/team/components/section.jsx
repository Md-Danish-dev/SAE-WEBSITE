
// Section Component with members passed as props
import ProfileCard from "./memberCard";

function Section({ members }) {
  return (
    <div className="flex justify-evenly flex-wrap ">
      {members.map((member, index) => (
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
  );
}

export default Section;