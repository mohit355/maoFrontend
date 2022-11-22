import React from 'react'

const OrderedFoodList = ({foodItemList}) => {
  return (
    <div>
        {/* {JSON.stringify(foodItemList)} */}
        {Object.keys(foodItemList).map((foodId,index)=>{
            const orderedFood=foodItemList[foodId];
            const foodName=orderedFood.foodName
            const half=orderedFood.half;
            const full=orderedFood.full;
            const fullItem= full>0 && <p>{`${foodName} x ${full}`}</p>
            const halfItem= half>0 && <p>{`${foodName}(half) x ${half}`}</p>
            return <div>
                {fullItem}
                {halfItem}
            </div>
        })}
    </div>
  )
}

export default OrderedFoodList