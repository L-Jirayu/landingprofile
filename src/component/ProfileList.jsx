import React from 'react';
import './fadesidestep.css';

function ProfileList() {
  return (
    <div className="profile-list-container page-gray">

      {/* ======================= กลุ่มบน ======================= */}
      <div className="bottom-row">

        {/* Education */}
        <div className="black-box-single profile-section">
          <h2>Education Historical</h2>

          <p><b>Major:</b> Computer Engineering</p>
          <p><b>Department:</b> Electrical Technology Education</p>
          <p><b>University:</b> King Mongkut's University of Technology Thonburi (KMUTT)</p>

          <img
            src="https://www.print3dd.com/wp-content/uploads/2020/05/200429_0001.jpg"
            alt="Faculty"
            className="profile-image"
          />
        </div>

        {/* Web Dev Skill */}
        <div className="black-box-single profile-section">
          <h2>Computer Language</h2>

          <p><b>Default Language:</b> C,Python,Dart,Golang,Java,C#</p>
          <p><b>Web Language:</b> HTML, CSS, JavaScript, Typescipt, PHP</p>
          <p><b>Database Language:</b> SQL</p>

          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo"
            alt="WebCoding"
            className="profile-image"
          />
        </div>
      </div>


      {/* ======================= กลุ่มล่าง ======================= */}

      {/* Other Skill */}
      <div className="profile-section black-box-single">
        <h2>Nest-MERN Stack</h2>

        <b>React, NestJS, MongoDB, NodeJS</b>
        <p><b>Task Management Web: </b><a href = "https://minitaskmanage.vercel.app/">Click!</a></p>
        <p><b>Social Web: </b><a href = "https://minifeed.vercel.app/">Click!</a></p>

        <img
          src="https://info.stonewallco.com/hubfs/Professional%20Engineer.png"
          alt="OtherSkill"
          className="profile-image"
        />
      </div>

      {/* About Interest */}
      <div className="profile-section black-box-single">
        <h2>PHP Stack</h2>

        <b>Docker, Composer, Laravel, PostgreSQL</b> 
        <p><b>People Management: </b><a href = "https://github.com/L-Jirayu/mini-e-commerse">Click!</a></p>
        <p><b>Mini E-Commerse: </b><a href = "https://github.com/L-Jirayu/people-management-laravel">Click!</a></p>

        <img
          src="https://www.bankrate.com/2022/02/31124942/Deposits_What_is_interest.jpg?auto=webp&optimize=high&crop=16:9"
          alt="Interest"
          className="profile-image"
        />
      </div>

      {/* Learning Experience */}
      <div className="profile-section black-box-single">
        <h2>Microservice</h2>

        <b>RestAPI and gRPC</b>
        <p><b>Box Pack Scale: </b><a href = "https://github.com/L-Jirayu/3d-bin-packing">Click!</a></p>
        <p><b>Order Response System: </b><a href = "https://github.com/L-Jirayu/order-system-java">Click!</a></p>

        <img
          src="https://res.cloudinary.com/emg-prod/image/upload/f_auto,q_auto/v1/htmlpages/htmlpage22655/computerskillsopengraph.jpg"
          alt="ComSkill"
          className="profile-image"
        />
      </div>

    </div>
  );
}

export default ProfileList;
