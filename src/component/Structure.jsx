import React from 'react';
import { FaEarthAsia } from "react-icons/fa6";
import { FaDev } from "react-icons/fa6";
import './interface.css';

function Structure() {
  return (
    <div
      className="section page-gray"
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* ข้อความทางซ้าย */}
        <div style={{ textAlign: 'center', marginRight: '200px' }}>
          <h1 style={{ fontSize: '3.0rem', margin: 0 }}>Welcome to My Profile</h1>
          <h2 style={{ fontSize: '2.0rem', marginTop: '16px' }}>ยินดีต้อนรับเข้าสู่โปรไฟล์ของฉัน</h2>
          <h3 style={{ fontSize: '1.0rem', marginTop: '16px' }}>(Living my life)</h3>
          <FaEarthAsia size={72} style={{ color: 'white', marginTop: '300px', marginRight: '30px' }} />
          <FaDev size={72} style={{ color: 'white' }} />
        </div>

        {/* รูปภาพทางขวา */}
        <div>
          <img
            src="https://img2.pic.in.th/pic/IMG_20240925_175728_1.md.jpg"
            alt="Myself"
            style={{
              width: '480px',
              borderRadius: '16px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.6)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Structure;
