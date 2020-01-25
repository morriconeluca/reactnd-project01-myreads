import React from 'react';

const Header = ({children}) => {
  return (
    <div className="header-row">
      <div className="container">
        <header className="header">
          {children}
        </header>
      </div>
    </div>
  );
};

export default Header;