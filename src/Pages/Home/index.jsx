import React from "react";
import "./Home.scss"
const Home = () => {

    return(
        <section className="container__home" id="home">
            <video src="/assets/bg-home.mp4" muted autoPlay playsInline={true} loop></video>
            <div className="container__home-title">
            <h1>"We're young passionate people <strong>reshaping</strong> the new era of Industrial IoT just because we draw out of the box"</h1>
            <span className="author">Mokhliss Barriol, Co-Founder Edge Dynamics.</span>
            </div>
            
        </section>
    )
}
export default Home;