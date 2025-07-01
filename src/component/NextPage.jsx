import React, { useEffect, useRef, useState } from 'react';
import './fade.css';

function NextPage() {
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="profile-container page-gray" ref={containerRef}>

      {/* About Me: รูปซ้าย กล่องขวา */}
      <div className={`profile-row ${show ? 'fade-in' : 'fade-out'}`}>
        <img src="https://img2.pic.in.th/pic/IMG_20250102_082913.md.jpg" alt="About Me" className="profile-pic" />
        <div className="profile-box">
          <h2>About Me</h2>
          <p><b>Name:</b> Mr. Jirayu Langphee</p>
          <p><b>MBTI:</b> INFJ-T</p>
          <p><b>Position:</b> Full Stack Web Developer Internship</p>
          <p><b>Work Place:</b> CTM-IT</p>
        </div>
      </div>

      {/* Hobbies: กล่องซ้าย รูปขวา */}
      <div className={`profile-row ${show ? 'fade-in delay-1' : 'fade-out'}`}>
        <div className="profile-box">
          <h2>Hobbies</h2>
          <p><b>Entertainment:</b> Games, Music, Movies</p>
          <p><b>Relax:</b> Sleeping, Watch Comedy</p>
          <p><b>Study:</b> Studying knowledge about computer technology</p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JEtM5r-4KY3aKg7Omx5BnvEKAga2Vuu45g&s" alt="Hobbies" className="profile-pic" />
      </div>
    </div>

  );
}

export default NextPage;

