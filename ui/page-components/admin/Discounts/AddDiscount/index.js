import React, { useEffect, useState } from 'react'
import { useRequest } from '../../../../helpers/request-helper';
import { useRouter } from 'next/router'
import DiscountForm from '../DiscountForm';


const AddDiscount = () => {

  const router=useRouter();
      const [{ loading:addDiscountApiLoading }, addDiscountApi] = useRequest(
      {
        url:"/discount/add",
        method:"POST",
      },
      { manual: true },
    );


    const onAddDiscount=(DiscountDetails)=>{
        // addDiscountApi({
        //   data:DiscountDetails
        // }).then((response) => {
        //   console.log("prduct",response);
        //   // got back to /discount page
        //   router.push("/admin/discount")
        // }).catch((err) => {
        
        // });
          router.push("/admin/discounts")



    }

  return (
    <div>Add Discount
      <DiscountForm onSubmit={onAddDiscount}></DiscountForm>
      <button onClick={onAddDiscount} > add discount </button>
    </div>
  )
}

export default AddDiscount