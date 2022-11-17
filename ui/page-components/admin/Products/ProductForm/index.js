import React, { useState } from 'react'

import { Form,Button } from './style'

const ProductForm = ({onSubmit,isEdit}) => {

  const [productDetails, setProductDetails] = useState({
    productName:'',
    productHalfprice:'',
    productFullPrice:'',
    productImage:'',
    productDesc:'',
    productType:'All',
    productCategory:'',
    productImage:'',
  })

  const productType=['All','veg',,'non-veg']
  const [value, setValue] = React.useState(productType[0]);
  const [inputValue, setInputValue] = React.useState('');



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
    // event.preventDefault()

      console.log("Submitted");
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
            required
            id="productHalfprice"
            name='productHalfprice'
            label="Half Rate"
            value={productDetails.productHalfprice}
            onChange={handleProductDetailsChange}
            placeholder="Half price"
          />
        <label htmlFor="productFullPrice">Food's full price</label>
          <input
            required
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

          <Button onClick={handleProductSubmit} >{isEdit?"Update food item":"Add food item"}</Button>
    </Form>
    </div>
  )
}

export default ProductForm