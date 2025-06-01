import React, { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import "./style.css";

export const About = () => {
  useEffect(() => {
    const handleResize = () => {
      const div3 = document.querySelector('.div-3');
      const frame6 = document.querySelector('.frame-6');
      const group = document.querySelector('.group');
      const group2 = document.querySelector('.group-2');
      const theChapterCan = document.querySelector('.the-chapter-can');
      const footer = document.querySelector('.footer-instance');
      
      // Adjust height for mobile view
      if (window.innerWidth <= 480) {
        div3.style.height = 'auto';
        
        // Ensure text doesn't overflow in the vision box
        if (frame6) {
          const textWrapper9 = document.querySelector('.text-wrapper-9');
          if (textWrapper9) {
            const availableHeight = frame6.clientHeight - 202; // Subtract top position of text
            textWrapper9.style.maxHeight = `${availableHeight}px`;
          }
        }
        
        // Adjust positions to prevent overlaps
        if (group && group2) {
          const groupBottom = group.getBoundingClientRect().bottom;
          const groupOffset = group.offsetTop;
          const newTop = groupOffset + groupBottom + 100; // Add some spacing
          group2.style.top = `${newTop}px`;
          
          if (theChapterCan) {
            theChapterCan.style.top = `${newTop + group2.offsetHeight + 100}px`;
          }
          
          if (footer) {
            footer.style.marginTop = `${newTop + group2.offsetHeight + theChapterCan.offsetHeight + 200}px`;
          }
        }
      } else {
        div3.style.height = '3935px';
        
        // Reset styles for larger screens
        const textWrapper9 = document.querySelector('.text-wrapper-9');
        if (textWrapper9) {
          textWrapper9.style.maxHeight = '';
        }
        
        if (group2) {
          group2.style.top = '';
        }
        
        if (theChapterCan) {
          theChapterCan.style.top = '';
        }
        
        if (footer) {
          footer.style.marginTop = '';
          footer.style.top = '';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount
    
    // Add a small delay to ensure elements are fully rendered
    setTimeout(handleResize, 500);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="about" data-model-id="1:199">
      <div className="div-3">
        <p className="igniting-passion-for">
          {" "}
          Igniting Passion for Automotive Excellence
        </p>

        <div className="frame-6">
          <div className="text-wrapper-8">OUR VISION</div>

          <div className="overlap-group">
            <img
              className="polygon"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-3@2x.png"
            />

            <img
              className="polygon-2"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-1@2x.png"
            />

            <img
              className="polygon-3"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-4@2x.png"
            />
          </div>

          <p className="text-wrapper-9">
            Society of Automotive Engineers (SAE) IIT Roorkee collegiate chapter
            was established in March 2000 with the collective effort of a group
            of students who had a strong urge to complement the theoretical
            knowledge imparted in the classroom, with emphasis on the practical
            aspects of engineering. With a humble beginning in March 2000, SAE
            IIT-R has grown steadily to its present strength of 300+ members and
            is one of the most active and popular technical societies in the
            campus.
          </p>
        </div>

        <div className="text-wrapper-10">GALLERY</div>

        <div className="text-wrapper-11">CULTURE</div>

        <div className="group">
          <div className="overlap">
            <img
              className="polygon-4"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-4-1@2x.png"
            />

            <img
              className="polygon-5"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-5@2x.png"
            />

            <img
              className="polygon-6"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-2@2x.png"
            />

            <img
              className="polygon-7"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-1-1@2x.png"
            />

            <img
              className="polygon-8"
              alt="Polygon"
              src="https://c.animaapp.com/Fbj8Hkb3/img/polygon-6@2x.png"
            />
          </div>
        </div>

        <div className="group-2">
          <p className="educational">
            Educational Resources: Access a wealth of educational resources
            curated by experts in the field. From technical journals and
            research papers to informative articles and guides, we&#39;re
            dedicated to expanding your understanding of automotive engineering.
          </p>

          <p className="hands-on-projects">
            <br />
            Hands-On Projects: Dive into real-world automotive projects that
            challenge your skills and creativity. Our hands-on initiatives
            provide you with a chance to apply theoretical knowledge,
            collaborate with peers, and develop practical solutions that could
            shape the future of transportation.
          </p>

          <p className="passionate-community">
            Passionate Community: Join a community that shares your enthusiasm
            for automobiles. Whether you&#39;re a student with a passion for
            design, a professional seeking to stay updated on industry trends,
            or an individual fascinated by the engineering marvels that power
            our world, you&#39;ll find your place at SAE.
          </p>

          <p className="text-wrapper-12">
            Engaging Events: Immerse yourself in a world of automotive wonder
            through our exciting events. From workshops and technical seminars
            to interactive showcases and networking sessions, we offer a diverse
            range of opportunities to expand your horizons and connect with
            like-minded enthusiasts.
          </p>
        </div>

        <p className="the-chapter-can">
          The chapter can proudly boast of having committed members from the
          entire gamut of engineering streams offered at IIT Roorkee. Over the
          past eleven years, it has striven to quench the desire of its members
          to learn more about the ever-fascinating world of mobility
          engineering.
          <br />
          <br />
          It provides a platform to the students to share and increase their
          &#39;engineering&#39; know-how through increased interaction between
          students at all levels, group activity, brainstorming and
          hands-on-engineering sessions, projects, industrial inputs and a whole
          bunch of other activities. Our dedicated members, emphasis on the
          foundations of a strong technical base and demonstrated commitment
          have combined to serve the needs of the upcoming next generation
          engineers.
        </p>

        <div className="component">
          <img
            className="group-3"
            alt="Group"
            src="https://c.animaapp.com/Fbj8Hkb3/img/group-3-2.png"
          />
        </div>

        <Footer
          className="footer-instance"
          facebook="https://c.animaapp.com/Fbj8Hkb3/img/facebook-1.svg"
          instagram="https://c.animaapp.com/Fbj8Hkb3/img/instagram-1.svg"
        />
        <NavBar
          className="NAV-BAR-instance"
          frameNavlinksAboutLine="/img/line-1.svg"
          frameNavlinksAboutLineClassName="design-component-instance-node"
          frameNavlinksProjectLine="/img/line-1-2.svg"
          frameNavlinksProjectLineClassName="design-component-instance-node"
          frameNavlinksResoucresLine="/img/line-1-3.svg"
          frameNavlinksResoucresLineClassName="NAV-BAR-2"
          frameNavlinksTeamLine="/img/image.svg"
          frameNavlinksTeamLineClassName="design-component-instance-node"
        />
        <div className="text-wrapper-13">What We Offer</div>
      </div>
    </div>
  );
};
