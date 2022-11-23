import React, { useContext, useEffect, useState } from 'react'
import Dashboard from "../../../ui/page-components/admin/Dashboard";
import {SessionContext} from "../../../ui/page-components/_app/index";
import { useRouter } from 'next/router';
const index = () => {
    const router=useRouter();
    const [showDashboard, setShowDashboard] = useState(false)
    const { userDetails, setUserDetails } = useContext(SessionContext);

    useEffect(() => {
      
        if(userDetails.isAdmin==='0'){
            router.push("/menu")
        }
        else{
            setShowDashboard(true);
        }
    }, [])
    
  return (
    <>
        {showDashboard && <Dashboard/>}
    </>
  )
}

export default index