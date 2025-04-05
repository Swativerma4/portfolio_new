import React from 'react';
import "../Skill.css";
import work from "../../assets/project.png";
import project2 from "../../assets/project2.png";
import Project1 from "../../assets/Project1.jpg"; // Keep this if you're using it

export default function Project() {
  return (
    <section className="portfolio-section">
      <div id="portfolio">
        <div className="main-text" id="project">
          <h2>Latest <span>Project</span></h2>
          <div className="portfolio-content">

            {/* Project 1 */}
            <div className="row">
              <img src={work} alt="Project 1" />
              <div className="layer">
                <h5>Spice-Synergy</h5>
                <p>Spice-Synergy, food website transformed the culinary journey with innovative features, allowing users to craft personalized dining experiences effortlessly.</p>
                <a href="assets/project.png"><i className='bx bx-show' style={{ color: '#8750f7' }}></i></a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="row">
              <img src={Project1} alt="Project 2" />
              <div className="layer">
                <h5>WI2025</h5>
                <p>Developed a full-stack media-sharing web app (WI2025) using Next.js, React, Node.js, Express, and MongoDB with JWT authentication, file uploads, and real-time like/comment features.</p>
                <a href="https://github.com/Swativerma4/WI2025"><i className='bx bx-cloud' style={{ color: '#8750f7' }}></i></a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="row">
              <img src={project2} alt="Project 3" />
              <div className="layer">
                <h5>To-Do-List</h5>
                <p>To-do list application, users can efficiently manage their tasks by adding new items, marking them as completed, and removing items as needed.</p>
                <a href="resources/aws_doc.pdf"><i className='bx bx-cloud' style={{ color: '#8750f7' }}></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
