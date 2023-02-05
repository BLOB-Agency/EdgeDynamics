import React from "react";
import "./About.scss"
import OurCompany from "../../Components/OurCompany";
import OurVision from "../../Components/OurVision";
import OurFounders from "../../Components/OurFounders";

const About = () => {


    return(
        <div id="about" className="container__about">
            <OurCompany />
            <OurVision />
            <OurFounders />
        </div>
    )
}

export default About;