import React from "react";
import ProjectComp from '../components/projectcomp/projectcomp'
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Achievements from "../components/Achievements/achievements";

const Projects = () => {
    return (
        <div className="bg-black min-h-screen">
            <NavBar />

            <div className="w-1/4 ml-[12.5%] my-8 bg-black">
                <h1 className="text-5xl font-extrabold text-justify font-[Airstrike] tracking-widest text-[#2CA4F7]">
                    OUR PROJECTS
                </h1>
            </div>

            <div className="flex flex-row flex-wrap gap-8 justify-center px-8">
                <ProjectComp image="../src/assets/Rectangle 7.png" title="Radio Controlled nitro car"
                    description="Radio-Controlled (RC) Cars are battery/fuel powered miniature ATV (all-terrain vehicle) cars that can be controlled from a distant radio controller. Every year, a team of dedicated members are selected for building up their very own RC Nitro car. This project specifically focuses on designing and fabrication of a Nitro-fuel powered IC-Engine Car (not to be confused with electric cars). Major aspects of project work includes working on Engine, Chassis, Drivetrain, Suspension, Body-Balance, Runtime and Upkeep of the car. The product takes part in Powerdrift, a center-stage event at IIT-R technical fest - Cognizance and there's no end to its competitive nature!"/>
                <ProjectComp image="../src/assets/Rectangle 7.png" title="Hover Craft"
                    description="Hovercraft is an air cushion vehicle having the capability to run over land, water, ice or any muddy surface used by the military in disastrous situations. An air cushion is created below the hull for lifting the vehicle. This cushion of air is contained by an flexible airtight skirt. This project aims to design and fabricate a small scale RC hovercraft that can run over land and water."/>
                <ProjectComp image="../src/assets/Rectangle 7.png" title="Quad Campcopter"
                    description="Quadcopter unmanned aerial vehicles are used for surveillance by military and law enforcement agencies, video shooting as well as search and rescue missions in urban environments. These project comprises of a Quadcopter with a camera and the aim is to fabricate Flight Controller Designing, Electronics and assembling of components. This project unifies the Mechanical. Electronic as well as Coding skills of the team members. The product would be a Quad-copter with a camera mounted on it and the flight controller designing is also involved."/>
                <ProjectComp image="../src/assets/Rectangle 7.png" title="Conventual Glider (RC plane)"
                    description="This project will give you a basic understanding of the physics and related subsystems of an aircraft, using which, you will be constructing and flying a Model Remote Controlled Plane."/>
                <ProjectComp image="../src/assets/Rectangle 7.png" title="Flying Wing (RC Plane)"
                    description="This is a different class of aircraft, consisting of wings only. Designed in pusher configuration, with no rudder or elevator, its ailerons are enough to provide any moment it needs. The cockpit is merged with the thickness of the wing at the centre."/>
                <ProjectComp image="../src/assets/Rectangle 7.png" title="Twin Boom Pusher ( RC Plane )"
                    description="This project encompasses the manufacturing of an amateur level radio-controlled plane with a pusher configuration. Unlike the conventional design, in pusher configuration, the propeller is mounted behind the engine, so as to push the plane forward. Aside from the fabrication, learning the fundamentals of flight will also be an integral part of the project."/>

                <div className="w-1/4 ml-[12.5%] my-8 bg-black">
                    <h1 className="text-5xl font-extrabold text-left font-[Airstrike] tracking-widest text-[#2CA4F7]">
                        UPCOMING PROJECTS
                    </h1>
                </div>

                <ProjectComp image="../src/assets/Rectangle 7.png" title="Open Rocket"
                    description="It's a rocket design software, interested members worked on the tutorials and designed a first stage propulsion rocket, simulated their velocity and acceleration curve along with the trajectory"/>
            </div>
            
            <Achievements/>
            
            <Footer />
        </div>
    );
};
export default Projects;