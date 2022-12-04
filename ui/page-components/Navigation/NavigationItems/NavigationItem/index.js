import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'


const NavigationItem = (props) => {
    const router=useRouter();
  return (
    <li className={`NavigationItem ${router.pathname===props.link? 'activeLink':''}`}>
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
