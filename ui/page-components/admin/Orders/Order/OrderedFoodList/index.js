import React, { useState } from 'react'
import { useEffect } from 'react';

const OrderedFoodList = ({foodItemList,totalPayableAmount=1,totalDiscountedAmount=0}) => {

  const [foodTotal, setFoodTotal] = useState('')

  useEffect(() => {
		let totalPrice = 0;
		(Object.values(foodItemList|| {})|| []).forEach((values) => {
			if (values?.half >= 1) {
				totalPrice += values?.halfPrice * values?.half;
			}
			if (values?.full >= 1) {
				totalPrice += values?.fullPrice * values?.full;
			}
		});
		setFoodTotal(totalPrice);
	}, [foodItemList]);

  return (
    <div>
        {Object.keys(foodItemList).map((foodId,index)=>{
          
            const orderedFood=foodItemList[foodId];
            const foodName=orderedFood.foodName
            const half=orderedFood.half;
            const full=orderedFood.full;
            const fullItem= full>0 && <p>{`${foodName} x ${full}`} <span style={{marginLeft:"30px"}} >Rs {orderedFood.fullPrice *full}</span> </p>
            const halfItem= half>0 && <p>{`${foodName} (half) x ${half}`} <span style={{marginLeft:"30px"}} >Rs {orderedFood.halfPrice *half}</span></p>
            return <div>
                {fullItem}
                {halfItem}
            </div>
        })}
        <div>
          Total discount applied: Rs {totalDiscountedAmount}
        </div>
        <div>
          Total payable amount : Rs {totalPayableAmount}
        </div>
    </div>
  )
}

export default OrderedFoodList