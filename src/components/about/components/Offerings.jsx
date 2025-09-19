// src/pages/components/Offerings.jsx
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const offeringsList = [
    "Educational Resource: Access a wealth of educational resources curated by experts in the field.",
    "Hands-On Experience: We strongly believe in the importance of practical skills and creativity.",
    "Exciting Events and Competitions: Get your adrenaline pumping with our exciting lineup of events.",
    "Networking Opportunities: Connect with like-minded individuals, industry professionals, and potential mentors."
];

const Offerings = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-gray-300">
        <p className="text-md leading-relaxed mb-12 text-justify">
            The chapter can proudly boast of having committed members from the entire gamut of engineering streams offered at IIT Roorkee. Over the past eleven years, it has striven to quench the desire of its members to learn more about the ever-fascinating world of mobility engineering. <br/><br />

            It provides a platform to the students to share and increase their 'engineering' know-how through increased interaction between students at all levels, group activity, brainstorming and hands-on-engineering sessions, projects, industrial inputs and a whole bunch of other activities. Our dedicated members, emphasis on the foundations of a strong technical base and demonstrated commitment have combined to serve the needs of the upcoming next generation engineers.
        </p>
        <h2 className="text-sae-red text-3xl font-bold mb-8 text-center uppercase">What We Offer</h2>
        <div className="space-y-6">
          {offeringsList.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="text-sae-red w-6 h-6 mt-1 flex-shrink-0" />
              <p className="text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;