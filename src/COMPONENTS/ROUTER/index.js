import { Routes, Route } from 'react-router-dom'
import React from 'react'
import AddProduct from '../ADD_PRODUCT'
import HomePage from '../HomePage'
import EditProduct from '../EDIT-PAGE'
// Router Set Up
function ROUTER_WRAPPER () {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='add' element={<AddProduct></AddProduct>}></Route>
      <Route path='allProduct'></Route>
      <Route path="edit:id" element={<EditProduct></EditProduct>}></Route>
    </Routes>
  )
}

export default ROUTER_WRAPPER
