import Discounts from "../../../ui/page-components/admin/Discounts"
import React, { useContext, useEffect, useState } from 'react'
import {SessionContext} from "../../../ui/page-components/_app/index";
import { useRouter } from 'next/router';
const index = () => {
    const router=useRouter();
    const [showDiscount, setShowDiscount] = useState(false)
    const { userDetails, setUserDetails } = useContext(SessionContext);

    useEffect(() => {
      
        if(userDetails.isAdmin==='0'){
            router.push("/menu")
        }
        else{
            setShowDiscount(true)
        }

    }, [])
    
  return (
    <>
        {showDiscount && <Discounts/>}
    </>
  )
}

export default index