import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const index = () => {

    const router=useRouter();
    useEffect(() => {
        router.push("/admin/dashboard")
    }, [])
    
    return (
        <></>
    )
}

export default index