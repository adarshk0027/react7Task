import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import * as Yup from 'yup'
import '../ADD_PRODUCT/index.css'
import fetch_api from '../AxiosComponent/axios'
import { useNavigate } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  formWrapper: {
    //   marginTop: theme.spacing(5),
    //   marginBottom: theme.spacing(8)
  }
}))
//Initial State Set Up ForAdd Form
const INITIAL_STATE = {
  id: '',
  ProductName: '',
  Catogery: '',
  Price: '',
  Description: ''
}
//Validation Schema Set Up FOR Add Form
const VALIDATION_SCHEMA = Yup.object({
  id: Yup.number('Enter An Number').required('Required'),
  ProductName: Yup.string('enter a Name').required('Required'),
  Catogery: Yup.string('enter a Catogery').required('Required'),
  Price: Yup.number('enter a Price').required('Required'),
  Description: Yup.string('enter a Description').required('Required')
})
function AddProduct () {
  const Classes = useStyles()
  //Navigate Set Up
  const Navigate = useNavigate()
  //Formik Set Up
  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: async(values) => {
    const PoStData=await fetch_api.post('/Product',values).catch(error => console.error(error));
    console.log(PoStData);
    Navigate('/')
      
    }
  })
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography className=' btn-info '>Add Product</Typography>
        </Grid>
        <Grid item xs={12} className='mt-5'>
          <Container maxWidth='md' spacing={2} item xs={12}>
            <div className={Classes.formWrapper}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      type='text'
                      name='id'
                      placeholder='ID'
                      className='form-control'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.id}
                    />
                    {formik.touched && formik.errors.id ? (
                      <small className='red'>{formik.errors.id}</small>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type='text'
                      name='ProductName'
                      placeholder='Product Name'
                      className='form-control'
                      onChange={formik.handleChange}
                      value={formik.values.Name}
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
                      value={formik.values.Catogery}
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
                      value={formik.values.Description}
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.Price}
                    />
                    {formik.touched && formik.errors.Price ? (
                      <small className='red'>{formik.errors.Price}</small>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <button type='Submit' className='btn btn-info'>
                      <strong> Add</strong>
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

export default AddProduct
