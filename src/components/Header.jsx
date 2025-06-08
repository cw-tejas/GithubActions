import React from "react";

const Header = ({ title = "React Counter App" }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
