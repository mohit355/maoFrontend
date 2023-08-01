// import Home from '../ui/page-components/Home';
import Menu from '../ui/page-components/Menu';
import React, { useContext, useEffect } from 'react'
import { SessionContext } from '../ui/page-components/_app';
import { useRouter } from 'next/router';

const index = () => {
	const {userDetails,setUserDetails} =  useContext(SessionContext);
    const router=useRouter()
    useEffect(() => {
    if(userDetails){
      if(userDetails.isAdmin==='1'){
        if(!router.pathname.startsWith("/admin")){
          router.push("/admin/dashboard")
        }
      }
    }
    else{
          router.push("/menu")
    }
  }, [userDetails])
  return (
    <div>{userDetails.isAdmin==='0' && <Menu></Menu>}</div>
  )
}

export default index

