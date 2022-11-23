import React, { useState } from 'react'
import ShowMessage from '../../ErrorHandling/showMessage';
import {
	ModalContainer,
	Form,
	AddButton,
    Title
} from './styles';

const AddressForm = ({onSubmit}) => {

    const [address, setAddress] = useState({
        houseNo:'',
        area:'',
        city:'',
        pincode:'',
        receiverPhoneNumber:'',
        addressType:'',
    })
    const [showNotification, setShowNotification] = useState({
		type: 'success',
		open: false,
		msg: '',
	});


    const handleOnChange=(e)=>{

        const {name, value}=e.target;

        setAddress(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }


    const addAddress=(e)=>{
        e.preventDefault()
        let emptyFieldName=''
		Object.keys(address).forEach(fieldName => {
			if(address[fieldName].length===0 && emptyFieldName===''){
				emptyFieldName=fieldName
				return;
			}
		});
		if(emptyFieldName){
			setShowNotification({
					type: 'error',
					open: true,
					msg: `${emptyFieldName} is required`,
			});
		}
		else{
			const isSuccess=onSubmit(address);

            if(!isSuccess){
                setShowNotification({
					type: 'error',
					open: true,
					msg: `Not able to add address. Please try again`,
			    });
            }
		}

    }

    const handleClose = () => {
		setShowNotification((prev) => {
			return {
				...prev,
				open: false,
			};
		});
	};

  return (
        <ModalContainer>
			<Title id="simple-modal-title">New Address</Title>
			<Form>
				<label htmlFor="houseNo">Flat No / House No / Street</label>
				<input
					required
					id="houseNo"
					name="houseNo"
					value={address.houseNo}
                    onChange={handleOnChange}
                    placeholder="Flat No / House No / Street"
				/>
                <label htmlFor="area">Area / locality</label>
				<input
					required
					id="area"
                    name="area"
					value={address.area}
                    onChange={handleOnChange}
                    placeholder="Area / locality"
				/>
                <label htmlFor="city">City</label>
				<input
					required
					id="city"
                    name="city"
					value={address.city}
                    onChange={handleOnChange}
                    placeholder="city"
				/>
				<label htmlFor="pincode">Pincode</label>
				<input
					required
                    type="number"
					id="pincode"
                    name="pincode"
					value={address.pincode}
                    onChange={handleOnChange}
                    placeholder="Pincode"
				/>
                <label htmlFor="addressType">Address Type</label>
				<select id="addressType" name="addressType" value={address.addressType}
                    onChange={handleOnChange} >
                    <option value="" >Select Address type</option>
                    <option value="home" >Home</option>
                    <option value="office" >work/Office</option>
                    <option value="friendAndFamily" >Friends and Family</option>
                    <option value="other">Others</option>
                </select>
                {address.addressType==="friendAndFamily" && <>
                    <label htmlFor="receiverPhoneNumber">Receiver Phone Number</label>
				<input
					required
                    type="number"
					id="receiverPhoneNumber"
                    name="receiverPhoneNumber"
					value={address.receiverPhoneNumber}
                    onChange={handleOnChange}
                    placeholder="Phone number"
				/>
                </>}
				<AddButton onClick={addAddress} >Add address</AddButton>
			</Form>
            <ShowMessage
				handleClose={handleClose}
				open={showNotification.open}
				type={showNotification.type}
				message={showNotification.msg}
			/>
		</ModalContainer>
  )
}

export default AddressForm