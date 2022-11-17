import React from "react";
// import Logo from "../../Logo/Logo";
// import "./Toolbar.css";
import NavigationItems from "../NavigationItems";
import DrowerToggler from "../SideDrawer/DrawerToggler";

const Toolbar = ({drowerToggleClicked,isAuth, isAdmin,userDetails, setUserDetails}) => {
  return (
    <header className="Toolbar">
      <DrowerToggler clicked={drowerToggleClicked} />
      {/* <Logo height="50px" /> */}
      Logo
      <nav className="DesktopOnly">
        <NavigationItems isAuthenticated={isAuth} isAdmin={isAdmin} userDetails={userDetails} setUserDetails={setUserDetails} />
      </nav>
    </header>
  );
};

export default Toolbar;
