import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Tech() {
  const [selected, setSelected] = useState(null);

  const projects = [
    { title: "Disaster Preparedness in Virtual Reality", desc: "VR simulation for preparation of Fire Disasters", details: "App Developed in Oculus Meta Quest 2 VR headset for fire disaster awareness and preparedness. It is a 'Serious game' with social cause to inculcate incident responsive behaviour in daily life and reduce risks. Tech stack used: Unity, C#, Blender", url:"https://youtu.be/kITby5Tniqc", img: "/tech project 1.png" },

    { title: "Business Analysis of Reliance Jio Infocomm", desc: "A Business Intelligence project", details: "Business Analysis of Reliance Jio Infocomm. Concepts included: Schema, ETL, OLAP, K-means clustering Tech stack used: Tableau, MySQL", pdf: "JioReportFinal.pdf", img: "/tech project 2.png" },
  //   {
  //   title: "AI Dashboard",
  //   desc: "Data visualization tool",
  //   details: "Detailed explanation here...",
  //   img: "/image3.jpg",

  //   video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   pdf: "/branding.pdf",
  //   url: "https://example.com"
  // }
  ];

  return (
    <div className="content">
      <section id="about" className="section">
        <div className="about-grid">
          <div className="about-text">
            <h2>Hi, Aishwarya here!</h2>
            <div className="section-content">I'm a software developer with experience in scalable UI systems and backend services for cloud platforms. I love solving user probelms and building seamless user experiences with a strong focus on usability, performance, and intuitive design systems. 
              <br></br>
              <br></br>
              I'm a graduate from Cummins College of Engineering for Women, Pune  majoring in IT.
              <br></br>
              <br></br>
              In my free time, I like to eat 5-star and do nothing.
              <br></br>
              It's surprisingly better than doom-scrolling!
            </div>
          </div>
          <div className="about-image">
            <img src="/me.jpg" />
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="section-content">
        </div>
<span style={{ color: '#00d4ff', fontSize: '30px' }}>Oracle</span> 
<p><span style={{ fontStyle: 'italic' }}>Bengaluru, KA</span></p>
<br></br><br></br>
<p>Software Developer - UX Engineering</p>
<br></br>
              <br></br>
<ul>
          <li>Developed <span style={{ color: '#00d4ff' }}>UI components</span> and <span style={{ color: '#00d4ff' }}>template builders</span> using React and TypeScript for OCI Console (MAUI)</li>
          <li>Enabled scalable UI development through <span style={{ color: '#00d4ff' }}>configuration-driven templates</span> contributing to scalable and consistent interface generation</li>
          <li>Supported migration and onboarding of 90+ plugin teams onto Redwood, reducing integration friction and improving <span style={{ color: '#00d4ff' }}>UI consistency</span></li>
          <li>Contributed to building an <span style={{ color: '#00d4ff' }}>internal AI-powered assistant</span> for MAUI which leverages a structured knowledge base (Confluence-derived documentation), enabling plugin teams to self-serve configuration queries and reducing reliance on on-call support</li>
          <li>Explored <span style={{ color: '#00d4ff' }}>performance optimization</span> of large data for 40+ chart metrics using virtualization, improving rendering performance and responsiveness</li>
          
          </ul>


<br></br><br></br>
              <p>Member of Technical Staff at OCI - OCS Billing Service</p>
<br></br><br></br>
<ul>
          <li>Developed <span style={{ color: '#00d4ff' }}>REST APIs</span> for cost computation for generating invoice payloads for OCI Alloys</li>
          <li>Successfully migrated 40+ service instances in all realms to an updated version of Oracle Linux running on the
servers</li>
          <li>Built an automation pipeline for triggering dataflow tasks and cron jobs for analytics with Data Integration</li>
          <li>Practised Test Driven development through JUnits and Integration testing frameworks, ensuring test coverage and
facilitating reliability of the application</li>
          
          
          </ul>
<br></br>
              <br></br>

<span style={{ color: '#00d4ff', fontSize: '30px' }}>GAP Inc.</span> 
<p><span style={{ fontStyle: 'italic' }}>Remote</span></p>
<br></br><br></br>
<p>Software Engineering Intern</p>
<br></br>
              <br></br>
<ul>
          <li>Created dashboards in Splunk for monitoring and analysis using <span style={{ color: '#00d4ff' }}>Splunk Queries</span> for the 4 major brands of GAP which contributes to making relevant business decisions in terms of apparel market</li>
          
          </ul>


      
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="section-content">
        <ul>
          <li><span style={{ color: '#00d4ff' }}>Frontend</span>: HTML, CSS, JavaScript, TypeScript, Jest</li>
          <li><span style={{ color: '#00d4ff' }}>Backend</span>: Java, Python, SQL</li>
          <li><span style={{ color: '#00d4ff' }}>Tools / Frameworks</span>: ReactJS, Git, Terraform, OCI</li>
          <li><span style={{ color: '#00d4ff' }}>UX</span>: Figma, UX principles</li>
        </ul>

        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} onClick={setSelected} />
          ))}
        </div>
      </section>

      <section id="leadership" className="section">
        <h2>Leadership Roles</h2>
        <div className="section-content">
        <ul>
          <li><span style={{ color: '#00d4ff' }}>Represented India</span> at <span style={{ color: '#00d4ff' }}>NASA</span>, USSRC, Huntsville AL, USA through Honeywell Leadership Challenge Academy (HLCA)
          <ul>
            <li>Global Students from 30+ countries</li>
            <li>A full scholarship leadership training program inclusive of Science, Technology, Engineering and Mathematics </li>
            <li>Real world challenges and team building activities – Incident Command, rocket simulation, aviation challenges, flight simulators and moon walk experience</li>
          </ul>
          </li>
          <li>Responsibly <span style={{ color: '#00d4ff' }}>managed</span> cultural fest with a footfall of <span style={{ color: '#00d4ff' }}>3500+</span> as a Student Panel member
          </li>
           <li>Co-founder of college XR club - Avatri </li>
        </ul>

        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}