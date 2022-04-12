import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import fetch_api from '../AxiosComponent/axios'


//api calling function
//Get Api Data
const RetrieveData=async()=>{
  const response=await fetch_api.get('/Product')
  return response.data
}



function HomePage () {
  //product state set up
  const [PRODUCTS, SET_PRODUCT] = useState([])
  //Home page Data Loading Here....
   useEffect(()=>{
    const GetHomePageData=async()=>{
    const ProductData=await RetrieveData()
    SET_PRODUCT(ProductData)
    }
    GetHomePageData()
  },[])
  //Body Of The Home Page Is Here.....
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Product</th>
            <th scope='col'>Catogery</th>
            <th scope='col'>Description</th>
            <th scope='col'>price</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {PRODUCTS
            ? PRODUCTS.map((product,pos) => {
                return (
                  <tr className='mt-2' key={pos}>
                    <th scope='row'>{product.id}</th>
                    <td>{product.ProductName}</td>
                    <td>{product.Catogery}</td>
                    <td>{product.Description}</td>
                    <td>{product.Price}</td>
                    <td>
                    <Link to={`/edit${product.id}`}  
                    state={{ ProductData:{
                      ProductName:product.ProductName,
                      Catogery:product.Catogery,
                      Description:product.Description,
                      Price:product.Price
                    }  }}
                    className='btn btn-warning bg-warning'>
                      Edit
                    </Link>
                    </td>
                    <td>
                    <button
                      className='btn btn-danger text-dark'
                      onClick={()=>{
                        // DeleteFunction Setup
                        alert(`Do You Want to Delete ${product.Name}`)
                        const DeleteApiData=async(deleteId)=>{
                          const DeleteResponse=await fetch_api.delete(`/Product/${deleteId}`)
                          const RemainData=await RetrieveData()
                          SET_PRODUCT(RemainData)
                          
                       }
                       DeleteApiData(product.id)
                      }}
                    >
                      Delete
                    </button>
                    </td>
                  </tr>
                )
              })
            : ''}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage
