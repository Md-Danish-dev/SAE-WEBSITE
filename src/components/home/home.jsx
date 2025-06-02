import React, { useEffect, useState } from "react";
import './home.css';
import wheel from '../../assets/icons/wheel.svg';
import gear from '../../assets/icons/gear.svg';
import { Link } from "react-router-dom";
// import { Carousel } from '3d-react-carousal';
import iitr from '../../assets/sponsor/iitr.png';
import tyreRight from '../../assets/TyreRight.png';
import tyreLeft from '../../assets/TyreLeft.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NewCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../footer";
import teamImage from '../../assets/team.jpg';
// import {homeImage} from '../../../public/'

const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    var newHeight = 400;
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        }   
    }, []);

    if(width <= 1000) {
        newHeight = 350;
    }
    if(width <= 810) {
        newHeight = 300;
    }
    if(width <= 700) {
        newHeight = 275;
    }

    let slides = [
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Media_8_rRlz8uqMb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654198619259' alt="1" height={newHeight} />,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Media_7_CvAqce5dR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198618951' alt="2" height={newHeight}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_5_EOiVvF0Ed.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654198618790' alt="3" height={newHeight}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_1_JrSImAfd6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198617455' alt="4" height={newHeight}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_3_KIoX1UitC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198617931' alt="5" height={newHeight}/>,
        <img  src='https://ik.imagekit.io/difw0fvlzb/news/Earlier_Media_2_LeTW3Mkzs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654198617567' alt="6" height={newHeight}/>,
    ];

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div style={{background: '#0D0D0D'}}>
            <div className="hero">
                <div className="hero_content">
                    <h4 data-aos="fade-up">Text 1</h4>
                    <h2 data-aos="fade-up">Text 2</h2>
                    <h2 data-aos="fade-up">Text 3</h2>
                    <div style={{paddingTop: '1rem'}}>
                        Text 4
                    </div>
                </div>
            </div>
            <div className="know">
                <div className="left_know" data-aos="fade-up"  >
                    <img src={wheel} className="wheelImg"/>
                    <h2><span style={{color: '#FF7C00', fontWeight: 700}}>Know</span> Team SAE</h2>
                    <p>
                        Team SAE IIT Roorkee is the official off-road racing team of IITR. The team designs and fabricates an off-road vehicle and participate in National level competition BAJA SAE India, the most prominent engineering level competition held in the country.
                    </p>
                    <Link to="/about" className="learnMore">Learn More</Link>
                </div>
                <div className="right_know">
                    <div className="gearImg">
                        <img src={ gear } className='gearSpin1'/>
                    </div>
                    <img src={teamImage} className="knowImg" data-aos="fade-up"/>
                </div>
            </div>


            <div className="stats">
                <div className="statLine1" data-aos="fade-up"  >
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>Title 1</p>
                        <h2>1</h2>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>Title 2</p>
                        <h2>7</h2>
                        <p>Lorem ipsum dolor sit</p>
                    </div>
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>Title 3</p>
                        <h2>14</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="statInfo" style={{maxWidth:'18rem'}}>
                        <p>Title 4</p>
                        <h2>12.5k+</h2>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
            </div>
            <div className="rollingStats">
                <img src={tyreLeft} className="tyreLeft" />
                <NewCarousel responsive={responsive} arrows={false} swipeable={false} autoPlay={true} infinite={true} containerClass="bajaStats">
                <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">6</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2024</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">8</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span> Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2024</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">3</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span> Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2023</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">2</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span> Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2023</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">6</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">6</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span> Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">6</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>LOREM IPSUM</span> Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">15</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2023</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">7</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2022</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">7</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2021</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">10</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2021</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">10</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>LOREM IPSUM</span> Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2021</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">7</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2017</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">2</h1>
                            </div>
                            <div className="statDesc">
                                <p>SAMPLE CATEGORY</p>
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                                <h2>Lorem ipsum</h2>
                            </div>
                            <p className="statCardTitle">EVENT 2013</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">13</h1>
                            </div>
                            <div className="statDesc">
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                            </div>
                            <p className="statCardTitle">EVENT 2012</p>
                        </div>
                    </div>
                    <div className="statContainer">
                        <div className="statCard">
                            <div className="statInfo">
                                <p>Title</p>
                                <h1 className="statRank">10</h1>
                            </div>
                            <div className="statDesc">
                                <h2><span style={{color: '#FFF', fontWeight: 700}}>SAMPLE TITLE</span></h2>
                            </div>
                            <p className="statCardTitle">EVENT 2011</p>
                        </div>
                    </div>
                </NewCarousel>
                <img src={tyreRight} className="tyreRight"/>
            </div>
            <div className="atv">
                <div className="left_atv" data-aos="fade-up">
                    <img style={{transform: 'scaleX(-1)', objectPosition: '10% 50%'}} src={teamImage} className="atvImg"/>
                </div>
                <div className="right_atv" data-aos="fade-up">
                    <h2>Sample <span style={{color: '#FF7C00', fontWeight: 700}}>Title</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <Link to="/sample" className="learnMore">Learn More</Link>
                </div>
            </div>
            <div className="partner">
                <h2>SAMPLE PARTNERS</h2>
                <marquee>
                    <div className="partLogo">
                        <div>
                            <p className="logoTitle">SAMPLE CATEGORY</p>
                            <img src={iitr} style={{height: '7rem'}}/>
                        </div>
                        <div>
                            <p className="logoTitle">Sample Category</p>
                            <div style={{display: 'flex', gap: '3rem'}}>
                            </div>
                        </div>
                        
                    </div>
                </marquee>
            </div>
            <div className="news">
                <h2>Sample <span style={{color: '#FF7C00', fontWeight: 700}}>News</span></h2>
                <p style={{width: '40%', paddingLeft: '20%'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <br/><br/><br/>
                <NewCarousel 
                  responsive={responsive} 
                  arrows={true} 
                  autoPlay={false} 
                  infinite={true}
                >
                  {slides.map((slide, index) => (
                    <div key={index}>{slide}</div>
                  ))}
                </NewCarousel>
            </div>
            <div style={{marginTop:'150px'}}
            ><Footer /></div>
            
        </div>
    )
}
export default Home;