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
        url:"/product/update"+productId,
        method:"POST",
      },
      { manual: true },
    );

    useEffect(() => {
      if(productId){
          getProductById().then((response) => {
          console.log("prduct",response);
          setProduct(response.data.data)
        }).catch((err) => {
        
        });
      }
    }, [productId])

    const onUpdateProduct=(updatedProduct)=>{

      // formatting data

      updateProduct({
        data:updateProduct
      }).then((response) => {
          console.log("prduct",response);
          // got back to /products page
          router.push("/admin/products")
        }).catch((err) => {
        
        });


    }

  return (
    <div>EditProduct - {product.productName}
    <ProductForm onSubmit={onUpdateProduct} isEdit={true} ></ProductForm>
    
    <span onClick={onUpdateProduct} >update</span>
    </div>
  )
}

export default EditProduct