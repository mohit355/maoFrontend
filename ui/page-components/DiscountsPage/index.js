import React, { useEffect, useState } from 'react'
import { useRequest } from '../../helpers/request-helper';
import { ModalContainer, Text } from './styles';


const DiscountsPage = () => {

  const [{ loading: discountLoading }, getDiscountApi] = useRequest(
		{
			url: '/discount/all',
			method: 'GET',
		},
		{ manual: true },
	);

  const [discountList, setDiscountList] = useState([]);

  const getAllDiscounts= async ()=>{

    await getDiscountApi().then((result) => {
      setDiscountList(result.data.data)
    }).catch((err) => {
      
    });
  }


  useEffect(() => {

    getAllDiscounts();
  }, [])
  

  return (
    <ModalContainer>
			<h2 id="simple-modal-title">Offer</h2>
			<p id="simple-modal-description">This is offer Modal</p>
      {JSON.stringify(discountList)}
		</ModalContainer>
  )
}

export default DiscountsPage