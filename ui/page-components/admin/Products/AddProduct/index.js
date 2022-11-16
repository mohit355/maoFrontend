import React, { useEffect, useState } from 'react'
import { useRequest } from '../../../../helpers/request-helper';
import { useRouter } from 'next/router'
import ProductForm from '../ProductForm';


const AddProduct = () => {

  const router=useRouter();
      const [{ loading:addProductLoading }, addProduct] = useRequest(
      {
        url:"/product/add",
        method:"POST",
      },
      { manual: true },
    );


    const onAddProduct=(productDetails)=>{
        addProduct({
          data:productDetails
        }).then((response) => {
          console.log("prduct",response);
          // got back to /products page
          router.push("/admin/products")
        }).catch((err) => {
        
        });


    }

  return (
    <div>AddProduct
      <ProductForm onSubmit={onAddProduct} isEdit={false}></ProductForm>
      <span onClick={onAddProduct} > add </span>
    </div>
  )
}

export default AddProduct