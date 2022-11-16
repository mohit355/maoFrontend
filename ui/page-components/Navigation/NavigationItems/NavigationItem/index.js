import React from "react";
import Link from "next/link";

const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      {props.link && <Link href={props.link} >
        {props.children}
      </Link>}

      {!props.link && <>
        {props.children}
      </>}
    </li>
  );
};

export default NavigationItem;
