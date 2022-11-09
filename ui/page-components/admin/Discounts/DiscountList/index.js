import React, { useEffect, useState } from 'react'
import apis from '../../../../apis'
import { useRequest } from '../../../../helpers/request-helper';
import Link from 'next/link'


const DiscountList = () => {

    const [allDiscounts, setAllDiscounts] = useState([])
    const [{ loading:getAllDiscountsLoading }, getAllDiscounts] = useRequest(
		{
            url:"/discount/all",
            method:"GET",
        },
		{ manual: true },
	);

    const [{ loading:deleteLoading }, deleteDiscountApi] = useRequest(
		{
            url:"/product/delete",
            method:"DELETE",
        },
		{ manual: true },
	);
    
    const listAllDiscounts=()=>{
        getAllDiscounts().then((response) => {
            console.log("response",response);
            setAllDiscounts(response.data.data)
        }).catch((err) => {
            
        });
    }

    useEffect(() => {
      listAllDiscounts();
    }, [])

    const handleDelete=(discountId)=>{
        deleteDiscountApi({
            url:"/discount/delete/"+discountId,
        },
        ).then((response) => {
            console.log("response",response);
            listAllDiscounts();
        }).catch((err) => {
            
        });
    }
    


  return (
    <div>
        <Link href={`/admin/discounts/add`} >Add New Discount Coupons</Link>
        {allDiscounts.map((discount, index)=>{
            return <div key={discount.id}>
                {discount.id}
                    <Link href={`/admin/discounts/edit/${discount.id}`} >Edit</Link>
                    <span onClick={()=>handleDelete(discount.id)} >Remove</span>
                </div>
        })}
    </div>
  )
}

export default DiscountList