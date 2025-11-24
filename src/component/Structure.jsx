import React from 'react';
import { FaEarthAsia } from "react-icons/fa6";
import { FaDev } from "react-icons/fa6";

function Structure() {
  return (
    <div className="section page-gray structure-container">
      <div className="structure-wrapper">
        {/* ข้อความทางซ้าย (หรือบนเมื่อจอแคบ) */}
        <div className="structure-text">
          <h1>Welcome to My Profile</h1>
          <h2>ยินดีต้อนรับเข้าสู่โปรไฟล์ของฉัน</h2>
          
          <h1><a href='https://github.com/l-jirayu'>My Github</a></h1>
          <div className="structure-icons">
            <FaEarthAsia size={64} />
            <FaDev size={64} />
          </div>
        </div>

        {/* รูปภาพทางขวา (หรือใต้เมื่อจอแคบ) */}
        <div className="structure-image">
          <img
            src="https://img2.pic.in.th/pic/IMG_20240925_175728_1.md.jpg"
            alt="Myself"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Structure;

