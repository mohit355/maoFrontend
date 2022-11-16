import React, { useState } from 'react'
// import input from '@mui/material/input';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';







const ProductForm = ({onSubmit}) => {

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


  return (
    <div>
    <form>
        <input
            required
            id="productName"
            name='productName'
            label="Food Item Name"
            value={productDetails.productName}
            onChange={handleProductDetailsChange}
            helperText=""
          />
          <input
            required
            id="productImage"
            name='productImage'
            type="url"
            label="Food Image"
            value={productDetails.productImage}
            onChange={handleProductDetailsChange}helperText=""
          />
          <input
            required
            id="productHalfprice"
            name='productHalfprice'
            label="Half Rate"
            value={productDetails.productHalfprice}
            onChange={handleProductDetailsChange}helperText=""
          />
          <input
            required
            id="productFullPrice"
            name='productFullPrice'
            label="Full Rate"
            value={productDetails.productFullPrice}
            onChange={handleProductDetailsChange}helperText=""
          />
          {/* <input
            required
            id="productType"
            name='productType'
            label="Food Type"
            value={productDetails.productType}
            onChange={handleProductDetailsChange}
            helperText=""
          /> */}
          <select
            id="productType"
            name='productType'
            value={productDetails.productType}
            label="Age"
            onChange={handleProductDetailsChange}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </select>
          <input
            required
            id="productCategory"
            name='productCategory'
            label="Food Category"
            value={productDetails.productCategory}
            onChange={handleProductDetailsChange}helperText=""
          /><input
            type="textarea"
            required
            id="productDesc"
            name='productDesc'
            label="Food Description"
            value={productDetails.productDesc}
            onChange={handleProductDetailsChange}helperText=""
          />
    </form>
    </div>
  )
}

export default ProductForm