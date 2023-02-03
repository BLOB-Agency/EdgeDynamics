import React from "react";
import "./About.scss"
import OurCompany from "../../Components/OurCompany";
import OurVision from "../../Components/OurVision";

const About = () => {


    return(
        <div id="about" className="container__about">
            <OurCompany />
            <OurVision />
        </div>
    )
}

export default About;