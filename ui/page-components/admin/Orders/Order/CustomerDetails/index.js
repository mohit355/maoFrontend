import React from 'react'

const CustomerDetails = ({User,DeliveryAddress}) => {
  return (
    <div>
      <h3 style={{marginBottom:'0px'}}>{User?.name}</h3>
      <p style={{marginTop:'2px'}}>Mobile Number: {User?.phoneNumber}</p>
      <h4 style={{marginBottom:'0px'}}>Deliver at:</h4>
      {DeliveryAddress!==null ? <p style={{marginTop:'2px'}}>{`${DeliveryAddress?.houseNo}, ${DeliveryAddress?.area}, ${DeliveryAddress?.city}`} <br/>
        {`Pincode: ${DeliveryAddress?.pincode}`} <br/>
        {`Mobile no: ${DeliveryAddress?.receiverPhoneNumber || User.phoneNumber }`}
      </p>:<p>Address removed by the User</p>
      }
    </div>
  )
}

export default CustomerDetails