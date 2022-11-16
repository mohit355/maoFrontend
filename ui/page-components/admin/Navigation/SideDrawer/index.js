import React from "react";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems";
// import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary/Auxillary";

const SideDrawer = (props) => {
  return (
    <Aux>
      {/* <Backdrop show={props.open} clicked={props.closed} /> */}
      <div
        className={`SideDrawer ${props.open ? "Open" : "Close"} `}
        onClick={props.closed}
      >
        <div className="logoMargin">
          {/* <Logo height="70px" /> */}
          logo
        </div>

        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
