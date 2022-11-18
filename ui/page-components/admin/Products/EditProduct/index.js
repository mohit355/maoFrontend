import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import apis from '../../../../apis/index'
import { useRequest } from '../../../../helpers/request-helper';
import ProductForm from '../ProductForm';

const EditProduct = () => {

    const router = useRouter()

    const {productId}= router.query;
    const [product, setProduct] = useState([])
    const [{ loading:productByIdLoading }, getProductById] = useRequest(
      {
        url:"/product/"+productId,
        method:"GET",
      },
      { manual: true },
    );
    const [{ loading:updateProductLoading }, updateProduct] = useRequest(
      {
        url:"/product/update/"+productId,
        method:"POST",
      },
      { manual: true },
    );

    useEffect(() => {
      if(productId){
          getProductById({
            headers:{
				      'x-access-token':localStorage.getItem('afjalMao-x-access-token')
			      }
          }).then((response) => {
          console.log("prduct",response);
          setProduct(response.data.data)
        }).catch((err) => {
        
        });
      }
    }, [productId])

    const onUpdateProduct=(updatedProduct)=>{

      console.log(updatedProduct,"aa");
     let newupdatedProduct={
        productName:updatedProduct.productName,
        productHalfPrice:updatedProduct.productHalfPrice,
        productFullPrice:updatedProduct.productFullPrice,
        productImage:updatedProduct.productImage,
        productDesc:updatedProduct.productDesc,
        productType:updatedProduct.productType,
        productCategory:updatedProduct.productCategory,
        productImage:updatedProduct.productImage,
      }
      updateProduct({
        data:newupdatedProduct,
        headers:{
				  'x-access-token':localStorage.getItem('afjalMao-x-access-token')
			  }
      }).then((response) => {
          console.log("prduct",response);
          router.push("/admin/products")
        }).catch((err) => {
        
        });
    }

  return (
    <div>
    <ProductForm onSubmit={onUpdateProduct} isEdit={true} product={product} ></ProductForm>
    </div>
  )
}

export default EditProduct