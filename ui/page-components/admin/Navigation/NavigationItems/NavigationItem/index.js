import React from "react";
import Link from "next/link";

const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <Link href={props.link} className="active">
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
