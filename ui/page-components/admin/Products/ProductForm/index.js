import React, { useEffect, useState } from 'react'

import { Form,Button } from './style'

const ProductForm = ({onSubmit,isEdit,loading,product}) => {

  const [productDetails, setProductDetails] = useState({
    productName:'',
    productHalfPrice:'',
    productFullPrice:'',
    productImage:'',
    productDesc:'',
    productType:'All',
    productCategory:'',
    productImage:'',
  })

  useEffect(() => {

    if(isEdit){
      console.log("HHHHH ",product);
      setProductDetails({...product})
    }
  }, [product])
  

  const handleProductDetailsChange=(event)=>{

    const name=event.target.name;
    const value=event.target.value;

    setProductDetails((prev)=>{

      return {
        ...prev,[name]:value
      }
    })
  }

  const handleProductSubmit=(event)=>{

    event.preventDefault()
    onSubmit(productDetails);
  }


  return (
    <div>
    <Form>
        <label htmlFor="productName">Food item name</label>
        <input
            required
            id="productName"
            name='productName'
            label="Food Item Name"
            value={productDetails.productName}
            onChange={handleProductDetailsChange}
            placeholder="Food name"
          />
        <label htmlFor="productImage">Food image link</label>
          <input
            required
            id="productImage"
            name='productImage'
            type="url"
            label="Food Image"
            value={productDetails.productImage}
            onChange={handleProductDetailsChange}
            placeholder="Food image link"
          />
        <label htmlFor="productHalfprice">Food's half price</label>
          <input
            type="number"
            required
            id="productHalfPrice"
            name='productHalfPrice'
            label="Half Rate"
            value={productDetails.productHalfPrice}
            onChange={handleProductDetailsChange}
            placeholder="Half price"
          />
        <label htmlFor="productFullPrice">Food's full price</label>
          <input
            required
            type="number"
            id="productFullPrice"
            name='productFullPrice'
            label="Full Rate"
            value={productDetails.productFullPrice}
            onChange={handleProductDetailsChange}
            placeholder="Full price"
          />
        <label htmlFor="productType">Food Type</label>
          <select
            id="productType"
            name='productType'
            value={productDetails.productType}
            onChange={handleProductDetailsChange}
          >
            <option value="All">All</option>
            <option value="veg">veg</option>
            <option value="non-veg">non-veg</option>
          </select>
        <label htmlFor="productCategory">Food Category</label>
          <input
            required
            id="productCategory"
            name='productCategory'
            label="Food Category"
            value={productDetails.productCategory}
            onChange={handleProductDetailsChange}
            placeholder="Enter Food Category"
          />
        <label htmlFor="productDesc">Food's description</label>
          <textarea
            required
            id="productDesc"
            name='productDesc'
            rows={3}
            cols={4}
            value={productDetails.productDesc}
            onChange={handleProductDetailsChange}
            placeholder="write description here"
          />

          <Button disabled={loading?true:false} onClick={handleProductSubmit} > {loading?'loading':''} {isEdit&&!loading?"Update food item":"Add food item"}</Button>
    </Form>
    </div>
  )
}

export default ProductForm