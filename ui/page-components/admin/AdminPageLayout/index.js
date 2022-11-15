import React, { useState } from 'react'
import Aux from '../../hoc/Auxillary/Auxillary';
import SideDrawer from "../Navigation/SideDrawer/index.js";
import Toolbar from "../Navigation/Toolbar/index";

const AdminPageLayout = (props) => {

  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prev) =>!prev);
  };

  return (
    <Aux>
        <Toolbar
          isAuth={props.isAuthenticate}
          drowerToggleClicked={sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={props.isAuthenticate}
          open={showSideDrawer}
          closed={sideDrawerClosedHandler}
        />
        <main className="Content"> {props.children} </main>
      </Aux>
  )
}

export default AdminPageLayout