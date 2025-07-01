import React from 'react'

function LastPage() {
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

        <div style={{ marginRight: '80px' }}>
          <img
            src="https://img5.pic.in.th/file/secure-sv1/IMG_20250313_153904.md.jpg"
            alt="Myself"
            style={{
              width: '480px',
              borderRadius: '16px',
              boxShadow: '0 6px 16px rgba(0,0,0,0.6)',
              maxWidth: '100%',
            }}
          />
        </div>

        <div style={{ textAlign: 'left', maxWidth: '500px' }}>
          <h1>Full Stack development may be tough, but it's the foundation of true web development.</h1>
          <p>— Myself (Jirayu Langphee)</p>
        </div>
      </div>
    </div>
  );
}

export default LastPage;

