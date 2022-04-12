import React, { useState } from 'react'
import {  useFormik } from 'formik'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import fetch_api from '../AxiosComponent/axios'
const useStyles = makeStyles(theme => ({
  formWrapper: {
    //   marginTop: theme.spacing(5),
    //   marginBottom: theme.spacing(8)
  }
}))
//validation schema for Form
const VALIDATION_SCHEMA = Yup.object({
  id: Yup.number('Enter An Number').required('Required'),
  ProductName: Yup.string('enter a Name').required('Required'),
  Catogery: Yup.string('enter a Catogery').required('Required'),
  Price: Yup.number('enter a Price').required('Required'),
  Description: Yup.string('enter a Description').required('Required')
})


function EditProduct () {
  //UseLocation SetUp
  const Location = useLocation().state
  //Get specific Edit Data
  const { ProductData } = Location
  console.log(ProductData);
  //UseParams set up
  const { id } = useParams()
  //Initial State For Edit Form
  const INITIAL_STATE={
    id:id,
    ProductName:ProductData.ProductName,
    Catogery:ProductData.Catogery,
    Description:ProductData.Description,
    Price:ProductData.Price
  }
 //Navigation Set up
  const Navigate = useNavigate()
  const Classes = useStyles()
  //Formik Set Up

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit:async(values)=>{
      const Update=await fetch_api.put(`/Product/${id}`,values) 
      Update.status==200 ? alert("Updated"): alert("Not Updated")
      Navigate('/')
    }
  })

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography className=' btn-info '>Edit Product</Typography>
        </Grid>
        <Grid item xs={12} className='mt-5'>
          <Container maxWidth='md' spacing={2} item xs={12}>
            <div className={Classes.formWrapper}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  {console.log(formik.values.Name)}
                  <Grid item xs={12}>
                    <input
                      type='text'
                      name='id'
                      placeholder='ID'
                      className='form-control'
                      readOnly
                      defaultValue={formik.values.id}
                      
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type='text'
                      name='ProductName'
                      placeholder='Product Name'
                      className='form-control'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      defaultValue={formik.values.ProductName}
                      
                    />
                    {formik.touched && formik.errors.ProductName ? (
                      <small className='red'>{formik.errors.ProductName}</small>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type='text'
                      name='Catogery'
                      placeholder='Catogery'
                      className='form-control'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      defaultValue={formik.values.Catogery}
                    />
                    {formik.touched && formik.errors.Catogery ? (
                      <small className='red'>{formik.errors.Catogery}</small>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={8}>
                    <input
                      type='text'
                      name='Description'
                      placeholder='Description'
                      className='form-control'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      defaultValue={formik.values.Description}
                    />
                    {formik.touched && formik.errors.Description ? (
                      <small className='red'>{formik.errors.Description}</small>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={4}>
                    <input
                      type='text'
                      name='Price'
                      placeholder='Price'
                      className='form-control'
                      defaultValue={formik.values.Price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched && formik.errors.Price ? (
                      <small className='red'>{formik.errors.Price}</small>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <button type='submit' 
                    onClick={()=>{
                      console.log(formik.values);
                    }}
                    className='btn btn-info'>
                      <strong> Submit</strong>
                    </button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditProduct
