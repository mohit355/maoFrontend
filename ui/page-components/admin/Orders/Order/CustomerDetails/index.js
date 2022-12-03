import React from 'react'

const CustomerDetails = ({User,DeliveryAddress}) => {
  return (
    <div>
      <p>{User?.name}</p>
      <h4>Deliver at:</h4>
      
      {DeliveryAddress!==null ? <p>{`${DeliveryAddress?.houseNo}, ${DeliveryAddress?.area}, ${DeliveryAddress?.city}`} <br/>
        {`Pincode: ${DeliveryAddress?.pincode}`} <br/>
        {`${DeliveryAddress?.receiverPhoneNumber}`}
      </p>:<p>Address removed by the User</p>
      }
    </div>
  )
}

export default CustomerDetails