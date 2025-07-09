import React from "react";
import "./About.css";
import Navbar from "../../../Components/UserComponents/Nav/Navbar";

const About = () => {
    return (
        <>
        <Navbar/>
            <div className="about-container">
                <section className="about-hero">
                    <h1>About <span>BloodBank</span></h1>
                    <p>
                        At BloodBank, we believe that one drop can make a difference.
                        We connect donors and recipients in real-time, ensuring that no life is lost due to a shortage of blood.
                    </p>
                </section>

                <section className="about-mission">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to build a safe, accessible, and responsive blood donation ecosystem. We empower individuals
                        to step up as heroes, help hospitals and NGOs streamline donation, and create a community built on compassion.
                    </p>
                </section>

                <section className="about-values">
                    <h2>What We Stand For</h2>
                    <ul>
                        <li><strong>Transparency:</strong> Open and verified donor/receiver data.</li>
                        <li><strong>Accessibility:</strong> Easy to register, search, and connect.</li>
                        <li><strong>Urgency:</strong> Real-time availability to save lives faster.</li>
                        <li><strong>Respect:</strong> Honoring every donor and their noble act.</li>
                    </ul>
                </section>

                <section className="about-cta">
                    <h3>Be someone's hope today.</h3>
                    <button className="btn-primary">Join as Donor</button>
                </section>
            </div>
        </>
    );
};

export default About;
