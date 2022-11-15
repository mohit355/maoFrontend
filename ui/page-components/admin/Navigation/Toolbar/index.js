import React from "react";
// import Logo from "../../Logo/Logo";
// import "./Toolbar.css";
import NavigationItems from "../NavigationItems";
import DrowerToggler from "../SideDrawer/DrawerToggler";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DrowerToggler clicked={props.drowerToggleClicked} />
      {/* <Logo height="50px" /> */}
      Logo
      <nav className="DesktopOnly">
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default Toolbar;
