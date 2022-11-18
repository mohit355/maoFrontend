import Home from '../ui/page-components/Home';
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
  }, [userDetails])
  return (
    <div>{userDetails.isAdmin==='0' && <Home></Home>}</div>
  )
}

export default index

// export default Home;
