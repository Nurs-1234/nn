import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">BilimHub</h1>
        <nav className="nav">
          <a href="#main">Басты бет</a>
          <a href="#about">Біз туралы</a>
          <a href="#services">Курстар</a>
          <a href="#footer">Байланыс</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;