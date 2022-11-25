import Orders from "../../../ui/page-components/admin/Orders"
import React, { useContext, useEffect, useState } from 'react'
import {SessionContext} from "../../../ui/page-components/_app/index";
import { useRouter } from 'next/router';
const index = () => {
    const router=useRouter();
    const { userDetails, setUserDetails } = useContext(SessionContext);
    const [showOrder, setShowOrder] = useState(false)

    useEffect(() => {
      
        if(userDetails.isAdmin==='0'){
            router.push("/menu")
        }
        else{
            setShowOrder(true)
        }

    }, [])
    
  return (
    <>
        {showOrder && <Orders/>}
    </>
  )
}

export default index