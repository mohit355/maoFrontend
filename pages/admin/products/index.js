import Products from '../../../ui/page-components/admin/Products';
import React, { useContext, useEffect, useState } from 'react'
import {SessionContext} from "../../../ui/page-components/_app/index";
import { useRouter } from 'next/router';
const index = () => {
    const router=useRouter();
    const { userDetails} = useContext(SessionContext);
    const [showProduct, setShowProduct] = useState(false)

    useEffect(() => {
        if(userDetails.isAdmin==='0'){
            console.log("userDetailsuserDetailsuserDetails ",userDetails);
            router.push("/menu")
        }
        else{
            setShowProduct(true);
        }
    }, [])
    
    return (
        <>
            {showProduct && <Products/>}
        </>
    )
}

export default index
