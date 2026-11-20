import React from 'react';

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Біздің курстар</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Frontend әзірлеу</h3>
            <p>HTML, CSS, JavaScript және React.js негіздері.</p>
          </div>
          <div className="card">
            <h3>Backend әзірлеу</h3>
            <p>Python, Node.js және деректер қоры.</p>
          </div>
          <div className="card">
            <h3>UI/UX Дизайн</h3>
            <p>Figma бағдарламасында дизайн жасау.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;