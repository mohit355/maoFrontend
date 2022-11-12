import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import apis from '../../../../apis/index'
import { useRequest } from '../../../../helpers/request-helper';
import DiscountForm from '../DiscountForm';

const EditDiscount = () => {

    const router = useRouter()

    const {discountId}= router.query;
    const [discount, setDiscount] = useState([])
    const [{ loading:discountByIdLoading }, getDiscountByIdApi] = useRequest(
      {
        url:"/discount/"+discountId,
        method:"GET",
      },
      { manual: true },
    );
    const [{ loading:updateDiscountLoading }, updateDiscountApi] = useRequest(
      {
        url:"/discount/update"+discountId,
        method:"POST",
      },
      { manual: true },
    );

    useEffect(() => {
      if(discountId){
          getDiscountByIdApi().then((response) => {
          console.log("discount",response);
          setDiscount(response.data.data)
        }).catch((err) => {
        
        });
      }
    }, [discountId])

    const onUpdateDiscount=(updatedDiscount)=>{

      // formatting data
    //   updateDiscountApi({
    //     data:updatedDiscount
    //   }).then((response) => {
    //       console.log("prduct",response);
    //       // got back to /products page
    //       router.push("/admin/discount")
    //     }).catch((err) => {
        
    //     });

          router.push("/admin/discounts")



    }

  return (
    <div>EditDiscount - {discount.id}
    <DiscountForm onSubmit={onUpdateDiscount} ></DiscountForm>
    
    <span onClick={onUpdateDiscount} >update</span>
    </div>
  )
}

export default EditDiscount