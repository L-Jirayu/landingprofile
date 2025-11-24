import React, { useEffect, useRef, useState } from 'react';
import './fade.css';

function NextPage() {
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="profile-container page-gray" ref={containerRef}>

      {/* About Me */}
      <div className={`profile-row ${show ? 'fade-in' : 'fade-out'}`}>
        <img
          src="https://img2.pic.in.th/pic/IMG_20250102_082913.md.jpg"
          alt="About Me"
          className="profile-pic"
        />

        <div className="profile-section-wide">
          <h2>About Me</h2>
          <p><b>Name:</b> Mr. Jirayu Langphee</p>
          <p><b>Nickname:</b> Guy</p>
          <p><b>MBTI:</b> INFJ-T</p>
          <p><b>Address:</b> Samut Sakhon, Thailand</p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className={`profile-row ${show ? 'fade-in delay-1' : 'fade-out'}`}>
        <div className="profile-section-wide">
          <h2>Tech Stack</h2>
          <p><b>Frontend:</b> React, VanillaJS</p>
          <p><b>Backend:</b> Express, NestJS, PHP, Laravel, RestAPI, gRPC</p>
          <p><b>Database:</b> MongoDB, PostgreSQL, MySQL, phpmyadmin</p>
          <p><b>Environment:</b> XAMPP, Docker, NodeJS, Composer</p>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JEtM5r-4KY3aKg7Omx5BnvEKAga2Vuu45g&s"
          alt="Hobbies"
          className="profile-pic"
        />
      </div>

    </div>
  );
}

export default NextPage;
