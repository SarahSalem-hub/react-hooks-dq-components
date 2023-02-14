import React from "react";
import Menu from "./MenuLinks"
import Logo from "./Logo"
import Search from "./Search"

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo />
      <Menu />
      <Search />
    </aside>
  );
}

export default SideMenu;
