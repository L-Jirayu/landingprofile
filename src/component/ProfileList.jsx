import React from 'react';
import './fadesidestep.css';

function ProfileList() {
  return (
    <div className="profile-list-container page-gray" style={{ marginTop: '100px' }}>
      {/* กลุ่มบน */}
      <div className="profile-section left">
        <h2>Other Skill</h2>
        <p><b>Study: </b>Everything about Algebra Calculation</p>
        <p><b>Motocycle: </b>Basic service ex. engine oil change</p>
        <p><b>Location: </b>Can know the places around my area</p>
        <img
          src="https://info.stonewallco.com/hubfs/Professional%20Engineer.png"
          alt="OtherSkill"
          className="profile-image"
        />
      </div>

      <div className="profile-section center">
        <h2>About Interest</h2>
        <p><b>Knownledge: </b>Web Development</p>
        <p><b>Recovery: </b>Playing Sport ex, running and swimming</p>
        <p><b>See around: </b>Watching news</p>
        <img
          src="https://www.bankrate.com/2022/02/31124942/Deposits_What_is_interest.jpg?auto=webp&optimize=high&crop=16:9"
          alt="Interest"
          className="profile-image"
        />
      </div>

      <div className="profile-section right">
        <h2>Learning Experience</h2>
        <p><b>Programming Language: </b>C, Python</p>
        <p><b>Backend: </b>MySQL, ASP .Net MVC</p>
        <p><b>Computer Knowledge: </b>Data Structure and Algorithm, Introduction of Software Engineering</p>
        <img
          src="https://res.cloudinary.com/emg-prod/image/upload/f_auto,q_auto/v1/htmlpages/htmlpage22655/computerskillsopengraph.jpg"
          alt="ComSkill"
          className="profile-image"
        />
      </div>

      {/* กลุ่มล่าง */}
      <div className="bottom-row">
        <div className="black-box-single profile-section">
          <h2>Education Historical</h2>
          <p><b>Major: </b>Computer Engineering</p>
          <p><b>Department: </b>Electrical Technology Education</p>
          <p><b>University: </b>King Mongkut's University Technology Thonburi (KMUTT)</p>
          <img
            src="https://www.print3dd.com/wp-content/uploads/2020/05/200429_0001.jpg"
            alt="Faculty"
            className="profile-image"
          />
        </div>

        <div className="black-box-single profile-section">
          <h2>Web Development Skill</h2>
          <p><b>Language: </b>HTML, CSS and JavaScript</p>
          <p><b>Frontend: </b>React</p>
          <p><b>Backend: </b>NestJS, Postman and MongoDB</p>
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo"
            alt="WebCoding"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileList;
