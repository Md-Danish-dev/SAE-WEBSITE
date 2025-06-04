import React from 'react';
import Group4 from '../../assets/Group 4.png';

const Culture = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <h1 
          className="text-[#4AA7FF] text-6xl font-['Airstrike']"
          style={{ fontFamily: 'Airstrike' }}
        >
          CULTURE
        </h1>

        {/* Hexagon Image */}
        <div className="flex justify-center w-full">
          <img 
            src={Group4} 
            alt="SAE Culture" 
            className="w-full max-w-3xl"
          />
        </div>

        {/* Main Text Content */}
        <div className="text-white space-y-6 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed">
            The chapter can proudly boast of having committed members from the entire gamut of engineering streams offered at 
            IIT Roorkee. Over the past eleven years, it has striven to quench the desire of its members to learn more about 
            the ever-fascinating world of mobility engineering.
          </p>
          <p className="text-lg leading-relaxed">
            It provides a platform to the students to share and increase their 'engineering' know-how through increased interaction 
            between students at all levels, group activity, brainstorming and hands-on-engineering sessions, projects, industrial 
            inputs and a whole bunch of other activities. Our dedicated members, emphasis on the foundations of a strong technical 
            base and demonstrated commitment have combined to serve the needs of the upcoming next generation engineers.
          </p>
        </div>

        {/* What We Offer Section */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-red-600 text-3xl font-sans font-bold">
            What We Offer
          </h2>
          
          <ul className="text-white space-y-6 list-none">
            <li className="flex items-start space-x-4">
              <span className="text-red-600 text-2xl">•</span>
              <p className="text-lg leading-relaxed">
                Educational Resources: Access a wealth of educational resources curated by experts in the field. From technical 
                journals and research papers to informative articles and guides, we're dedicated to expanding your understanding of 
                automotive engineering.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-600 text-2xl">•</span>
              <p className="text-lg leading-relaxed">
                Hands-On Projects: Dive into real-world automotive projects that challenge your skills and creativity. Our 
                hands-on initiatives provide you with a chance to apply theoretical knowledge, collaborate with peers, and 
                develop practical solutions that could shape the future of transportation.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-600 text-2xl">•</span>
              <p className="text-lg leading-relaxed">
                Passionate Community: Join a community that shares your enthusiasm for automobiles. Whether you're a student 
                with a passion for design, a professional seeking to stay updated on industry trends, or an individual fascinated by the 
                engineering marvels that power our world, you'll find your place at SAE.
              </p>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-red-600 text-2xl">•</span>
              <p className="text-lg leading-relaxed">
                Engaging Events: Immerse yourself in a world of automotive wonder through our exciting events. From workshops 
                and technical seminars to interactive showcases and networking sessions, we offer a diverse range of opportunities 
                to expand your horizons and connect with like-minded enthusiasts.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Culture;